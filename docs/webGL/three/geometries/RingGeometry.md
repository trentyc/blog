# RingGeometry 圆环缓冲几何体

- 继承自 BufferGeometry。
- 一个用于生成二维圆环几何体的类。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#RingGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/RingGeometry)


## 代码示例

```js
const geometry = new THREE.RingGeometry( 1, 5, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

## 构造函数 (Constructor)

```md
RingGeometry(innerRadius : Float, outerRadius : Float, thetaSegments : Integer, phiSegments : Integer, thetaStart : Float, thetaLength : Float)
innerRadius — 内部半径，默认值为0.5。
outerRadius — 外部半径，默认值为1。
thetaSegments — 圆环的分段数。这个值越大，圆环就越圆。最小值为3，默认值为32。
phiSegments — 圆环半径的分段数字。最小值为1，默认值为1。
thetaStart — 起始角度，默认值为0。
thetaLength — 圆心角，默认值为Math.PI * 2。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。