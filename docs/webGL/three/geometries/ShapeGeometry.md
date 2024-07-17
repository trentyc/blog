# ShapeGeometry 形状缓冲几何体

- 继承自 BufferGeometry。
- 从一个或多个路径形状中创建一个单面多边形几何体。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#ShapeGeometry"></iframe>

## 代码示例

```js
const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );
```

## 构造函数 (Constructor)

```md
ShapeGeometry(shapes : Array, curveSegments : Integer)
shapes — 一个单独的shape，或者一个包含形状的Array。Default is a single triangle shape.
curveSegments - Integer - 每一个形状的分段数，默认值为12。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。