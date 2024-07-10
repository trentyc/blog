# 灯光和阴影

## 灯光类型

### 环境光

```javascript
const light = new THREE.AmbientLight(0x404040); // 柔和的白光
scene.add(light);
```

### 平行光

```javascript
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);
```

### 点光源

```javascript
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(50, 50, 50);
scene.add(light);
```

## 阴影

### 启用渲染器阴影

```javascript
renderer.shadowMap.enabled = true;
```

### 设置物体接收阴影

```javascript
mesh.receiveShadow = true;
```

### 设置物体投射阴影

```javascript
mesh.castShadow = true;
```

### 示例

```javascript
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 0);
light.castShadow = true;
scene.add(light);

const planeGeometry = new THREE.PlaneGeometry(200, 200);
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true;
scene.add(plane);
```
