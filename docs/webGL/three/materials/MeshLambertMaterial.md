# Lambert网格材质(MeshLambertMaterial)

- 一种非光泽表面的材质，没有镜面高光。
- 该材质使用基于非物理的Lambertian模型来计算反射率。 这可以很好地模拟一些表面（例如未经处理的木材或石材），但不能模拟具有镜面高光的光泽表面（例如涂漆木材）。 MeshLambertMaterial uses per-fragment shading。
- 由于反射率和光照模型的简单性，MeshPhongMaterial，MeshStandardMaterial或者MeshPhysicalMaterial 上使用这种材质时会以一些图形精度为代价，得到更高的性能。
  
<iframe id="scene" src="https://threejs.org/docs/scenes/material-browser.html#MeshLambertMaterial"></iframe>

## 构造函数 (Constructor)

```md
MeshLambertMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。

属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色），内部调用Color.set(color)。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.alphaMap : Texture***

alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。

仅使用纹理的颜色，忽略alpha通道（如果存在）。 对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。 Luminance-only以及luminance/alpha纹理也仍然有效。

***.aoMap : Texture***

该纹理的红色通道用作环境遮挡贴图。默认值为null。aoMap需要第二组UV。

***.aoMapIntensity : Float***

环境遮挡效果的强度。默认值为1。零是不遮挡效果。

***.bumpMap : Texture***

用于创建凹凸贴图的纹理。黑色和白色值映射到与光照相关的感知深度。凹凸实际上不会影响对象的几何形状，只影响光照。如果定义了法线贴图，则将忽略该贴图。

***.bumpScale : Float***

凹凸贴图会对材质产生多大影响。典型范围是0-1。默认值为1。

***.color : Color***

材质的颜色(Color)，默认值为白色 (0xffffff)。

***.combine : Integer***

如何将表面颜色的结果与环境贴图（如果有）结合起来。

选项为THREE.MultiplyOperation（默认值），THREE.MixOperation， THREE.AddOperation。如果选择多个，则使用.reflectivity在两种颜色之间进行混合。

***.displacementMap : Texture***

位移贴图会影响网格顶点的位置，与仅影响材质的光照和阴影的其他贴图不同，移位的顶点可以投射阴影，阻挡其他对象， 以及充当真实的几何体。位移纹理是指：网格的所有顶点被映射为图像中每个像素的值（白色是最高的），并且被重定位。

***.displacementScale : Float***

位移贴图对网格的影响程度（黑色是无位移，白色是最大位移）。如果没有设置位移贴图，则不会应用此值。默认值为1。

***.displacementBias : Float***

位移贴图在网格顶点上的偏移量。如果没有设置位移贴图，则不会应用此值。默认值为0。

***.emissive : Color***

材质的放射（光）颜色，基本上是不受其他光照影响的固有颜色。默认为黑色。

***.emissiveMap : Texture***

设置放射（发光）贴图。默认值为null。放射贴图颜色由放射颜色和强度所调节。 如果你有一个放射贴图，请务必将放射颜色设置为黑色以外的其他颜色。

***.emissiveIntensity : Float***

放射光强度。调节发光颜色。默认为1。

***.envMap : Texture***

环境贴图。默认值为null。

***.flatShading : Boolean***

定义材质是否使用平面着色进行渲染。默认值为false。

***.fog : Boolean***

材质是否受雾影响。默认为true。

***.lightMap : Texture***

光照贴图。默认值为null。lightMap需要第二组UV。

***.lightMapIntensity : Float***

烘焙光的强度。默认值为1。

***.map : Texture***

颜色贴图。可以选择包括一个alpha通道，通常与.transparent 或.alphaTest。默认为null。

***.normalMap : Texture***

用于创建法线贴图的纹理。RGB值会影响每个像素片段的曲面法线，并更改颜色照亮的方式。法线贴图不会改变曲面的实际形状，只会改变光照。 In case the material has a normal map authored using the left handed convention, the y component of normalScale should be negated to compensate for the different handedness.

***.normalMapType : Integer***

法线贴图的类型。

选项为THREE.TangentSpaceNormalMap（默认）和THREE.ObjectSpaceNormalMap。

***.normalScale : Vector2***

法线贴图对材质的影响程度。典型范围是0-1。默认值是Vector2设置为（1,1）。

***.reflectivity : Float***

环境贴图对表面的影响程度; 见.combine。默认值为1，有效范围介于0（无反射）和1（完全反射）之间。

***.refractionRatio : Float***

空气的折射率（IOR）（约为1）除以材质的折射率。它与环境映射模式THREE.CubeRefractionMapping 和THREE.EquirectangularRefractionMapping一起使用。 The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material. It is used with environment mapping mode THREE.CubeRefractionMapping. 折射率不应超过1。默认值为0.98。

***.specularMap : Texture***

材质使用的高光贴图。默认值为null。

***.wireframe : Boolean***

将几何体渲染为线框。默认值为false（即渲染为平面多边形）。

***.wireframeLinecap : String***

定义线两端的外观。可选值为 'butt'，'round' 和 'square'。默认为'round'。

该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。

***.wireframeLinejoin : String***

定义线连接节点的样式。可选值为 'round', 'bevel' 和 'miter'。默认值为 'round'。

该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。

***.wireframeLinewidth : Float***

控制线框宽度。默认值为1。

由于OpenGL Core Profile与 大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。