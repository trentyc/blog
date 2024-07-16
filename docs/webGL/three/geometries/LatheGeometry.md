# LatheGeometry 车削缓冲几何体

- 继承自 BufferGeometry。车削缓冲几何体
- 创建具有轴对称性的网格，比如花瓶。车削绕着Y轴来进行旋转。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#LatheGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/LatheGeometry)


## 代码示例

```js
const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const geometry = new THREE.LatheGeometry( points );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );
```

## 构造函数 (Constructor)

```md
LatheGeometry(points : Array, segments : Integer, phiStart : Float, phiLength : Float)
points — 一个Vector2对象数组。每个点的X坐标必须大于0。 Default is an array with (0,-0.5), (0.5,0) and (0,0.5) which creates a simple diamond shape.
segments — 要生成的车削几何体圆周分段的数量，默认值是12。
phiStart — 以弧度表示的起始角度，默认值为0。
phiLength — 车削部分的弧度（0-2PI）范围，2PI将是一个完全闭合的、完整的车削几何体，小于2PI是部分的车削。默认值是2PI。

基于参数创建一个LatheGeometry。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。