<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import * as THREE from "three";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TransformControls } from "three/addons/controls/TransformControls.js";

// 用于Three.js渲染器的容器
const threeContainer = ref() as Ref<HTMLDivElement>;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
const splineHelperObjects = []; // 用于存储样条曲线辅助对象的数组
let splinePointsLength = 4; // 样条曲线点的初始数量
const positions = []; // 用于存储点的位置的数组
const point = new THREE.Vector3(); // 用于存储三维点的临时变量

const raycaster = new THREE.Raycaster(); // 用于射线拾取的射线投射器
const pointer = new THREE.Vector2(); // 用于存储鼠标指针位置的二维向量
const onUpPosition = new THREE.Vector2(); // 用于存储鼠标抬起位置的二维向量
const onDownPosition = new THREE.Vector2(); // 用于存储鼠标按下位置的二维向量

const geometry = new THREE.BoxGeometry(20, 20, 20); // 创建盒子几何体
let transformControl: TransformControls; // 变换控制器

const ARC_SEGMENTS = 200; // 样条曲线的弧段数量

const splines = {}; // 用于存储样条曲线的对象

const params = {
  uniform: true,
  tension: 0.5,
  centripetal: true,
  chordal: true,
  addPoint: addPoint,
  removePoint: removePoint,
  exportSpline: exportSpline,
};

// 初始化场景函数
function init() {
  // 创建场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  // 创建透视相机
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(0, 250, 1000);
  scene.add(camera);

  // 添加环境光
  scene.add(new THREE.AmbientLight(0xf0f0f0, 3));
  // 添加聚光灯
  const light = new THREE.SpotLight(0xffffff, 4.5);
  light.position.set(0, 1500, 200);
  light.angle = Math.PI * 0.2;
  light.decay = 0;
  light.castShadow = true;
  light.shadow.camera.near = 200;
  light.shadow.camera.far = 2000;
  light.shadow.bias = -0.000222;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  scene.add(light);

  // 创建并添加地面
  const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
  planeGeometry.rotateX(-Math.PI / 2);
  const planeMaterial = new THREE.ShadowMaterial({
    color: 0x000000,
    opacity: 0.2,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.position.y = -200;
  plane.receiveShadow = true;
  scene.add(plane);

  // 添加网格辅助线
  const helper = new THREE.GridHelper(2000, 100);
  helper.position.y = -199;
  helper.material.opacity = 0.25;
  helper.material.transparent = true;
  scene.add(helper);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  // 将渲染器的DOM元素添加到容器
  threeContainer.value.appendChild(renderer.domElement);

  // 创建GUI
  const gui = new GUI();
  gui.add(params, "uniform").onChange(render);
  gui
    .add(params, "tension", 0, 1)
    .step(0.01)
    .onChange(function (value) {
      splines.uniform.tension = value;
      updateSplineOutline();
      render();
    });
  gui.add(params, "centripetal").onChange(render);
  gui.add(params, "chordal").onChange(render);
  gui.add(params, "addPoint");
  gui.add(params, "removePoint");
  gui.add(params, "exportSpline");
  gui.open();

  // 创建并设置轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.damping = 0.2;
  controls.addEventListener("change", render); // 控制器变化时重新渲染场景

  // 创建并设置变换控制器
  transformControl = new TransformControls(camera, renderer.domElement);
  transformControl.addEventListener("change", render);
  transformControl.addEventListener("dragging-changed", function (event) {
    controls.enabled = !event.value;
  });
  transformControl.addEventListener("objectChange", function () {
    updateSplineOutline();
  });
  scene.add(transformControl);

  // 添加事件监听器
  document.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("pointerup", onPointerUp);
  document.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);

  // 添加初始样条曲线点
  for (let i = 0; i < splinePointsLength; i++) {
    addSplineObject(positions[i]);
  }

  positions.length = 0;

  for (let i = 0; i < splinePointsLength; i++) {
    positions.push(splineHelperObjects[i].position);
  }

  // 创建样条曲线几何体
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(ARC_SEGMENTS * 3), 3)
  );

  // 创建并添加均匀样条曲线
  let curve = new THREE.CatmullRomCurve3(positions);
  curve.curveType = "catmullrom";
  curve.mesh = new THREE.Line(
    geometry.clone(),
    new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 0.35 })
  );
  curve.mesh.castShadow = true;
  splines.uniform = curve;

  // 创建并添加向心样条曲线
  curve = new THREE.CatmullRomCurve3(positions);
  curve.curveType = "centripetal";
  curve.mesh = new THREE.Line(
    geometry.clone(),
    new THREE.LineBasicMaterial({
      color: 0x00ff00,
      opacity: 0.35,
    })
  );
  curve.mesh.castShadow = true;
  splines.centripetal = curve;

  // 创建并添加弦长样条曲线
  curve = new THREE.CatmullRomCurve3(positions);
  curve.curveType = "chordal";
  curve.mesh = new THREE.Line(
    geometry.clone(),
    new THREE.LineBasicMaterial({
      color: 0x0000ff,
      opacity: 0.35,
    })
  );
  curve.mesh.castShadow = true;
  splines.chordal = curve;

  // 将样条曲线添加到场景中
  for (const k in splines) {
    const spline = splines[k];
    scene.add(spline.mesh);
  }

  // 加载初始点的位置
  load([
    new THREE.Vector3(
      289.76843686945404,
      452.51481137238443,
      56.10018915737797
    ),
    new THREE.Vector3(
      -53.56300074753207,
      171.49711742836848,
      -14.495472686253045
    ),
    new THREE.Vector3(
      -91.40118730204415,
      176.4306956436485,
      -6.958271935582161
    ),
    new THREE.Vector3(-383.785318791128, 491.1365363371675, 47.869296953772746),
  ]);

  render();
}

// 添加样条曲线点对象函数
function addSplineObject(position) {
  const material = new THREE.MeshLambertMaterial({
    color: Math.random() * 0xffffff,
  });
  const object = new THREE.Mesh(geometry, material);

  if (position) {
    object.position.copy(position);
  } else {
    object.position.x = Math.random() * 1000 - 500;
    object.position.y = Math.random() * 600;
    object.position.z = Math.random() * 800 - 400;
  }

  object.castShadow = true;
  object.receiveShadow = true;
  scene.add(object);
  splineHelperObjects.push(object);
  return object;
}

// 添加点函数
function addPoint() {
  splinePointsLength++;

  positions.push(addSplineObject().position);

  updateSplineOutline();

  render();
}

// 移除点函数
function removePoint() {
  if (splinePointsLength <= 4) {
    return;
  }

  const point = splineHelperObjects.pop();
  splinePointsLength--;
  positions.pop();

  if (transformControl.object === point) transformControl.detach();
  scene.remove(point);

  updateSplineOutline();

  render();
}

// 更新样条曲线轮廓函数
function updateSplineOutline() {
  for (const k in splines) {
    const spline = splines[k];

    const splineMesh = spline.mesh;
    const position = splineMesh.geometry.attributes.position;

    for (let i = 0; i < ARC_SEGMENTS; i++) {
      const t = i / (ARC_SEGMENTS - 1);
      spline.getPoint(t, point);
      position.setXYZ(i, point.x, point.y, point.z);
    }

    position.needsUpdate = true;
  }
}

// 导出样条曲线函数
function exportSpline() {
  const strplace = [];

  for (let i = 0; i < splinePointsLength; i++) {
    const p = splineHelperObjects[i].position;
    strplace.push(`new THREE.Vector3(${p.x}, ${p.y}, ${p.z})`);
  }

  console.log(strplace.join(",\n"));
  const code = "[" + strplace.join(",\n\t") + "]";
  prompt("copy and paste code", code);
}

// 加载新的点位置函数
function load(new_positions) {
  while (new_positions.length > positions.length) {
    addPoint();
  }

  while (new_positions.length < positions.length) {
    removePoint();
  }

  for (let i = 0; i < positions.length; i++) {
    positions[i].copy(new_positions[i]);
  }

  updateSplineOutline();
}

// 渲染场景函数
function render() {
  splines.uniform.mesh.visible = params.uniform;
  splines.centripetal.mesh.visible = params.centripetal;
  splines.chordal.mesh.visible = params.chordal;
  renderer.render(scene, camera);
}

// 处理鼠标按下事件
function onPointerDown(event) {
  onDownPosition.x = event.clientX;
  onDownPosition.y = event.clientY;
}

// 处理鼠标抬起事件
function onPointerUp(event) {
  onUpPosition.x = event.clientX;
  onUpPosition.y = event.clientY;

  if (onDownPosition.distanceTo(onUpPosition) === 0) {
    transformControl.detach();
    render();
  }
}

// 处理鼠标移动事件
function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObjects(splineHelperObjects, false);

  if (intersects.length > 0) {
    const object = intersects[0].object;

    if (object !== transformControl.object) {
      transformControl.attach(object);
    }
  }
}

// 处理窗口大小改变事件
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 当组件挂载时初始化场景
onMounted(() => {
  init();
});
</script>

<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100%;
}
</style>
