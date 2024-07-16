# 正交相机 (OrthographicCamera)

- 正交投影：与透视相机不同，正交相机不会产生透视失真。在正交视图中，平行线保持平行，物体的大小不会随着距离的增加而减小。
- 二维效果：正交相机常用于创建二维效果或模拟二维视图，非常适合用于技术绘图、等角投影或某些类型的游戏摄像机。
- 不依赖视角：由于正交相机不模拟真实世界的视角，它不使用视场（field of view, fov）参数，而是使用边界参数来定义视图。
- 与透视相机的比较：与 PerspectiveCamera 相比，OrthographicCamera 更适合那些需要保持对象尺寸不变的场景。
- 适用性：正交相机适用于那些需要保持一致尺寸和比例的场景，例如地图渲染、游戏关卡编辑器或某些类型的用户界面元素。

<iframe id="scene" src="https://threejs.org/examples/webgl_camera.html"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/cameras/OrthographicCamera)

## 代码示例

```js
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
scene.add( camera );
```

## 构造函数 (Constructor)

```md
OrthographicCamera( left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number )
left — 摄像机视锥体左侧面。
right — 摄像机视锥体右侧面。
top — 摄像机视锥体上侧面。
bottom — 摄像机视锥体下侧面。
near — 摄像机视锥体近端面。
far — 摄像机视锥体远端面。

这些参数一起定义了摄像机的viewing frustum（视锥体）。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Camera](./Camera#Properties)。
请注意，在大多数属性发生改变之后，你将需要调用.updateProjectionMatrix来使得这些改变生效。

***.bottom : Float***

摄像机视锥体下侧面。

***.far : Float***

摄像机视锥体远端面，其默认值为2000。

该值必须大于near plane（摄像机视锥体近端面）的值。

***.isOrthographicCamera : Boolean***

Read-only flag to check if a given object is of type OrthographicCamera.

***.left : Float***

摄像机视锥体左侧面。

***.near : Float***

摄像机视锥体近端面。其默认值为0.1.

其值的有效范围介于0和far（摄像机视锥体远端面）之间。
请注意，和PerspectiveCamera不同，0对于OrthographicCamera的近端面来说是一个有效值。

***.right : Float***

摄像机视锥体右侧面。

***.top : Float***

摄像机视锥体上侧面。

***.view : Object***

这个值是由setViewOffset来设置的，其默认值为null。

***.zoom : number***

获取或者设置摄像机的缩放倍数，其默认值为1。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Camera](./Camera#Methods)。

***.setViewOffset ( fullWidth : Float, fullHeight : Float, x : Float, y : Float, width : Float, height : Float ) : undefined***

fullWidth — 多视图的全宽设置
fullHeight — 多视图的全高设置
x — 副摄像机的水平偏移
y — 副摄像机的垂直偏移
width — 副摄像机的宽度
height — 副摄像机的高度

在较大的viewing frustum（视锥体）中设置偏移量，对于多窗口或者多显示器的设置是很有用的。 对于如何使用它，请查看PerspectiveCamera中的示例。

***.clearViewOffset () : undefined***

清除任何由.setViewOffset设置的偏移量。

***.updateProjectionMatrix () : undefined***

更新摄像机投影矩阵。在任何参数被改变以后必须被调用。

***.toJSON (meta : Object) : Object***

meta -- 包含有元数据的对象，例如对象后代中的纹理或图像
将摄像机转换为 three.js JSON Object/Scene format（three.js JSON 物体/场景格式）。