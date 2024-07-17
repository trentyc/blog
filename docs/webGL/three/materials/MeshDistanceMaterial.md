# MeshDistanceMaterial

- MeshDistanceMaterial 在内部用于使用PointLight来实现阴影映射。
- 也可以用于通过将MeshDistanceMaterial实例指定给Object3D.customDistanceMaterial，来自定义物体阴影投射。

## 例子

[WebGL / shadowmap / pointlight](../examples/webgl_shadowmap_pointlight){target="_blank"}

## 构造函数 (Constructor)

```md
MeshDistanceMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.alphaMap : Texture***

alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。

仅使用纹理的颜色，忽略alpha通道（如果存在）。 对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。 Luminance-only以及luminance/alpha纹理也仍然有效。

***.displacementMap : Texture***

位移贴图会影响网格顶点的位置，与仅影响材质的光照和阴影的其他贴图不同，移位的顶点可以投射阴影，阻挡其他对象，以及充当真实的几何体。 位移纹理是指：网格的所有顶点被映射为图像中每个像素的值（白色是最高的），并且被重定位。

***.displacementScale : Float***

位移贴图对网格的影响程度（黑色是无位移，白色是最大位移）。如果没有设置位移贴图，则不会应用此值。默认值为1。

***.displacementBias : Float***

位移贴图在网格顶点上的偏移量。如果没有设置位移贴图，则不会应用此值。默认值为0。

***.map : Texture***

颜色贴图。可以选择包括一个alpha通道，通常与.transparent 或.alphaTest。默认为null。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。