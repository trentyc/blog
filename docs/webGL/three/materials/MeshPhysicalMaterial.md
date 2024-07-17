# 物理网格材质(MeshPhysicalMaterial)

MeshStandardMaterial的扩展，提供了更高级的基于物理的渲染属性：

- Clearcoat: 有些类似于车漆，碳纤，被水打湿的表面的材质需要在面上再增加一个透明的，具有一定反光特性的面。而且这个面说不定有一定的起伏与粗糙度。Clearcoat可以在不需要重新创建一个透明的面的情况下做到类似的效果。
- 基于物理的透明度:.opacity属性有一些限制:在透明度比较高的时候，反射也随之减少。使用基于物理的透光性.transmission属性可以让一些很薄的透明表面，例如玻璃，变得更真实一些。
- 高级光线反射: 为非金属材质提供了更多更灵活的光线反射。
- Sheen: Can be used for representing cloth and fabric materials.

物理网格材质使用了更复杂的着色器功能，所以在每个像素的渲染都要比three.js中的其他材质更费性能，大部分的特性是默认关闭的，需要手动开启，每开启一项功能在开启的时候才会更耗性能。请注意，为获得最佳效果，您在使用此材质时应始终指定environment map。
  
<iframe id="scene" src="https://threejs.org/docs/scenes/material-browser.html#MeshPhysicalMaterial"></iframe>

## 构造函数 (Constructor)

```md
MeshPhysicalMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material和MeshStandardMaterial继承的任何属性)

属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色），内部调用Color.set(color)。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.bumpMap : Texture***

用于创建凹凸贴图的纹理。黑色和白色值映射到与光照相关的感知深度。凹凸实际上不会影响对象的几何形状，只影响光照。如果定义了法线贴图，则将忽略该贴图。

***.bumpScale : Float***

凹凸贴图会对材质产生多大影响。典型范围是0-1。默认值为1。

***.displacementMap : Texture***

位移贴图会影响网格顶点的位置，与仅影响材质的光照和阴影的其他贴图不同，移位的顶点可以投射阴影，阻挡其他对象， 以及充当真实的几何体。位移纹理是指：网格的所有顶点被映射为图像中每个像素的值（白色是最高的），并且被重定位。

***.displacementScale : Float***

位移贴图对网格的影响程度（黑色是无位移，白色是最大位移）。如果没有设置位移贴图，则不会应用此值。默认值为1。

***.displacementBias : Float***

位移贴图在网格顶点上的偏移量。如果没有设置位移贴图，则不会应用此值。默认值为0。

***.flatShading : Boolean***

定义材质是否使用平面着色进行渲染。默认值为false。

***.normalMap : Texture***

用于创建法线贴图的纹理。RGB值会影响每个像素片段的曲面法线，并更改颜色照亮的方式。法线贴图不会改变曲面的实际形状，只会改变光照。 In case the material has a normal map authored using the left handed convention, the y component of normalScale should be negated to compensate for the different handedness.

***.normalMapType : Integer***

法线贴图的类型。

选项为THREE.TangentSpaceNormalMap（默认）和THREE.ObjectSpaceNormalMap。

***.normalScale : Vector2***

法线贴图对材质的影响程度。典型范围是0-1。默认值是Vector2设置为（1,1）。

***.wireframe : Boolean***

将几何体渲染为线框。默认值为false（即渲染为平滑着色）。

***.wireframeLinewidth : Float***

控制线框宽度。默认值为1。

由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。