<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const threeContainer = ref() as Ref<HTMLDivElement>;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let stats: Stats;
let pointLight: THREE.PointLight;
let pointLight2: THREE.PointLight;

onMounted(() => {
  init();
});

function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 10, 70);

  scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0x111122, 3));

  // lights

  function createLight(color: THREE.ColorRepresentation) {
    const intensity = 200;
    const light = new THREE.PointLight(color, intensity, 20);
    light.castShadow = true;
    light.shadow.bias = -0.005; // reduces self-shadowing on double-sided objects

    const geometry = new THREE.SphereGeometry(0.3, 12, 6);
    const material = new THREE.MeshBasicMaterial({ color });
    material.color.multiplyScalar(intensity);
    let sphere = new THREE.Mesh(geometry, material);
    light.add(sphere);

    const texture = new THREE.CanvasTexture(generateTexture());
    texture.magFilter = THREE.NearestFilter;
    texture.wrapT = THREE.RepeatWrapping;
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.set(1, 4.5);

    const geometry2 = new THREE.SphereGeometry(2, 32, 8);
    const material2 = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      alphaMap: texture,
      alphaTest: 0.5,
    });
    const sphere2 = new THREE.Mesh(geometry2, material2);
    sphere2.castShadow = true;
    sphere2.receiveShadow = true;
    light.add(sphere2);

    return light;
  }

  pointLight = createLight(0x0088ff);
  scene.add(pointLight);

  pointLight2 = createLight(0xff8888);
  scene.add(pointLight2);

  const geometry = new THREE.BoxGeometry(30, 30, 30);
  const material = new THREE.MeshPhongMaterial({
    color: 0xa0adaf,
    shininess: 10,
    specular: 0x111111,
    side: THREE.BackSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = 10;
  mesh.receiveShadow = true;
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;
  threeContainer.value.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 10, 0);
  controls.update();

  stats = new Stats();
  threeContainer.value.appendChild(stats.dom);

  window.addEventListener("resize", onWindowResize);
}

function generateTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2;
  canvas.height = 2;

  const context = canvas.getContext("2d");
  if (context) {
    context.fillStyle = "white";
    context.fillRect(0, 1, 2, 1);
  }

  return canvas;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  let time = performance.now() * 0.001;

  pointLight.position.x = Math.sin(time * 0.6) * 9;
  pointLight.position.y = Math.sin(time * 0.7) * 9 + 6;
  pointLight.position.z = Math.sin(time * 0.8) * 9;

  pointLight.rotation.x = time;
  pointLight.rotation.z = time;

  time += 10000;

  pointLight2.position.x = Math.sin(time * 0.6) * 9;
  pointLight2.position.y = Math.sin(time * 0.7) * 9 + 6;
  pointLight2.position.z = Math.sin(time * 0.8) * 9;

  pointLight2.rotation.x = time;
  pointLight2.rotation.z = time;

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
