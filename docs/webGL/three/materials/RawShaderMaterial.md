# 原始着色器材质(RawShaderMaterial)

- 此类的工作方式与ShaderMaterial类似，不同之处在于内置的uniforms和attributes的定义不会自动添加到GLSL shader代码中。
  
## 代码示例
```js
const material = new THREE.RawShaderMaterial( {

	uniforms: {
		time: { value: 1.0 }
	},
	vertexShader: document.getElementById( 'vertexShader' ).textContent,
	fragmentShader: document.getElementById( 'fragmentShader' ).textContent,

} );
```

## 例子

[WebGL / buffergeometry / rawshader](../examples/webgl_buffergeometry_rawshader){target="_blank"}

## 构造函数 (Constructor)

```md
RawShaderMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material 和 ShaderMaterial继承的任何属性)。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material) 和 [ShaderMaterial](./ShaderMaterial)。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material) 和 [ShaderMaterial](./ShaderMaterial)。