# BufferAttribute

这个类用于存储与BufferGeometry相关联的attribute(例如顶点位置向量，面片索引，法向量，颜色值，UV坐标以及任何自定义的attribute)。利用BufferAttribute, 可以更高效的向GPU传递数据。详情和例子见该页。

在BufferAttribute中，数据被存储为任意长度的矢量(通过itemSize进行定义)，下列函数如无特别说明，函数参数中的index会自动乘以矢量长度进行计算。当想要处理类似向量的数据时，可以使用在Vector2,Vector3,Vector4以及Color这些类中的.fromBufferAttribute(attribute,index)方法来更为便捷地处理。

## 构造函数

BufferAttribute(array: TypedArray, itemSize: Integer, normalized: Boolean)

array -- 必须是TypedArray.类型，用于实例化缓存。
该队列应该包含：

```md
itemSize * numVertices
```

个元素，numVertices是 BufferGeometry 中的顶点数量。

itemSize -- 队列中与顶点相关的数据值的大小。举例，如果attribute存储的是三元组(例如顶点空间坐标、法向量或颜色值)则itemSize的值应该是3。

normalized -- (可选) 指明缓存中的数据如何与GLSL代码中的数据对应。例如，如果array是UInt16Array类型，且normalized的值是true,则队列中的值将会从0 - +65535 映射为GLSL中的0.0f - +1.0f。如果array是Int16Array(有符号)，则值将会从-32768 - +32767 映射为0.0f - +1.0f。如果array是Int16Array(有符号)，则值将会从 -32768 - +32767 映射为 -1.0f - +1.0f。若 normalized 的值为false, 则数据映射不会归一化，而会直接映射为float值，例如，32767 将会映射为 32767.0f。

## 属性

***.array : TypedArray***

在 array 中保存着缓存中的数据。

***.count : Integer***

保存 array 除以 itemSize 之后的大小。Read-only property.

若缓存存储三元组（例如顶点位置、法向量、颜色值），则该值应等于队列中三元组的个数。

***.gpuType : Number***

Configures the bound GPU type for use in shaders. Either THREE.FloatType or THREE.IntType, default is THREE.FloatType. Note: this only has an effect for integer arrays and is not configurable for float arrays. For lower precision float types, see THREE.Float16BufferAttribute.

***.isBufferAttribute : Boolean***

用于判断对象是否为BufferAttribute类型的只读标记.

***.itemSize : Integer***

保存在 array 中矢量的长度。

***.name : String***

该 attribute 实例的别名，默认值为空字符串。

***.needsUpdate : Boolean***

该标志位指明当前 attribute 已经被修改过，且需要再次送入 GPU 处理。当开发者改变了该队列的值，则标志位需要设置为 true。

将标志位设为 true 同样会增加 version 的值。

***.normalized : Boolean***

指明缓存中数据在转化为GLSL着色器代码中数据时是否需要被归一化。详见构造函数中的说明。

***.onUploadCallback : Function***

attribute 数据传输到GPU后的回调函数。

***.updateRange : Object***

对象包含如下成员:
offset: 默认值为 0。 指明更新的起始位置。
count: 默认值为 -1，表示不指定更新范围。

该值只可以被用于更新某些矢量数据（例如，颜色相关数据）。

***.usage : Usage***

为输入的数据定义最优的预估使用方式。等同于在WebGLRenderingContext.bufferData() 中的usage参数。默认为StaticDrawUsage。在usage constants中查看可用值。

***.version : Integer***

版本号，当 needsUpdate 被设置为 true 时，该值会自增。

## 方法

***.applyMatrix3 ( m : Matrix3 ) : this***

将矩阵m应用此BufferAttribute中的每一个Vector3元素中。

***.applyMatrix4 ( m : Matrix4 ) : this***

将矩阵m应用到此BufferAttribute的每一个Vector3元素中

***.applyNormalMatrix ( m : Matrix3 ) : this***

将正规矩阵m应用到此BufferAttribute的每一个Vector3元素中

***.transformDirection ( m : Matrix4 ) : this***

将矩阵m应用到此BufferAttribute的每一个Vector3元素中，并将所有元素解释为方向向量。

***.clone () : BufferAttribute***

返回该 BufferAttribute 的拷贝。

***.copyArray ( array ) : this***

将参数中所给定的普通队列或 TypedArray 拷贝到 array 中。

拷贝 TypedArray 相关注意事项详见 TypedArray.set。

***.copyAt ( index1 : Integer, bufferAttribute : BufferAttribute, index2 : Integer ) : this***

将一个矢量从 bufferAttribute[index2] 拷贝到 array[index1] 中。

***.getComponent ( index : Integer, component : Integer ) : Number***

Returns the given component of the vector at the given index.

***.getX ( index : Integer ) : Number***

获取给定索引的矢量的第一维元素 （即 X 值）。

***.getY ( index : Integer ) : Number***

获取给定索引的矢量的第二维元素 （即 Y 值）。

***.getZ ( index : Integer ) : Number***

获取给定索引的矢量的第三维元素 （即 Z 值）。

***.getW ( index : Integer ) : Number***

获取给定索引的矢量的第四维元素 （即 W 值）。

***.onUpload ( callback : Function ) : this***

见 onUploadCallback 属性。

在 WebGL / Buffergeometry 中，该方在缓存数据传递给 GPU 后，用于释放内存。

***.set ( value : Array, offset : Integer ) : this***

value -- 被拷贝的 Array 或 TypedArray 类型的数据。
offset -- (可选) array 中开始拷贝的位置索引。

对 array，调用 TypedArray.set( value, offset ) 方法。

特别的, 对将 value 转为 TypedArray 的要求详见上述链接。

***.setUsage ( value : Usage ) : this***

Set usage to value. See usage constants for all possible input values.

***.setComponent ( index : Integer, component : Integer, value : Float ) : Number***

Sets the given component of the vector at the given index.

***.setX ( index : Integer, x : Float ) : this***

设置给定索引的矢量的第一维数据（设置 X 值）。

***.setY ( index : Integer, y : Float ) : this***

设置给定索引的矢量的第二维数据（设置 Y 值）。

***.setZ ( index : Integer, z : Float ) : this***

设置给定索引的矢量的第三维数据（设置 Z 值）。

***.setW ( index : Integer, w : Float ) : this***

设置给定索引的矢量的第四维数据（设置 W 值）。

***.setXY ( index : Integer, x : Float, y : Float ) : this***

设置给定索引的矢量的第一、二维数据（设置 X 和 Y 值）。

***.setXYZ ( index : Integer, x : Float, y : Float, z : Float ) : this***

设置给定索引的矢量的第一、二、三维数据（设置 X、Y 和 Z 值）。

***.setXYZW ( index : Integer, x : Float, y : Float, z : Float, w : Float ) : this***

设置给定索引的矢量的第一、二、三、四维数据（设置 X、Y、Z 和 W 值）。