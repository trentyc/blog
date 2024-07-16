# ConeGeometry 圆锥缓冲几何体

- 继承自 CylinderGeometry。
- 用于生成圆锥几何体。
- 通过设置宽度、高度、深度等参数，自动生成顶点数据。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#ConeGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/ConeGeometry)

## 代码示例

```js
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );
```

## 构造函数 (Constructor)

```md
ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
radius — 圆锥底部的半径，默认值为1。
height — 圆锥的高度，默认值为1。
radialSegments — 圆锥侧面周围的分段数，默认为32。
heightSegments — 圆锥侧面沿着其高度的分段数，默认值为1。
openEnded — 一个Boolean值，指明该圆锥的底面是开放的还是封顶的。默认值为false，即其底面默认是封顶的。
thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
thetaLength — 圆锥底面圆扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆锥
```


## 属性 (Properties) {#Properties}

共有属性请参见其基类 [CylinderGeometry](./CylinderGeometry#Properties)。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [CylinderGeometry](./CylinderGeometry#Methods)。