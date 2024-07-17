<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js"; // 导入轨道控制器
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"; // 导入 GLTF 模型加载器
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"; // 导入 HDR 环境贴图加载器

const threeContainer = ref() as Ref<HTMLDivElement>; // 创建一个引用来指向包含 Three.js 渲染器的 div 元素

onMounted(async () => {
  // 创建场景
  const scene = new THREE.Scene();

  // 创建透视相机
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.25,
    20
  );
  camera.position.set(-1.8, 0.6, 2.7); // 设置相机位置

  // 创建 WebGL 渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; // 设置色调映射
  renderer.toneMappingExposure = 1;
  threeContainer.value.appendChild(renderer.domElement); // 将渲染器的 DOM 元素添加到容器中

  // 创建轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", renderScene); // 在控制器变化时重新渲染场景
  controls.minDistance = 2; // 设置最小缩放距离
  controls.maxDistance = 10; // 设置最大缩放距离
  controls.target.set(0, 0, -0.2); // 设置控制器的目标点
  controls.update();

  // 异步加载 HDR 贴图
  async function loadHDRTexture(url: string): Promise<THREE.Texture> {
    return new Promise((resolve) => {
      new RGBELoader().load(url, (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping; // 设置贴图映射
        resolve(texture);
      });
    });
  }

  // 异步加载 GLTF 模型
  async function loadGLTFModel(url: string): Promise<THREE.Group> {
    return new Promise((resolve) => {
      new GLTFLoader().load(url, (gltf) => resolve(gltf.scene));
    });
  }

  // 初始化场景
  async function init() {
    const hdrTexture = await loadHDRTexture(
      "/blog/webgl/models/gltf/DamagedHelmet/glTF/royal_esplanade_1k.hdr"
    );
    scene.background = hdrTexture; // 设置场景背景为 HDR 贴图
    scene.environment = hdrTexture; // 设置场景环境为 HDR 贴图

    const gltfModel = await loadGLTFModel(
      "/blog/webgl/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf"
    );

    // 确保模型正确加载并且着色器编译完成后再添加到场景
    await renderer.compileAsync(gltfModel, camera, scene);
    scene.add(gltfModel); // 将模型添加到场景中

    renderScene(); // 渲染场景
  }

  // 窗口大小调整时更新相机和渲染器
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderScene(); // 渲染场景
  }

  // 渲染场景
  function renderScene() {
    renderer.render(scene, camera);
  }

  init(); // 初始化场景

  // 监听窗口调整大小事件
  window.addEventListener("resize", onWindowResize);
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
