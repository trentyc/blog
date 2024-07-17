<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import * as THREE from "three";
import * as GeometryUtils from "three/addons/utils/GeometryUtils.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// 定义一个响应式引用，用于存储 Three.js 渲染容器
const threeContainer = ref() as Ref<HTMLDivElement>;

// 定义 Three.js 相关变量
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

const objects: THREE.Object3D[] = [];
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

function init() {
  camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 200);
  camera.position.z = 150;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);
  scene.fog = new THREE.Fog(0x111111, 150, 200);

  const subdivisions = 6;
  const recursion = 1;

  const points = GeometryUtils.hilbert3D(
    new THREE.Vector3(0, 0, 0),
    25.0,
    recursion,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  );
  const spline = new THREE.CatmullRomCurve3(points);

  const samples = spline.getPoints(points.length * subdivisions);
  const geometrySpline = new THREE.BufferGeometry().setFromPoints(samples);

  const line = new THREE.Line(
    geometrySpline,
    new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 1, gapSize: 0.5 })
  );
  line.computeLineDistances();

  objects.push(line);
  scene.add(line);

  const geometryBox = box(50, 50, 50);
  const lineSements = new THREE.LineSegments(
    geometryBox,
    new THREE.LineDashedMaterial({ color: 0xffaa00, dashSize: 3, gapSize: 1 })
  );
  lineSements.computeLineDistances();

  objects.push(lineSements);
  scene.add(lineSements);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setAnimationLoop(animate);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render); // 在控制器变化时重新渲染场景
  controls.update();

  threeContainer.value.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);
}

function box(width, height, depth) {
  (width = width * 0.5), (height = height * 0.5), (depth = depth * 0.5);

  const geometry = new THREE.BufferGeometry();
  const position = [];

  position.push(
    -width,
    -height,
    -depth,
    -width,
    height,
    -depth,

    -width,
    height,
    -depth,
    width,
    height,
    -depth,

    width,
    height,
    -depth,
    width,
    -height,
    -depth,

    width,
    -height,
    -depth,
    -width,
    -height,
    -depth,

    -width,
    -height,
    depth,
    -width,
    height,
    depth,

    -width,
    height,
    depth,
    width,
    height,
    depth,

    width,
    height,
    depth,
    width,
    -height,
    depth,

    width,
    -height,
    depth,
    -width,
    -height,
    depth,

    -width,
    -height,
    -depth,
    -width,
    -height,
    depth,

    -width,
    height,
    -depth,
    -width,
    height,
    depth,

    width,
    height,
    -depth,
    width,
    height,
    depth,

    width,
    -height,
    -depth,
    width,
    -height,
    depth
  );

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(position, 3)
  );

  return geometry;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  render();
}

function render() {
  const time = Date.now() * 0.001;
  scene.traverse(function (object) {
    if (object.isLine) {
      object.rotation.x = 0.25 * time;
      object.rotation.y = 0.25 * time;
    }
  });
  renderer.render(scene, camera);
}

// 在组件挂载时初始化 Three.js 场景
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
