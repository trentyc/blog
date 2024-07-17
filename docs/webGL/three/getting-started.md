# 入门指南

## 安装 Three.js

### 使用 CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

### 使用 npm

```sh
npm install three
```

## 附件组件 (Addons) {#Addons}

three.js 组件，如控件（controls）、加载器（loaders）和后期处理效果（post-processing effects）属于 [addons/](https://github.com/mrdoob/three.js/tree/dev/examples/jsm) 目录的一部分,需要单独导入。

```js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
```

## 基本概念

- **场景 (Scene)**: 包含所有要渲染的对象。
- **相机 (Camera)**: 定义视图的视角。
- **渲染器 (Renderer)**: 负责将场景渲染到屏幕上。

## 创建第一个场景

```javascript
import * as THREE from "three";

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建一个立方体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 设置相机位置
camera.position.z = 5;

// 渲染场景
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```
