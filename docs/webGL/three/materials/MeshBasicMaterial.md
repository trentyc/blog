# 基础网格材质(MeshBasicMaterial)

- 一个以简单着色（平面或线框）方式来绘制几何体的材质。
- 这种材质不受光照的影响。

<iframe id="scene" src="https://threejs.org/docs/scenes/material-browser.html#MeshBasicMaterial"></iframe>

## 代码示例

```js
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );
```

## 构造函数 (Constructor)

```md
MeshBasicMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。

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

***.color : Color***

材质的颜色(Color)，默认值为白色 (0xffffff)。

***.combine : Integer***

如何将表面颜色的结果与环境贴图（如果有）结合起来。

选项为THREE.MultiplyOperation（默认值），THREE.MixOperation， THREE.AddOperation。如果选择多个，则使用.reflectivity在两种颜色之间进行混合。

***.envMap : Texture***

环境贴图。默认值为null。

***.fog : Boolean***

材质是否受雾影响。默认为true。

***.lightMap : Texture***

光照贴图。默认值为null。lightMap需要第二组UV。

***.lightMapIntensity : Float***

烘焙光的强度。默认值为1。

***.map : Texture***

颜色贴图。可以选择包括一个alpha通道，通常与.transparent 或.alphaTest。默认为null。

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

由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制， 无论如何设置该值，线宽始终为1。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。