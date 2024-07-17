# ExtrudeGeometry 挤压缓冲几何体

- 继承自 BufferGeometry。
- 一个形状路径中，挤压出一个BufferGeometry。

<iframe id="scene" src="https://threejs.org/docs/scenes/geometry-browser.html#ExtrudeGeometry"></iframe>

## 代码示例

```js
const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );
```

## 构造函数 (Constructor)

```md
ExtrudeGeometry(shapes : Array, options : Object)
shapes — 形状或者一个包含形状的数组。
options — 一个包含有下列参数的对象：

curveSegments — int，曲线上点的数量，默认值是12。
steps — int，用于沿着挤出样条的深度细分的点的数量，默认值为1。
depth — float，挤出的形状的深度，默认值为1。
bevelEnabled — bool，对挤出的形状应用是否斜角，默认值为true。
bevelThickness — float，设置原始形状上斜角的厚度。默认值为0.2。
bevelSize — float。斜角与原始形状轮廓之间的延伸距离，默认值为bevelThickness-0.1。
bevelOffset — float. Distance from the shape outline that the bevel starts. Default is 0.
bevelSegments — int。斜角的分段层数，默认值为3。
extrudePath — THREE.Curve对象。一条沿着被挤出形状的三维样条线。Bevels not supported for path extrusion.
UVGenerator — Object。提供了UV生成器函数的对象。
该对象将一个二维形状挤出为一个三维几何体。

当使用这个几何体创建Mesh的时候，如果你希望分别对它的表面和它挤出的侧面使用单独的材质，你可以使用一个材质数组。 第一个材质将用于其表面；第二个材质则将用于其挤压出的侧面。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。