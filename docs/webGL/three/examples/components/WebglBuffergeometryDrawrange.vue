<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 定义一个响应式引用，用于存储 Three.js 渲染容器
const threeContainer = ref() as Ref<HTMLDivElement>;

// 定义 Three.js 相关变量
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let group: THREE.Group;
let positions: Float32Array;
let colors: Float32Array;
let particles: THREE.BufferGeometry;
let pointCloud: THREE.Points;
let particlePositions: Float32Array;
let linesMesh: THREE.LineSegments;

// 定义粒子数据接口
interface ParticleData {
  velocity: THREE.Vector3;
  numConnections: number;
}

// 存储粒子数据的数组
const particlesData: ParticleData[] = [];

// 定义一些常量和控制参数
const maxParticleCount = 1000;
let particleCount = 500;
const r = 800;
const rHalf = r / 2;

const effectController = {
  showDots: true,
  showLines: true,
  minDistance: 150,
  limitConnections: false,
  maxConnections: 20,
  particleCount: 500,
};

// 初始化场景、相机、渲染器等
function init() {
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    4000
  );
  camera.position.z = 1750;

  // 创建场景
  scene = new THREE.Scene();

  // 创建一个组，用于管理场景中的对象
  group = new THREE.Group();
  scene.add(group);

  // 创建一个辅助框，用于可视化边界
  const helper = new THREE.BoxHelper(
    new THREE.Mesh(new THREE.BoxGeometry(r, r, r))
  );
  helper.material.color.setHex(0x474747);
  helper.material.blending = THREE.AdditiveBlending;
  group.add(helper);

  // 计算线段的数量
  const segments = maxParticleCount * maxParticleCount;

  // 初始化位置和颜色缓冲区
  positions = new Float32Array(segments * 3);
  colors = new Float32Array(segments * 3);

  // 创建粒子材质
  const pMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 3,
    blending: THREE.AdditiveBlending,
    transparent: true,
    sizeAttenuation: false,
  });

  // 创建粒子几何体
  particles = new THREE.BufferGeometry();
  particlePositions = new Float32Array(maxParticleCount * 3);

  // 初始化粒子位置和数据
  for (let i = 0; i < maxParticleCount; i++) {
    const x = Math.random() * r - r / 2;
    const y = Math.random() * r - r / 2;
    const z = Math.random() * r - r / 2;

    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;

    particlesData.push({
      velocity: new THREE.Vector3(
        -1 + Math.random() * 2,
        -1 + Math.random() * 2,
        -1 + Math.random() * 2
      ),
      numConnections: 0,
    });
  }

  // 设置粒子几何体的绘制范围和属性
  particles.setDrawRange(0, particleCount);
  particles.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3).setUsage(
      THREE.DynamicDrawUsage
    )
  );

  // 创建粒子云
  pointCloud = new THREE.Points(particles, pMaterial);
  group.add(pointCloud);

  // 创建线段几何体
  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
  );
  geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
  );

  geometry.computeBoundingSphere();

  geometry.setDrawRange(0, 0);

  // 创建线段材质
  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  // 创建线段网格
  linesMesh = new THREE.LineSegments(geometry, material);
  group.add(linesMesh);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  threeContainer.value.appendChild(renderer.domElement);

  // 创建轨道控制器
  const controls = new OrbitControls(camera, threeContainer.value);
  controls.minDistance = 1000;
  controls.maxDistance = 3000;

  // 监听窗口大小变化事件
  window.addEventListener("resize", onWindowResize);
}

// 渲染场景
function render() {
  const time = Date.now() * 0.001;
  group.rotation.y = time * 0.1;
  renderer.render(scene, camera);
}

// 动画循环
function animate() {
  let vertexpos = 0;
  let colorpos = 0;
  let numConnected = 0;

  // 重置粒子的连接数
  for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

  // 更新粒子位置和连接
  for (let i = 0; i < particleCount; i++) {
    const particleData = particlesData[i];

    particlePositions[i * 3] += particleData.velocity.x;
    particlePositions[i * 3 + 1] += particleData.velocity.y;
    particlePositions[i * 3 + 2] += particleData.velocity.z;

    // 处理粒子边界碰撞
    if (
      particlePositions[i * 3 + 1] < -rHalf ||
      particlePositions[i * 3 + 1] > rHalf
    )
      particleData.velocity.y = -particleData.velocity.y;

    if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
      particleData.velocity.x = -particleData.velocity.x;

    if (
      particlePositions[i * 3 + 2] < -rHalf ||
      particlePositions[i * 3 + 2] > rHalf
    )
      particleData.velocity.z = -particleData.velocity.z;

    // 限制粒子连接数
    if (
      effectController.limitConnections &&
      particleData.numConnections >= effectController.maxConnections
    )
      continue;

    // 计算粒子之间的连接
    for (let j = i + 1; j < particleCount; j++) {
      const particleDataB = particlesData[j];
      if (
        effectController.limitConnections &&
        particleDataB.numConnections >= effectController.maxConnections
      )
        continue;

      const dx = particlePositions[i * 3] - particlePositions[j * 3];
      const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
      const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < effectController.minDistance) {
        particleData.numConnections++;
        particleDataB.numConnections++;

        const alpha = 1.0 - dist / effectController.minDistance;

        positions[vertexpos++] = particlePositions[i * 3];
        positions[vertexpos++] = particlePositions[i * 3 + 1];
        positions[vertexpos++] = particlePositions[i * 3 + 2];

        positions[vertexpos++] = particlePositions[j * 3];
        positions[vertexpos++] = particlePositions[j * 3 + 1];
        positions[vertexpos++] = particlePositions[j * 3 + 2];

        colors[colorpos++] = alpha;
        colors[colorpos++] = alpha;
        colors[colorpos++] = alpha;

        colors[colorpos++] = alpha;
        colors[colorpos++] = alpha;
        colors[colorpos++] = alpha;

        numConnected++;
      }
    }
  }

  // 更新线段几何体的绘制范围和属性
  linesMesh.geometry.setDrawRange(0, numConnected * 2);
  linesMesh.geometry.attributes.position.needsUpdate = true;
  linesMesh.geometry.attributes.color.needsUpdate = true;

  // 更新粒子几何体的属性
  pointCloud.geometry.attributes.position.needsUpdate = true;

  render();
}

// 窗口大小改变时的处理
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
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
