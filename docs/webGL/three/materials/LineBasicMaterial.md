# 基础线条材质(LineBasicMaterial)

一种用于绘制线框样式几何体的材质。

## 代码示例

```js
const material = new THREE.LineBasicMaterial( {
	color: 0xffffff,
	linewidth: 1,
	linecap: 'round', //ignored by WebGLRenderer
	linejoin: 'round' //ignored by WebGLRenderer
} );
```

## 例子

[WebGL / buffergeometry / drawrange](../examples/webgl_buffergeometry_drawrange){target="_blank"}

## 构造函数 (Constructor)

```md
LineBasicMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。

属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色），内部调用Color.set(color)。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.color : Color***

材质的颜色(Color)，默认值为白色 (0xffffff)。

***.fog : Boolean***

材质是否受雾影响。默认为true。

***.linewidth : Float***

控制线宽。默认值为 1。

由于OpenGL Core Profile与 大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。

***.linecap : String***

定义线两端的样式。可选值为 'butt', 'round' 和 'square'。默认值为 'round'。

该属性对应2D Canvas lineCap属性， 并且会被WebGL渲染器忽略。

***.linejoin : String***

定义线连接节点的样式。可选值为 'round', 'bevel' 和 'miter'。默认值为 'round'。

该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。

***.map : Texture***

Sets the color of the lines using data from a Texture.

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。