# 立方相机 (CubeCamera)

- 环境映射：CubeCamera 用于生成环境贴图，这可以用于反射、折射或作为场景的背景。
- 六面捕捉：它能够捕捉场景的六个方向（正面、背面、顶部、底部、左侧和右侧），为每个方向生成一个纹理。
- 场景中心定位：CubeCamera 通常放置在场景的中心点，以确保六个面都能均匀地捕捉到场景。

<iframe id="scene" src="https://threejs.org/examples/webgl_materials_cubemap_dynamic.html"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/cameras/CubeCamera)

## 代码示例

```js
// Create cube render target
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );

// Create cube camera
const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget );
scene.add( cubeCamera );

// Create car
const chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeRenderTarget.texture } );
const car = new THREE.Mesh( carGeometry, chromeMaterial );
scene.add( car );

// Update the render target cube
car.visible = false;
cubeCamera.position.copy( car.position );
cubeCamera.update( renderer, scene );

// Render the scene
car.visible = true;
renderer.render( scene, camera );
```

## 构造函数 (Constructor)

```md
CubeCamera( near : Number, far : Number, renderTarget : WebGLCubeRenderTarget )
near -- 近剪切面的距离
far -- 远剪切面的距离
renderTarget -- The destination cube render target.

构造一个包含6个PerspectiveCameras（透视摄像机）的立方摄像机， 并将其拍摄的场景渲染到一个WebGLCubeRenderTarget上。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Object3D](./PerspectiveCamera)。

***.renderTarget : WebGLCubeRenderTarget***

The destination cube render target.


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Object3D](./PerspectiveCamera)。

***.update ( renderer : WebGLRenderer, scene : Scene ) : undefined***

renderer -- 当前的WebGL渲染器
scene -- 当前的场景

这个方法用来更新renderTarget（渲染目标对象）。