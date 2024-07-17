<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";

const threeContainer = ref() as Ref<HTMLDivElement>;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let stats: Stats;
let points: THREE.Points;

onMounted(() => {
  init();
  animate();
});

function init() {
  camera = new THREE.PerspectiveCamera(
    27,
    window.innerWidth / window.innerHeight,
    5,
    3500
  );
  camera.position.z = 2750;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050505);
  scene.fog = new THREE.Fog(0x050505, 2000, 3500);

  const particles = 3000;
  const geometry = new THREE.BufferGeometry();

  const positions: number[] = [];
  const colors: number[] = [];

  const color: THREE.Color = new THREE.Color();

  const n = 1000;
  const n2 = n / 2; // half of n

  for (let i = 0; i < particles; i++) {
    // positions
    const x = Math.random() * n - n2;
    const y = Math.random() * n - n2;
    const z = Math.random() * n - n2;

    positions.push(x, y, z);

    // colors

    const vx = x / n + 0.5;
    const vy = y / n + 0.5;
    const vz = z / n + 0.5;

    color.setRGB(vx, vy, vz, THREE.SRGBColorSpace);
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeBoundingSphere();

  const material = new THREE.PointsMaterial({ size: 20, vertexColors: true });

  points = new THREE.Points(geometry, material);

  scene.add(points);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);

  threeContainer.value.appendChild(renderer.domElement);

  stats = new Stats();
  threeContainer.value.appendChild(stats.dom);

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  const time = Date.now() * 0.001;

  points.rotation.x = time * 0.25;
  points.rotation.y = time * 0.5;

  renderer.render(scene, camera);

  stats.update();
}
</script>

<template>
  <div ref="threeContainer" class="three-container"></div>
  <!-- Three.js 渲染器的容器 -->
</template>

<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100%;
}
</style>
