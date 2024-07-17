# 骨骼 (Bone)

骨骼是Skeleton(骨架)的一部分。骨架是由SkinnedMesh(蒙皮网格)依次来使用的。骨骼几乎和空白Object3D相同。

## 代码示例

```js
const root = new THREE.Bone();
const child = new THREE.Bone();

root.add(child);
child.position.y = 5;
```

## 构造器

Bone()
创建一个新的Bone.

## 属性

共有属性请参见其基类 [Object3D] (../core/Object3D#Properties)。

***.isBone: Boolean***

Read-only flag to check if a given object is of type Bone.

***.type: String***

设置为"Bone", 者可以用于在一个场景中找到所有的Bones。

## 方法

共有方法请参见其基类 [Object3D] (../core/Object3D#Properties)。