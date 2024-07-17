<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 用于Three.js渲染器的容器
const threeContainer = ref() as Ref<HTMLDivElement>;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;

// 顶点着色器代码
const vertexShader = `
precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix; // 模型视图矩阵
uniform mat4 projectionMatrix; // 投影矩阵

attribute vec3 position; // 顶点位置
attribute vec4 color; // 顶点颜色

varying vec3 vPosition; // 传递到片段着色器的顶点位置
varying vec4 vColor; // 传递到片段着色器的顶点颜色

void main() {
	vPosition = position;
	vColor = color;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); // 计算顶点位置
}
`;

// 片段着色器代码
const fragmentShader = `
precision mediump float;
precision mediump int;

uniform float time; // 时间变量

varying vec3 vPosition; // 从顶点着色器传递过来的顶点位置
varying vec4 vColor; // 从顶点着色器传递过来的顶点颜色

void main() {
  vec4 color = vec4(vColor);
  color.r += sin(vPosition.x * 10.0 + time) * 0.5; // 根据时间和位置计算红色分量
  gl_FragColor = color; // 设置片段颜色
}
`;

// 当组件挂载时初始化场景
onMounted(() => {
  init();
});

function init() {
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    10
  );
  camera.position.z = 2;

  // 创建场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x101010);

  // 创建几何体
  const vertexCount = 200 * 3; // 三角形数 * 每个三角形的顶点数
  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const colors: number[] = [];

  // 填充顶点位置和颜色数据
  for (let i = 0; i < vertexCount; i++) {
    positions.push(Math.random() - 0.5);
    positions.push(Math.random() - 0.5);
    positions.push(Math.random() - 0.5);

    colors.push(Math.random() * 255);
    colors.push(Math.random() * 255);
    colors.push(Math.random() * 255);
    colors.push(Math.random() * 255);
  }

  // 创建并设置顶点位置和颜色属性
  const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
  const colorAttribute = new THREE.Uint8BufferAttribute(colors, 4);
  colorAttribute.normalized = true; // 颜色值归一化
  geometry.setAttribute("position", positionAttribute);
  geometry.setAttribute("color", colorAttribute);

  // 创建材质，使用自定义的着色器
  const material = new THREE.RawShaderMaterial({
    uniforms: {
      time: { value: 1.0 },
    },
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
  });

  // 创建网格对象并添加到场景
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate); // 设置动画循环

  // 将渲染器的DOM元素添加到容器
  threeContainer.value.appendChild(renderer.domElement);

  // 创建并设置轨道控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", renderScene); // 控制器变化时重新渲染场景
  controls.update();

  // 添加窗口大小改变事件监听器
  window.addEventListener("resize", onWindowResize);

  // 开始动画
  animate();
}

// 渲染场景
function renderScene() {
  renderer.render(scene, camera);
}

// 处理窗口大小改变事件
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 动画循环
function animate() {
  const time = performance.now();

  const object = scene.children[0] as THREE.Mesh;

  // 旋转对象并更新时间uniform
  object.rotation.y = time * 0.0005;
  (object.material as THREE.RawShaderMaterial).uniforms.time.value =
    time * 0.005;

  renderScene();
}
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
