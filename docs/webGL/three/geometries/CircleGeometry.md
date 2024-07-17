# CircleGeometry 圆形缓冲几何体

- 继承自 BufferGeometry。
- 用于创建一个圆形的面或者规则多边形。
- 可以通过设置半径、段数等参数来定义圆形的详细程度。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#CircleGeometry"></iframe>

## 代码示例

```js
const geometry = new THREE.CircleGeometry( 5, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );
```

## 构造函数 (Constructor)

```md
CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
radius — 圆形的半径，默认值为1
segments — 分段（三角面）的数量，最小值为3，默认值为32。
thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
thetaLength — 圆形扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。