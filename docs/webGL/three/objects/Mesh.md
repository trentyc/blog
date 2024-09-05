# 网格(Mesh)

表示基于以三角形为 polygon mesh (多边形网格) 的物体的类。同时也作为其它类的基类，例如 SkinnedMesh。

## 代码示例

```js
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
```

## 构造器

Mesh(geometry: BufferGeometry, material: Material)

geometry --- (可选) BufferGeometry 的实例, 默认值是一个新的 BufferGeometry。
material --- (可选) 一个 Material, 或是一个包含 Material 的数组， 默认是一个新的 MeshBasicMaterial。

## 属性

共有属性请参见其基类 [Object3D](../core/Object3D#Properties)

***.geometry: BufferGeometry***

BufferGeometry 的实例或者派生类，定义了物体的结构。

***.isMesh: Boolean***

Read-only flag to check if a given obhect is of type Mesh。

***.material: Material***

由 Material 基类或者一个包含材质的数组派生而来的材质实例，定义了物体的外观。默认值是一个MeshBasicMaterial。

