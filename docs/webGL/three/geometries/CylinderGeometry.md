# CylinderGeometry 圆柱缓冲几何体

- 继承自 BufferGeometry。
- 用于创建圆柱几何体的类。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#CylinderGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/CylinderGeometry)


## 代码示例

```js
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
```

## 构造函数 (Constructor)

```md
CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
radiusTop — 圆柱的顶部半径，默认值是1。
radiusBottom — 圆柱的底部半径，默认值是1。
height — 圆柱的高度，默认值是1。
radialSegments — 圆柱侧面周围的分段数，默认为32。
heightSegments — 圆柱侧面沿着其高度的分段数，默认值为1。
openEnded — 一个Boolean值，指明该圆锥的底面是开放的还是封顶的。默认值为false，即其底面默认是封顶的。
thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
thetaLength — 圆柱底面圆扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆柱。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。