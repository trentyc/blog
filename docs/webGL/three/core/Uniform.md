# Uniform

Uniform 是 GLSL 着色器中的全局变量。

## 代码示例

When declaring a uniform of a ShaderMaterial, it is declared by value or by object.

```js
uniforms: {
  time: { value: 1.0 },
  resolution: new Uniform(new Vector2())
}
```

## Uniform 种类

每个 Uniform 必须包括一个**value**属性。value的类型必须要和下表中GLSL的基本类型向对应。同样， Uniform 的结构体和队列也是支持的。GLSL基本类型队列必须要么被显示声明为一个THREE对象的队列，要么被声明为一个包含所有对象数据的队列。这就是说， 队列中的GLSL基础类型不能再是一个队列。举例， 一个有5个Vec2元素的队列，必须是一个包含5个Vector2的队列数组，或包含10个number的队列。

| GLSL 类型 | JavaScript 类型 |
| --- | --- |
| int | Number |
| uint | Number |
| float | Number |
| bool | Boolean |
| bool | Number |
| vec2 | THREE.Vector2 |
| vec2 | Float32Array (*) |
| vec2 | Array (*) |
| vec3 | THREE.Vector3 |
| vec3 | Float32Array (*) |
| vec3 | Array (*) |
| vec4 | THREE.Vector4 |
| vec4 | Float32Array (*) |
| vec4 | Array (*) |
| mat2 | Float32Array (*) |
| mat2 | Array (*) |
| mat3 | THREE.Matrix3 |
| mat3 | Float32Array (*) |
| mat3 | Array (*) |
| mat4 | THREE.Matrix4 |
| mat4 | Float32Array (*) |
| mat4 | Array (*) |
| ivec2, bvec2 | Float32Array (*) |
| ivec2, bvec2 | Array (*) |
| ivec2, bvec3 | Int32Array (*) |
| ivec2, bvec3 | Array (*) |
| ivec2, bvec4 | Int32Array (*) |
| ivec2, bvec4 | Array (*) |
| sampler2D | THREE.Texture |
| samplerCube | THREE.CubeTexture |

(*) 与最内层队列中GSLS的类型保持一致。包含队列中所有矢量的元素或矩阵的元素。

# Structured Uniforms

Sometimes you wan to organize uniforms as structs in your shader code.The following style must be used so **three.js** is able to process structured uniform data.

```js
uniforms = {
  data: {
    value: {
      position: new Vector3(),
      direction: new Vector3(0,0,1)
    }
  }
}
```

This definition can be mapped on the following GLSL code:

```md
struct Data {
  vec3 postion;
  vec3 direction;
}

uniform Data data;
```

## Structured Uniforms with Arrays

It's also possible to manage structs in arrays. The syntax for this use case looks like so:

```js
const entry1 = {
  position: new Vector3(),
  direction: new Vector3(0,0,1)
};
const entry2 = {
  position: new Vector3(1,1,1),
  direction: new Vector3(0,1,0)
};

uniforms = {
  data: {
    value: [entry1, entry2]
  }
};
```

This definition can be mapped on the following GLSL code:

```md
struct Data {
  vec2 position;
  vec3 direction;
}

uniform Data data[2];
```

## 构造函数

Uniform(value: Object)

value -- 包含需要设置 Uniform 数据的对象。数据类型必须是上述类型中的一种。

## 属性

***.value: Object***

当前 uniform 的值。

## 方法

***.clone(): Uniform***

返回该 Uniform 的克隆。
如果 Uniform 的 value 属性是一个带 clone() 方法的 Object, 则克隆该对象时， value 的 clone() 方法也会被调用， 否则克隆时只会使用赋值语句。队列中的值会在该 Uniform 和被克隆对象间共享。