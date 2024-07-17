# 立体相机 (StereoCamera)

- 双视角捕捉：立体相机系统包含两个相机，分别模拟人的左右眼，捕捉不同视角的图像。
- 视差（Parallax）：左右相机之间的水平距离产生视差，这是立体视觉的关键因素，它帮助大脑判断物体的深度。
- 深度感知：通过左右眼接收到的不同图像，立体相机可以提供深度感知，增强场景的三维感。

<iframe id="scene" src="https://threejs.org/examples/webgl_effects_anaglyph.html"></iframe>

## 构造函数 (Constructor)

```md
StereoCamera( )
```

## 属性 (Properties) {#Properties}

***.aspect : Float***

默认值是1.

***.eyeSep : Float***

默认值是0.064.

***.cameraL : PerspectiveCamera***

左摄像机，它被加入到了layer 1中 —— 需要被左摄像机渲染的物体也应当要加入到这一层中。

***.cameraR : PerspectiveCamera***

右摄像机，它被加入到了layer 2中 —— 需要被右摄像机渲染的物体也应当要加入到这一层中。


## 方法 (Methods) {#Methods}

***.update ( camera : PerspectiveCamera ) : undefined***

基于摄像机通过场景，更新立体摄像机。