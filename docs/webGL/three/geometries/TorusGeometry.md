# TorusGeometry 圆环缓冲几何体

- 继承自 BufferGeometry。
- 一个用于生成圆环几何体的类。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#TorusGeometry"></iframe>

## 代码示例

```js
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );
```

## 构造函数 (Constructor)

```md
TorusGeometry(radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float)
radius - 环面的半径，从环面的中心到管道横截面的中心。默认值是1。
tube — 管道的半径，默认值为0.4。
radialSegments — 管道横截面的分段数，默认值为12。
tubularSegments — 管道的分段数，默认值为48。
arc — 圆环的圆心角（单位是弧度），默认值为Math.PI * 2。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。