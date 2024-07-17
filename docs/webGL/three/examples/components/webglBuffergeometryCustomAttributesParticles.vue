<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import * as THREE from "three";

// 用于Three.js渲染器的容器
const threeContainer = ref() as Ref<HTMLDivElement>;

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let particleSystem;
let uniforms;
let geometry;
const particles = 100000;

// 顶点着色器代码
const vertexShader = `
attribute float size;

varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_PointSize = size * ( 300.0 / -mvPosition.z );
  gl_Position = projectionMatrix * mvPosition;
}
`;

// 片段着色器代码
const fragmentShader = `
uniform sampler2D pointTexture;

varying vec3 vColor;

void main() {
  gl_FragColor = vec4( vColor, 1.0 );
  gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
}
`;

// 当组件挂载时初始化场景
onMounted(() => {
  init();
});

function init() {
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );

  // 创建场景
  scene = new THREE.Scene();

  uniforms = {
    pointTexture: {
      value: new THREE.TextureLoader().load(
        "/blog/webgl/textures/sprites/spark1.png"
      ),
    },
  };

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    vertexColors: true,
  });

  const radius = 200;

  geometry = new THREE.BufferGeometry();

  const positions: number[] = [];
  const colors: number[] = [];
  const sizes: number[] = [];

  const color: THREE.Color = new THREE.Color();

  // 填充顶点位置和颜色数据
  for (let i = 0; i < particles; i++) {
    positions.push((Math.random() * 2 - 1) * radius);
    positions.push((Math.random() * 2 - 1) * radius);
    positions.push((Math.random() * 2 - 1) * radius);

    color.setHSL(i / particles, 1.0, 0.5);

    colors.push(color.r, color.g, color.b);

    sizes.push(20);
  }

  // 创建并设置顶点位置和颜色属性
  const positionAttribute = new THREE.Float32BufferAttribute(positions, 3);
  const colorAttribute = new THREE.Float32BufferAttribute(colors, 3);
  const sizeAttribute = new THREE.Float32BufferAttribute(sizes, 1).setUsage(
    THREE.DynamicDrawUsage
  );
  geometry.setAttribute("position", positionAttribute);
  geometry.setAttribute("color", colorAttribute);
  geometry.setAttribute("size", sizeAttribute);

  particleSystem = new THREE.Points(geometry, shaderMaterial);
  scene.add(particleSystem);

  // 创建渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate); // 设置动画循环

  // 将渲染器的DOM元素添加到容器
  threeContainer.value.appendChild(renderer.domElement);

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
  const time = Date.now() * 0.005;

  particleSystem.rotation.z = 0.01 * time;

  const sizes = geometry.attributes.size.array;

  for (let i = 0; i < particles; i++) {
    sizes[i] = 10 * (1 + Math.sin(0.1 * i + time));
  }

  geometry.attributes.size.needsUpdate = true;

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
