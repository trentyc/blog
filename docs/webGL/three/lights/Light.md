# Light

- 光源的基类。
- 所有其他的光类型都继承了该类描述的属性和方法。

## 构造函数 (Constructor)

```md
Light( color : Color, intensity : Float )
color -（可选）一个表示颜色的 Color 的实例、字符串或数字，默认为一个白色（0xffffff）的 Color 对象。
intensity -（可选）光照强度。默认值为 1。

创造一个新的光源。注意，这并不是直接调用的（而是使用它的派生类）。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Object3D](../core/Object3D#Properties)

***.color : Color***

光源的颜色。如果构造的时候没有传递，默认会创建一个新的 Color 对象并设置为白色。

***.intensity : Float***

光照的强度，或者说能量。
强度的单位取决于光的类型。
默认值为 1.0。

***.isLight : Boolean***

只读，用于检查对象的类型是否为 Light。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Object3D](../core/Object3D#Methods)

***.dispose () : undefined***

释放由该实例分配的 GPU 相关资源。 当这个实例不再在你的应用中使用时，调用这个方法。

***.copy ( source : Light ) : this***

从 source 复制 color、intensity 的值到当前光源对象中。

***.toJSON ( meta : Object ) : Object***

以JSON格式返回光数据。

meta -- 包含有元数据的对象，例如该对象的材质、纹理或图片。 将该light对象转换为 three.js JSON Object/Scene format（three.js JSON 物体/场景格式）。
