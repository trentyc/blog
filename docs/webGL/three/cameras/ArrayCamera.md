# 摄像机阵列 (ArrayCamera)

ArrayCamera 用于更加高效地使用一组已经预定义的摄像机来渲染一个场景。这将能够更好地提升VR场景的渲染性能。
一个 ArrayCamera 的实例中总是包含着一组子摄像机，应当为每一个子摄像机定义viewport（视口）这个属性，这一属性决定了由该子摄像机所渲染的视口区域的大小。

<iframe id="scene" src="https://threejs.org/examples/webgl_camera_array.html"></iframe>


## 构造函数 (Constructor)

```md
ArrayCamera( array : Array )
一个包含多个摄像机的数组。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [PerspectiveCamera](./PerspectiveCamera#Properties)。

***.cameras : Array***

摄像机数组。

***.isArrayCamera : Boolean***

Read-only flag to check if a given object is of type ArrayCamera.

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [PerspectiveCamera](./PerspectiveCamera#Methods)。