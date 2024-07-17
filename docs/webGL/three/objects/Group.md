# 组 (Group)

它几乎和Object3D是相同的，其目的是使得组中对象在语法上的结构更加清晰。

## 代码示例

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff0});

const cubeA = new THREE.Mesh(geometry, material);
cubeA.position.set(100, 100, 0);

const cubeB = new THREE.Mesh(geometry, material);
cubeB.position.set(-100, -100, 0);

// create a group and add the two cubes
// These cubes can now be rotated / scaled etc as a group

const group = new THREE.Group();
group.add(cubeA);
group.add(cubeB);

sceen.add(group);
```

## 构造器

Group()

## 属性

共有属性请参见其基类 [Object3D] (../core/Object3D#Properties)。

***.isGroup: Boolean***

Read-only flag to check if a given object is of type Group.

***.type: String***

一个字符串："Group"。这个属性不应当被改变。

## 方法

共有方法请参见其基类 [Object3D] (../core/Object3D#Properties)。
