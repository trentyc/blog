# PlaneGeometry 平面缓冲几何体

- 继承自 BufferGeometry。
- 一个用于生成平面几何体的类。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#PlaneGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/PlaneGeometry)


## 代码示例

```js
const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );
```

## 构造函数 (Constructor)

```md
PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)
width — 平面沿着 X 轴的宽度。默认值是 1。
height — 平面沿着 Y 轴的高度。默认值是 1。
widthSegments — （可选）平面的宽度分段数，默认值是 1。
heightSegments — （可选）平面的高度分段数，默认值是 1。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。