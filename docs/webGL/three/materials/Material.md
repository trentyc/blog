# 材质(Material)

- 材质的抽象基类。
- 材质描述了对象objects的外观。它们的定义方式与渲染器无关， 因此，如果您决定使用不同的渲染器，不必重写材质。
- 所有其他材质类型都继承了以下属性和方法（尽管它们可能具有不同的默认值）。

## 构造函数 (Constructor)

```md
Material()
该方法创建一个通用材质。
```

## 属性 (Properties) {#Properties}

***.alphaHash : Boolean***

启用alphaHash透明度，这是.transparent或.alphaTest的替代方案。如果不透明度低于随机阈值，则不会渲染材质。随机化会引入一些颗粒或噪点，但相较于传统的Alpha blend方式，避免了透明度引起的深度排序问题。使用TAARenderPass可以有效减少噪点。

***.alphaTest : Float***

设置运行alphaTest时要使用的alpha值。如果不透明度低于此值，则不会渲染材质。默认值为0。

***.alphaToCoverage : Boolean***

启用 alpha 覆盖。 只能与启用 MSAA 的上下文一起使用（意味着在创建渲染器时将抗锯齿参数 antialias 设置为 true）。 启用此选项将平滑剪裁平面边缘和 alphaTest 剪辑边缘上的锯齿。 默认值为 false。

***.blendAlpha : Float***

表示恒定混合颜色的 alpha 值。 默认值为 0。

此属性仅在使用 ConstantAlpha 或 OneMinusConstantAlpha 自定义混合时有效。

***.blendColor : Color***

表示恒定混合颜色的 RGB 值。 默认值为 0x000000。

此属性仅在使用 ConstantColor 或 OneMinusConstantColor 自定义混合时有效。

***.blendDst : Integer***

混合目标。默认值为OneMinusSrcAlphaFactor。 目标因子所有可能的取值请参阅constants。 必须将材质的blending设置为CustomBlending才能生效。

***.blendDstAlpha : Integer***

.blendDst的透明度。 默认值为 null.

***.blendEquation : Integer***

使用混合时所采用的混合方程式。默认值为AddEquation。 混合方程式所有可能的取值请参阅constants。 必须将材质的blending设置为CustomBlending才能生效。

***.blendEquationAlpha : Integer***

.blendEquation 的透明度. 默认值为 null.

***.blending : Blending***

在使用此材质显示对象时要使用何种混合。
必须将其设置为CustomBlending才能使用自定义blendSrc, blendDst 或者 [page:Constant blendEquation]。 混合模式所有可能的取值请参阅constants。默认值为NormalBlending。

***.blendSrc : Integer***

混合源。默认值为SrcAlphaFactor。 源因子所有可能的取值请参阅constants。
必须将材质的blending设置为CustomBlending才能生效。

***.blendSrcAlpha : Integer***

.blendSrc的透明度。 默认值为 null.

***.clipIntersection : Boolean***

更改剪裁平面的行为，以便仅剪切其交叉点，而不是它们的并集。默认值为 false。

***.clippingPlanes : Array***

用户定义的剪裁平面，在世界空间中指定为THREE.Plane对象。这些平面适用于所有使用此材质的对象。空间中与平面的有符号距离为负的点被剪裁（未渲染）。 这需要WebGLRenderer.localClippingEnabled为true。 示例请参阅WebGL / clipping /intersection。默认值为 null。

***.clipShadows : Boolean***

定义是否根据此材质上指定的剪裁平面剪切阴影。默认值为 false。

***.colorWrite : Boolean***

是否渲染材质的颜色。 这可以与网格的renderOrder属性结合使用，以创建遮挡其他对象的不可见对象。默认值为true。

***.defines : Object***

注入shader的自定义对象。 以键值对形式的对象传递，{ MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }。 这些键值对在顶点和片元着色器中定义。默认值为undefined。

***.depthFunc : Integer***

使用何种深度函数。默认为LessEqualDepth。 深度模式所有可能的取值请查阅constants。

***.depthTest : Boolean***

是否在渲染此材质时启用深度测试。默认为 true。

***.depthWrite : Boolean***

渲染此材质是否对深度缓冲区有任何影响。默认为true。

在绘制2D叠加时，将多个事物分层在一起而不创建z-index时，禁用深度写入会很有用。

***.forceSinglePass : Boolean***

决定双面透明的东西是否强制使用单通道渲染，默认为false。

为了减少一些半透明物体的渲染错误，此引擎调用两次绘制来渲染渲染双面透明的东西。 但是此方案可能会导致在某些情况下使绘制调用次数翻倍，例如渲染一些平面的植物例如草精灵之类的。 在这些情况下，将forceSinglePass设置为true来使用单通道渲染来避免性能问题。

***.isMaterial : Boolean***

检查这个对象是否为材质Material的只读标记.

***.stencilWrite : Boolean***

是否对模板缓冲执行模板操作，如果执行写入或者与模板缓冲进行比较，这个值需要设置为true。默认为false。

***.stencilWriteMask : Integer***

写入模板缓冲区时所用的位元遮罩，默认为0xFF。

***.stencilFunc : Integer***

使用模板比较时所用的方法，默认为AlwaysStencilFunc。在模板函数 constants 中查看可用的值

***.stencilRef : Integer***

在进行模板比较或者模板操作的时候所用的基准值，默认为0。

***.stencilFuncMask : Integer***

与模板缓冲进行比较时所使用的位元遮罩，默认为0xFF

***.stencilFail : Integer***

当比较函数没有通过的时候要执行的模板操作，默认为KeepStencilOp，在模板操作 constants 查看可用值。

***.stencilZFail : Integer***

当比较函数通过了但是深度检测没有通过的时候要执行的模板操作， 默认为KeepStencilOp，在模板操作 constants 查看可用值。

***.stencilZPass : Integer***

当比较函数和深度检测都通过时要执行的模板操作，默认为KeepStencilOp，在模板操作constants 中查看可用值。

***.id : Integer***

此材质实例的唯一编号。

***.name : String***

对象的可选名称（不必是唯一的）。默认值为空字符串。

***.needsUpdate : Boolean***

指定需要重新编译材质。

***.opacity : Float***

在0.0 - 1.0的范围内的浮点数，表明材质的透明度。值0.0表示完全透明，1.0表示完全不透明。
如果材质的transparent属性未设置为true，则材质将保持完全不透明，此值仅影响其颜色。 默认值为1.0。

***.polygonOffset : Boolean***

是否使用多边形偏移。默认值为false。这对应于WebGL的GL_POLYGON_OFFSET_FILL功能。

***.polygonOffsetFactor : Integer***

设置多边形偏移系数。默认值为0。

***.polygonOffsetUnits : Integer***

设置多边形偏移单位。默认值为0。

***.precision : String***

重写此材质渲染器的默认精度。可以是"highp", "mediump" 或 "lowp"。默认值为null。

***.premultipliedAlpha : Boolean***

是否预乘alpha（透明度）值。有关差异的示例，请参阅WebGL / Materials / Physical / Transmission。 默认值为false。

***.dithering : Boolean***

是否对颜色应用抖动以消除条带的外观。默认值为 false。

***.shadowSide : Integer***

定义投影的面。设置时，可以是THREE.FrontSide, THREE.BackSide, 或Materials。默认值为 null。
如果为null， 则面投射阴影确定如下：

|Material.side	    |Side casting shadows |
|-------------------|-------------------- |       
|THREE.FrontSide	  |背面                 |
|THREE.BackSide	    |前面                 |
|THREE.DoubleSide	  |双面                 |

***.side : Integer***

定义将要渲染哪一面 - 正面，背面或两者。 默认为THREE.FrontSide。其他选项有THREE.BackSide 和 THREE.DoubleSide。

***.toneMapped : Boolean***

定义这个材质是否会被渲染器的toneMapping设置所影响，默认为 true 。

***.transparent : Boolean***

定义此材质是否透明。这对渲染有影响，因为透明对象需要特殊处理，并在非透明对象之后渲染。
设置为true时，通过设置材质的opacity属性来控制材质透明的程度。
默认值为false。

***.type : String***

值是字符串'Material'。不应该被更改，并且可以用于在场景中查找此类型的所有对象。

***.uuid : String***

此材质实例的UUID，会自动分配，不应该被更改。

***.version : Integer***

开始为0，会记录 .needsUpdate : Boolean设置为true的次数。

***.vertexColors : Boolean***

是否使用顶点着色。默认值为false。 此引擎支持RGB或者RGBA两种顶点颜色，取决于缓冲 attribute 使用的是三分量（RGB）还是四分量（RGBA）。

***.visible : Boolean***

此材质是否可见。默认为true。

***.userData : Object***

一个对象，可用于存储有关Material的自定义数据。它不应该包含对函数的引用，因为这些函数不会被克隆。

## 方法 (Methods) {#Methods}

EventDispatcher 方法在此类中可用。

***.clone ( ) : Material***

返回与此材质具有相同参数的新材质。

***.copy ( material : material ) : this***

将被传入材质中的参数复制到此材质中。

***.dispose () : undefined***

处理材质。材质的纹理不会被处理。需要通过Texture处理。

***.onBeforeCompile ( shader : Shader, renderer : WebGLRenderer ) : undefined***

在编译shader程序之前立即执行的可选回调。此函数使用shader源码作为参数。用于修改内置材质。

和其他属性不一样的是，这个回调在.clone()，.copy() 和 .toJSON() 中不支持。

***.customProgramCacheKey () : String***

当用到onBeforeCompile回调的时候，这个回调函数可以用来定义在onBeforeCompile中使用的配置项，这样three.js就可以根据这个回调返回的字符串来判定使用一个缓存的编译好的着色器代码还是根据需求重新编译一段新的着色器代码。

例如一个onBeforeCompile回调函数包含了下面的条件语句:

```js
if ( black ) { shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4(1)', 'gl_FragColor = vec4(0)') }
```

那么 customProgramCacheKey 就可以设置为:

```js
material.customProgramCacheKey = function() { return black ? '1' : '0'; }
```

和其他属性不一样的是，这个回调在.clone()，.copy() 和 .toJSON() 中不支持。

***.setValues ( values : Object ) : undefined***

values -- 具有参数的容器。 根据values设置属性。

***.toJSON ( meta : Object ) : Object***

meta -- 包含有元数据的对象，例如该对象的纹理或图片。 将material对象转换为 three.js JSON Object/Scene format（three.js JSON 物体/场景格式）。
