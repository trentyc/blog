# GLTF加载器 (GLTFLoader)

用于载入glTF 2.0资源的加载器。

glTF（gl传输格式）是一种开放格式的规范 （open format specification）， 用于更高效地传输、加载3D内容。该类文件以JSON（.gltf）格式或二进制（.glb）格式提供， 外部文件存储贴图（.jpg、.png）和额外的二进制数据（.bin）。一个glTF组件可传输一个或多个场景， 包括网格、材质、贴图、蒙皮、骨架、变形目标、动画、灯光以及摄像机。

## 导入

GLTFLoader 是一个附加组件，必须显式导入。

```js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
```

## 代码示例

```js
// Instantiate a loader
const loader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
loader.setDRACOLoader( dracoLoader );

// Load a glTF resource
loader.load(
	// resource URL
	'models/gltf/duck/duck.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
```

## 例子

[webgl_loader_gltf](../examples/webgl_loader_gltf){target="_blank"}

## 构造函数 (Constructor)

```md
GLTFLoader( manager : LoadingManager )
manager — 该加载器将要使用的 loadingManager 。默认为 THREE.DefaultLoadingManager。

创建一个新的GLTFLoader。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Loader](./Loader)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Loader](./Loader)。

***.load ( url : String, onLoad : Function, onProgress : Function, onError : Function ) : undefined***

- url — 包含有.gltf/.glb文件路径/URL的字符串。

- onLoad — 加载成功完成后将会被调用的函数。该函数接收parse所返回的已加载的JSON响应。

- onProgress — （可选）加载正在进行过程中会被调用的函数。其参数将会是XMLHttpRequest实例，包含有总字节数.total与已加载的字节数.loaded。

- onError — （可选）若在加载过程发生错误，将被调用的函数。该函数接收error来作为参数。

开始从url加载，并使用解析过的响应内容调用回调函数。

***.setDRACOLoader ( dracoLoader : DRACOLoader ) : this***

- dracoLoader — DRACOLoader的实例，用于解码使用KHR_draco_mesh_compression扩展压缩过的文件。

请参阅readme来了解Draco及其解码器的详细信息。

***.parse ( data : ArrayBuffer, path : String, onLoad : Function, onError : Function ) : undefined***

- data — 需要解析的glTF文件，值为一个ArrayBuffer或JSON字符串。

- path — 用于找到后续glTF资源（如纹理和.bin数据文件）的基础路径。

- onLoad — 解析成功完成后将会被调用的函数。

- onError — （可选）若在解析过程发生错误，将被调用的函数。该函数接收error来作为参数。

解析基于glTF的ArrayBuffer或JSON字符串，并在完成后触发onLoad回调。onLoad的参数将是一个包含有已加载部分的Object：.scene、 .scenes、 .cameras、 .animations 和 .asset。
