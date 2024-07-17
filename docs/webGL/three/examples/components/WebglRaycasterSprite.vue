<script setup lang="ts">
// 导入Vue的响应式引用、生命周期钩子函数
import { ref, onMounted, Ref } from "vue";
// 导入Three.js库
import * as THREE from "three";
// 导入OrbitControls，用于控制相机视角
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 创建一个响应式的容器引用，用于挂载到DOM元素上
const threeContainer = ref() as Ref<HTMLDivElement>;

// 声明场景、相机、渲染器和组的变量
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let group: THREE.Group;

// 声明选中对象的变量和射线投射器、指针的实例
let selectedObject = null;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

// 初始化场景的函数
function init() {
  // 创建一个白色背景的场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // 创建一个组，用于组织场景中的物体
  group = new THREE.Group();
  scene.add(group);

  // 创建一个透视相机，并设置其位置和视野
  camera = new THREE.PerspectiveCamera(
    50, // 视野角度
    window.innerWidth / window.innerHeight, // 宽高比
    1, // 近裁剪面
    1000 // 远裁剪面
  );
  camera.position.set(15, 15, 45); // 设置相机位置
  camera.lookAt(scene.position); // 让相机看向场景中心

  // 创建WebGL渲染器，并设置抗锯齿、窗口大小和像素比例
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // 设置动画循环函数
  renderer.setAnimationLoop(animate);
  // 将渲染器的DOM元素添加到容器中
  threeContainer.value.appendChild(renderer.domElement);

  // 创建控制器，允许用户通过鼠标操作相机
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 15; // 设置最小距离
  controls.maxDistance = 250; // 设置最大距离

  // 创建几个精灵（Sprite），并设置它们的位置、大小和材质
  const sprite1 = new THREE.Sprite(new THREE.SpriteMaterial({ color: "#69f" }));
  sprite1.position.set(6, 5, 5);
  sprite1.scale.set(2, 5, 1);
  group.add(sprite1);

  // 创建第二个精灵，并设置其材质属性和旋转
  const sprite2 = new THREE.Sprite(
    new THREE.SpriteMaterial({ color: "#69f", sizeAttenuation: false })
  );
  sprite2.material.rotation = (Math.PI / 3) * 4;
  sprite2.position.set(8, -2, 2);
  sprite2.center.set(0.5, 0);
  sprite2.scale.set(0.1, 0.5, 0.1);
  group.add(sprite2);

  // 创建一个3D组，设置其位置、缩放和旋转
  const group2 = new THREE.Object3D();
  group2.scale.set(1, 2, 1);
  group2.position.set(-5, 0, 0);
  group2.rotation.set(Math.PI / 2, 0, 0);
  group.add(group2);

  // 在第二个组中创建第三个精灵，并设置其属性
  const sprite3 = new THREE.Sprite(new THREE.SpriteMaterial({ color: "#69f" }));
  sprite3.position.set(0, 2, 5);
  sprite3.scale.set(10, 2, 3);
  sprite3.center.set(-0.1, 0);
  sprite3.material.rotation = Math.PI / 3;
  group2.add(sprite3);

  // 添加窗口大小改变事件的监听器
  window.addEventListener("resize", onWindowResize);
  // 添加鼠标移动事件的监听器
  document.addEventListener("pointermove", onPointerMove);
}

// 动画循环函数，用于渲染每一帧
function animate() {
  renderer.render(scene, camera);
}

// 窗口大小改变时更新相机和渲染器的函数
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 处理鼠标移动事件的函数
function onPointerMove(event: MouseEvent) {
  // 如果之前有选中的对象，重置其材质颜色
  if (selectedObject) {
    selectedObject.material.color.set("#69f"); // 将选中对象的颜色重置为原始颜色
    selectedObject = null; // 重置选中对象为null
  }

  // 将鼠标指针的当前位置转换为归一化的设备坐标（NDC）
  // (-1, -1) 表示视窗的左下角，(1, 1) 表示视窗的右上角
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // 使用当前相机和指针位置设置射线投射器
  // 射线投射器用于从相机发射一条射线，检查它是否与场景中的任何对象相交
  raycaster.setFromCamera(pointer, camera);

  // 使用射线投射器检测与场景中组（group）对象的相交情况
  // 这里我们只检测组对象，而不是整个场景，提高性能
  const intersects = raycaster.intersectObject(group, true);

  // 如果存在交点，处理第一个交点
  if (intersects.length > 0) {
    // 过滤掉无效的交点，只保留有效的对象
    const res = intersects.filter(function (res) {
      return res && res.object;
    })[0];

    // 如果找到有效的交点对象
    if (res && res.object) {
      // 将找到的对象设置为选中对象
      selectedObject = res.object;
      // 改变选中对象的材质颜色，以反馈用户交互
      selectedObject.material.color.set("#f00");
    }
  }
}

// 当组件挂载后调用初始化函数
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
