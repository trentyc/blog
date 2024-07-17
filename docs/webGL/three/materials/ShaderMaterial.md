# 着色器材质(ShaderMaterial)

使用自定义shader渲染的材质。 shader是一个用GLSL编写的小程序 ，在GPU上运行。 您可能需要使用自定义shader，如果你要：

- 要实现内置 materials 之外的效果。
- 将许多对象组合成单个BufferGeometry以提高性能。

使用ShaderMaterial时需要注意以下注意事项：

- ShaderMaterial 只有使用 WebGLRenderer 才可以绘制正常， 因为 vertexShader 和 fragmentShader 属性中GLSL代码必须使用WebGL来编译并运行在GPU中。
- 从 THREE r72开始，不再支持在ShaderMaterial中直接分配属性。 必须使用 BufferGeometry实例，使用BufferAttribute实例来定义自定义属性。
- 从 THREE r77开始，WebGLRenderTarget 或 WebGLCubeRenderTarget 实例不再被用作uniforms。 必须使用它们的texture 属性。
- 内置attributes和uniforms与代码一起传递到shaders。 如果您不希望WebGLProgram向shader代码添加任何内容，则可以使用RawShaderMaterial而不是此类。
- 您可以使用指令#pragma unroll_loop_start，#pragma unroll_loop_end 以便通过shader预处理器在GLSL中展开for循环。 该指令必须放在循环的正上方。循环格式必须与定义的标准相对应。
   - 循环必须标准化normalized。
   - 循环变量必须是i。
   - The value UNROLLED_LOOP_INDEX will be replaced with the explicity value of i for the given iteration and can be used in preprocessor  statements.
   ```md
      #pragma unroll_loop_start
      for ( int i = 0; i < 10; i ++ ) {

        // ...

      }
      #pragma unroll_loop_end
   ```
## 代码示例
```js
const material = new THREE.ShaderMaterial( {

	uniforms: {

		time: { value: 1.0 },
		resolution: { value: new THREE.Vector2() }

	},

	vertexShader: document.getElementById( 'vertexShader' ).textContent,

	fragmentShader: document.getElementById( 'fragmentShader' ).textContent

} );
```

## 例子

[webgl / buffergeometry / custom / attributes / particles](../examples/webgl_buffergeometry_custom_attributes_particles){target="_blank"}

## 顶点着色器和片元着色器(Vertex shaders and fragment shaders)

你那可以为每种材质指定两种不同类型的shaders:

- 顶点着色器首先运行; 它接收attributes, 计算/操纵每个单独顶点的位置，并将其它数据 (varyings) 传递给片元着色器。
- 片元 (或像素) 着色器后运行；它设置渲染到每个屏幕的每个单独的“片元”(像素)的颜色。
  
shader中有三种类型的变量：uniforms, attributes, varyings。

- **Uniforms** 是所有顶点都具有相同的值的变量。比如灯光，雾，和阴影贴图就是被存储在uniforms中的数据。uniforms可以通过顶点着色器和片元着色器来访问。
- **Attributes** 与每个顶点关联的变量。例如， 顶点位置， 法线和顶点颜色都是存储在attributes的数据。
  attributes 只可以在顶点着色器中访问。
- **Varyings** 是从顶点着色器传递到片元着色器的变量。对于每一个片元，每一个varying的值将是相邻顶点值的平滑插值。

注意： 在shader内部， uniforms和attributes就像常量；你只能使用JavaScript代码通过缓冲区来修改它们的值。

## 内置attributes和uniforms(Built-in attributes and uniforms)

WebGLRenderer默认情况下为shader提供了许多attributes 和 uniforms; 这些变量定义在shader程序编译时被自动添加到**片元着色器**和**顶点着色器**代码的前面，你不需要自己声明他们。这些变量的描述请参见WebGLProgram。

这些uniforms和attributes(例如，哪些和照明，雾等相关的)要求属性设置在材质上，以便WebGLRenderer来拷贝合适的值到GPU中。如果你想在自己的shader中使用这些功能，请确保设置这些标志。

如果你不希望WebGLProgram向你的shader代码添加任何东西，你可以使用RawShaderMaterial而不是这个类。

## 自定义attributes和unforms(Custom attributes and unforms)

自定义attributes和uniforms必须在GLSL着色器代码中声明(在 vertexShader 和 fragmentShader 中)。自定义uniforms 必须定义为 ShaderMaterial 的uniforms 属性， 而任何自定义attributes必须通过BufferAttribue实例来定义。注意varyings只需要在shader代码中声明(而不必在材质中)。

要声明一个自定义属性，更多细节请参考BufferGeomerty页面，以及BufferAttribute页面关于BufferAttribute接口。

当创建attributes时，您创建的用来保存属性数据的每个类型化数组(typed array)必须是您的数据类型大小的倍数。比如， 如果你的属性时一个THREE.Vector3类型，并且在你的缓存几何模型BufferGeometry中有3000个顶点，那么你的类型化数组的长度必须是3000*3，或者9000（一个顶点一个值）。每个数据类型的尺寸如下表所示：


| GLSL 类型 | JavaScript 类型 | 尺寸 |
| --- | --- | --- |
| float | Number | 1 |
| vec2 | THREE.Vector2 | 2 |
| vec3 | THREE.Vector3 | 3
| vec3 | THREE.Color | 3 |
| vec4 | THREE.Vector4 | 4 |

请注意，属性缓冲区不会在其值更改时自动刷新。要更新自定义属性，需要在模型的BufferAttribute中设置needsUpdate为true。(查看BufferGeometry了解细节)。

要声明一个自定义的Uniforms，使用**uniforms属性：

```md
uniforms: {
	time: { value: 1.0 },
	resolution: { value: new THREE.Vector2() }
}
```

在 Object3D.onBeforeRender()中，建议根据object和camera来更新自定义Uniforms的值。因为Material可以被meshes,Scene的matrixWorld以及Camera共享，会在WebGLRenderer.render中更新，并且对拥有私有cameras的scene的渲染造成影响。

## 构造函数 (Constructor)

```md
ShaderMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.clipping : Boolean***

定义此材质是否支持剪裁; 如果渲染器传递clippingPlanes uniform，则为true。默认值为false。

***.defaultAttributeValues : Object***

当渲染的几何体不包含这些属性但材质包含这些属性时，这些默认值将传递给shaders。这可以避免在缓冲区数据丢失时出错。

```js
this.defaultAttributeValues = {
	'color': [ 1, 1, 1 ],
	'uv': [ 0, 0 ],
	'uv1': [ 0, 0 ]
};
```

***.defines : Object***

使用 #define 指令在GLSL代码为顶点着色器和片段着色器定义自定义常量；每个键/值对产生一行定义语句：

```js
defines: {
	FOO: 15,
	BAR: true
}
```

这将在GLSL代码中产生如下定义语句：

```md
#define FOO 15
#define BAR true
```

***.extensions : Object***

一个有如下属性的对象：

```js
this.extensions = {
	clipCullDistance: false, // set to use vertex shader clipping
	multiDraw: false // set to use vertex shader multi_draw / enable gl_DrawID
};
```

***.fog : Boolean***

定义材质颜色是否受全局雾设置的影响; 如果将fog uniforms传递给shader，则为true。默认值为false。

***.fragmentShader : String***

片元着色器的GLSL代码。这是shader程序的实际代码。在上面的例子中， vertexShader 和 fragmentShader 代码是从DOM（HTML文档）中获取的； 它也可以作为一个字符串直接传递或者通过AJAX加载。

***.glslVersion : String***

Defines the GLSL version of custom shader code. Valid values are THREE.GLSL1 or THREE.GLSL3. Default is null.

***.index0AttributeName : String***

如果设置，则调用gl.bindAttribLocation 将通用顶点索引绑定到属性变量。默认值未定义。

***.isShaderMaterial : Boolean***

Read-only flag to check if a given object is of type ShaderMaterial.

***.lights : Boolean***

材质是否受到光照的影响。默认值为 false。如果传递与光照相关的uniform数据到这个材质，则为true。默认是false。

***.linewidth : Float***

控制线框宽度。默认值为1。

由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。

***.flatShading : Boolean***

定义材质是否使用平面着色进行渲染。默认值为false。

***.uniforms : Object***

如下形式的对象：

```js
{ "uniform1": { value: 1.0 }, "uniform2": { value: 2 } }
```

指定要传递给shader代码的uniforms；键为uniform的名称，值(value)是如下形式：

```js
{ value: 1.0 }
```

这里 value 是uniform的值。名称必须匹配 uniform 的name，和GLSL代码中的定义一样。 注意，uniforms逐帧被刷新，所以更新uniform值将立即更新GLSL代码中的相应值。

***.uniformsNeedUpdate : Boolean***

Can be used to force a uniform update while changing uniforms in Object3D.onBeforeRender(). Default is false.

***.vertexColors : Boolean***

Defines whether vertex coloring is used. Default is false.

***.vertexShader : String***

顶点着色器的GLSL代码。这是shader程序的实际代码。 在上面的例子中，vertexShader 和 fragmentShader 代码是从DOM（HTML文档）中获取的； 它也可以作为一个字符串直接传递或者通过AJAX加载。

***.wireframe : Boolean***

将几何体渲染为线框(通过GL_LINES而不是GL_TRIANGLES)。默认值为false（即渲染为平面多边形）。

***.wireframeLinewidth : Float***

控制线框宽度。默认值为1。

由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。

***.clone () : ShaderMaterial***

创建该材质的一个浅拷贝。需要注意的是，vertexShader和fragmentShader使用引用拷贝； **attributes** 的定义也是如此; 这意味着，克隆的材质将共享相同的编译WebGLProgram； 但是，**uniforms** 是 值拷贝，这样对不同的材质我们可以有不同的uniforms变量。