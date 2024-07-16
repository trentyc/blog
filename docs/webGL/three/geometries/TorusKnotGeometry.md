# TorusKnotGeometry 圆环缓冲扭结几何体

- 继承自 BufferGeometry。
- 创建一个圆环扭结，其特殊形状由一对互质的整数，p和q所定义。如果p和q不互质，创建出来的几何体将是一个环面链接。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#TorusKnotGeometry"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/TorusKnotGeometry)


## 代码示例

```js
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );
```

## 构造函数 (Constructor)

```md
TorusKnotGeometry(radius : Float, tube : Float, tubularSegments : Integer, radialSegments : Integer, p : Integer, q : Integer)
radius - 圆环的半径，默认值为1。
tube — 管道的半径，默认值为0.4。
tubularSegments — 管道的分段数量，默认值为64。
radialSegments — 横截面分段数量，默认值为8。
p — 这个值决定了几何体将绕着其旋转对称轴旋转多少次，默认值是2。
q — 这个值决定了几何体将绕着其内部圆环旋转多少次，默认值是3。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。