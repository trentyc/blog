# 摄像机 (Camera)

- 摄像机的抽象基类。
- 提在构建新摄像机时，应始终继承此类。
- Camera 类是继承自 Object3D 类的。

>[官网地址](https://threejs.org/docs/index.html#api/zh/cameras/Camera)


## 构造函数 (Constructor)

Camera()
创建一个新的Camera（摄像机）。注意：这个类并不是被直接调用的；你所想要的或许是一个 PerspectiveCamera（透视摄像机）或者 OrthographicCamera（正交摄像机）。

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Object3D](../core/Object3D#Properties)

***.isCamera : Boolean***

Read-only flag to check if a given object is of type Camera.

***.layers : Layers***

摄像机是一个layers的成员. 这是一个从Object3D继承而来的属性。

当摄像机的视点被渲染的时候，物体必须和当前被看到的摄像机共享至少一个层。

***.matrixWorldInverse : Matrix4***

这是matrixWorld矩阵的逆矩阵。 MatrixWorld包含了相机的世界变换矩阵。

***.projectionMatrix : Matrix4***

这是投影变换矩阵。

***.projectionMatrixInverse : Matrix4***

这是投影变换矩阵的逆矩阵。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Object3D](../core/Object3D#Methods)

***.clone ( ) : Camera***

返回一个具有和当前相机的属性一样的新的相机。

***.copy ( source : Camera, recursive : Boolean ) : this***

将源摄像机的属性复制到新摄像机中。

***.getWorldDirection ( target : Vector3 ) : Vector3***

target — 调用该函数的结果将复制给该Vector3对象。

返回一个能够表示当前摄像机所正视的世界空间方向的Vector3对象。 （注意：摄像机俯视时，其Z轴坐标为负。）
