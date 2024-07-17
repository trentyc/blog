<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const threeContainer = ref() as Ref<HTMLDivElement>;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let mesh: THREE.Mesh;
let controls: OrbitControls;

function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 2;

  scene = new THREE.Scene();

  const texture = new THREE.TextureLoader().load(
    "/blog/webgl/textures/crate.gif"
  );
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ map: texture });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setAnimationLoop(animate);

  threeContainer.value.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", renderScene); // 在控制器变化时重新渲染场景
  controls.update();

  window.addEventListener("resize", onWindowResize);
}

function renderScene() {
  renderer.render(scene, camera);
}

function animate() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderScene();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderScene();
}

onMounted(() => {
  init();
});
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
