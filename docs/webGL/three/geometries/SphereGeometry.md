# SphereGeometry 立方缓冲几何体

- 继承自 BufferGeometry。
- 一个用于生成球体的类。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#SphereGeometry"></iframe>

## 代码示例

```js
const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
```

## 构造函数 (Constructor)

```md
SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
radius — 球体半径，默认为1。
widthSegments — 水平分段数（沿着经线分段），最小值为3，默认值为32。
heightSegments — 垂直分段数（沿着纬线分段），最小值为2，默认值为16。
phiStart — 指定水平（经线）起始角度，默认值为0。。
phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI * 2。
thetaStart — 指定垂直（纬线）起始角度，默认值为0。
thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。
该几何体是通过扫描并计算围绕着Y轴（水平扫描）和X轴（垂直扫描）的顶点来创建的。 因此，不完整的球体（类似球形切片）可以通过为phiStart，phiLength，thetaStart和thetaLength设置不同的值来创建， 以定义我们开始（或结束）计算这些顶点的起点（或终点）。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。