# PointLightShadow

该类在内部由PointLights所使用，以用于计算阴影

## 代码示例

```js
//Create a WebGLRenderer and turn on shadows in the renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a PointLight and turn on shadows for the light
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 10, 4 );
light.castShadow = true; // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500 // default

//Create a sphere that cast shadows (but does not receive them)
const sphereGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add( sphere );

//Create a plane that receives shadows (but does not cast them)
const planeGeometry = new THREE.PlaneGeometry( 20, 20, 32, 32 );
const planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

//Create a helper for the shadow camera (optional)
const helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );
```

## 构造函数 (Constructor)

```md
PointLightShadow( )
创建一个新的PointLightShadow。该方法不是直接调用的 —— 其在内部由PointLight调用。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [LightShadow](./LightShadow)。

***.isPointLightShadow : Boolean***

ead-only flag to check if a given object is of type PointLightShadow.


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [LightShadow](./LightShadow)。

***.updateMatrices ( light : Light, viewportIndex : number) : undefined***

Update the matrices for the camera and shadow, used internally by the renderer.

light -- the light for which the shadow is being rendered.
viewportIndex -- calculates the matrix for this viewport