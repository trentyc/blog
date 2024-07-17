# TubeGeometry 管道缓冲几何体

- 继承自 BufferGeometry。
- 创建一个沿着三维曲线延伸的管道。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#TubeGeometry"></iframe>

## 代码示例

```js
class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

## 构造函数 (Constructor)

```md
TubeGeometry(path : Curve, tubularSegments : Integer, radius : Float, radialSegments : Integer, closed : Boolean)
path — Curve - 一个由基类Curve继承而来的3D路径。 Default is a quadratic bezier curve.
tubularSegments — Integer - 组成这一管道的分段数，默认值为64。
radius — Float - 管道的半径，默认值为1。
radialSegments — Integer - 管道横截面的分段数目，默认值为8。
closed — Boolean 管道的两端是否闭合，默认值为false。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

***.tangents : Array***

一个Vector3切线数组。

***.normals : Array***

一个Vector3法线数组。

***.binormals : Array***

一个Vector3次法线数组。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。