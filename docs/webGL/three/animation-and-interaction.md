# 动画与交互

## 动画

### 使用 `requestAnimationFrame`

```javascript
function animate() {
  requestAnimationFrame(animate);
  // 更新对象的属性
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // 渲染场景
  renderer.render(scene, camera);
}
animate();
```

### 使用 Three.js 的 `Clock` 对象

```javascript
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  // 更新对象的属性
  cube.rotation.x += delta;
  cube.rotation.y += delta;
  // 渲染场景
  renderer.render(scene, camera);
}
animate();
```

## 交互

### 鼠标事件

```javascript
document.addEventListener("mousemove", onDocumentMouseMove, false);
function onDocumentMouseMove(event) {
  event.preventDefault();
  // 处理鼠标移动事件
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  // 更新相机或物体的位置
}
```

### 控制器

Three.js 提供了多种控制器插件，如 `OrbitControls`、`TrackballControls` 等。

#### 使用 `OrbitControls`

```javascript
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 100;
controls.maxDistance = 500;

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  renderer.render(scene, camera);
}
animate();
```
