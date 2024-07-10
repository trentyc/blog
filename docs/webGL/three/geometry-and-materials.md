# 几何体和材质

## 几何体

Three.js 提供了多种几何体，如立方体、球体、圆柱体等。

### 创建立方体

```javascript
const geometry = new THREE.BoxGeometry(width, height, depth);
```

### 创建球体

```javascript
const geometry = new THREE.SphereGeometry(
  radius,
  widthSegments,
  heightSegments
);
```

## 材质

材质决定了物体的外观，如颜色、纹理等。

### 基础材质

```javascript
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
```

### Phong 材质

```javascript
const material = new THREE.MeshPhongMaterial({
  color: 0x00ff00,
  shininess: 100,
});
```

## 纹理

纹理是应用于几何体表面的图像。

### 加载纹理

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("path/to/texture.jpg");
const material = new THREE.MeshBasicMaterial({ map: texture });
```
