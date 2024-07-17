# LightShadow

- 阴影类的基类。

## 构造函数 (Constructor)

```md
LightShadow( camera : Camera )
camera - 在光的世界里

创建一个新的LightShadow。这不能直接调用的 - 它由其他阴影用作基类。
```

## 属性 (Properties) {#Properties}

***.autoUpdate : Boolean***

Enables automatic updates of the light's shadow. Default is true. If you do not require dynamic lighting / shadows, you may set this to false.

***.camera : Camera***

光的世界里。这用于生成场景的深度图;从光的角度来看，其他物体背后的物体将处于阴影中。

***.bias : Float***

阴影贴图偏差，在确定曲面是否在阴影中时，从标准化深度添加或减去多少。
默认值为0.此处非常小的调整（大约0.0001）可能有助于减少阴影中的伪影

***.blurSamples : Integer***

The amount of samples to use when blurring a VSM shadow map.

***.intensity : Float***

The intensity of the shadow. The default is 1. Valid values are in the range [0, 1].

***.map : WebGLRenderTarget***

使用内置摄像头生成的深度图;超出像素深度的位置在阴影中。在渲染期间内部计算。

***.mapPass : WebGLRenderTarget***

The distribution map generated using the internal camera; an occlusion is calculated based on the distribution of depths. Computed internally during rendering.

***.mapSize : Vector2***

一个Vector2定义阴影贴图的宽度和高度。

较高的值会以计算时间为代价提供更好的阴影质量。值必须是2的幂，直到给定设备的WebGLRenderer.capabilities.maxTextureSize， 虽然宽度和高度不必相同（例如，（512,1024）有效）。 默认值为（512,512）。

***.matrix : Matrix4***

模拟阴影相机空间，计算阴影贴图中的位置和深度。存储在Matrix4中。这是在渲染期间内部计算的。

***.needsUpdate : Boolean***

When set to true, shadow maps will be updated in the next render call. Default is false. If you have set .autoUpdate to false, you will need to set this property to true and then make a render call to update the light's shadow.

***.normalBias : Float***

Defines how much the position used to query the shadow map is offset along the object normal. The default is 0. Increasing this value can be used to reduce shadow acne especially in large scenes where light shines onto geometry at a shallow angle. The cost is that shadows may appear distorted.

***.radius : Float***

将此值设置为大于1的值将模糊阴影的边缘。
较高的值会在阴影中产生不必要的条带效果 - 更大的mapSize将允许在这些效果变得可见之前使用更高的值。
If WebGLRenderer.shadowMap.type is set to PCFSoftShadowMap, radius has no effect and it is recommended to increase softness by decreasing mapSize instead.

请注意，如果[page：WebGLRenderer.shadowMap.type]设置为BasicShadowMap，将会无效。

## 方法 (Methods) {#Methods}

***.getFrameExtents () : Vector2***

Used internally by the renderer to extend the shadow map to contain all viewports

***.updateMatrices ( light : Light ) : undefined***

Update the matrices for the camera and shadow, used internally by the renderer.

light -- the light for which the shadow is being rendered.

***.getFrustum () : Frustum***

Gets the shadow cameras frustum. Used internally by the renderer to cull objects.

***.getViewportCount () : number***

Used internally by the renderer to get the number of viewports that need to be rendered for this shadow.

***.copy ( source : LightShadow ) : this***

将source中的所有属性的值复制到该Light。

***.clone () : LightShadow***

克隆与此相同属性的新LightShadow。

***.toJSON () : Object***

序列化这个LightShadow。
