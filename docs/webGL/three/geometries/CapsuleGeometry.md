# CapsuleGeometry

- 继承自 BufferGeometry。
- 胶囊图形类。
- 通过半径和高度来进行构造。
- 使用lathe来进行构造

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#CapsuleGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/CapsuleGeometry)

## 代码示例

```js
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const capsule = new THREE.Mesh( geometry, material ); scene.add( capsule );
```

## 构造函数 (Constructor)

```md
CapsuleGeometry(radius : Float, length : Float, capSegments : Integer, radialSegments : Integer)
radius — 胶囊半径。可选的; 默认值为1。
length — 中间区域的长度。可选的; 默认值为1。
capSegments — 构造盖子的曲线部分的个数。可选的; 默认值为4。
radialSegments — 覆盖胶囊圆周的分离的面的个数。可选的; 默认值为8。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。