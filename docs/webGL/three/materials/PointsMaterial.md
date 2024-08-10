# 点材质(PointsMaterial)

- Points使用的默认材质。
  
## 代码示例
```js
const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {

	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );

	vertices.push( x, y, z );

}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

const material = new THREE.PointsMaterial( { color: 0x888888 } );

const points = new THREE.Points( geometry, material );

scene.add( points );
```

## 例子

[WebGL / BufferGeometry / points](../examples/webgl_buffergeometry_points){target="_blank"}

## 构造函数 (Constructor)

```md
PointsMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。

属性color例外，其可以作为十六进制字符串传递，默认情
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.alphaMap : Texture***

alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。

仅使用纹理的颜色，忽略alpha通道（如果存在）。 对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。 Luminance-only以及luminance/alpha纹理也仍然有效。

***.color : Color***

材质的颜色(Color)，默认值为白色 (0xffffff)。

***.fog : Boolean***

材质是否受雾影响。默认为true。

***.map : Texture***

使用来自Texture的数据设置点的颜色。可以选择包括一个alpha通道，通常与 .transparent或.alphaTest。

***.size : Number***

设置点的大小。默认值为1.0。
Will be capped if it exceeds the hardware dependent parameter gl.ALIASED_POINT_SIZE_RANGE.

***.sizeAttenuation : Boolean***

指定点的大小是否因相机深度而衰减。（仅限透视摄像头。）默认为true。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。