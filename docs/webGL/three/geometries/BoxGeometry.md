# BoxGeometry 立方缓冲几何体

- 继承自 BufferGeometry。
- 用于创建一个立方体或长方体。
- 通过设置宽度、高度、深度等参数，自动生成顶点数据。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#BoxGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/BoxGeometry)


## 代码示例

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );
```

## 构造函数 (Constructor)

```md
BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer, heightSegments : Integer, depthSegments : Integer)
width — X 轴上面的宽度，默认值为 1。
height — Y 轴上面的高度，默认值为 1。
depth — Z 轴上面的深度，默认值为 1。
widthSegments — （可选）宽度的分段数，默认值是 1。
heightSegments — （可选）高度的分段数，默认值是 1。
depthSegments — （可选）深度的分段数，默认值是 1。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。