# Texture加载器 (TextureLoader)

加载texture的一个类。 内部使用ImageLoader来加载文件。

## 代码示例

```js
const texture = new THREE.TextureLoader().load( 'textures/land_ocean_ice_cloud_2048.jpg' );

// 立即使用纹理进行材质创建
const material = new THREE.MeshBasicMaterial( { map: texture } );
```

### 回调示例

```js
// 初始化一个加载器
const loader = new THREE.TextureLoader();

// 加载一个资源
loader.load(
	// 资源URL
	'textures/land_ocean_ice_cloud_2048.jpg',

	// onLoad回调
	function ( texture ) {
		// in this example we create the material when the texture is loaded
		const material = new THREE.MeshBasicMaterial( {
			map: texture
		 } );
	},

	// 目前暂不支持onProgress的回调
	undefined,

	// onError回调
	function ( err ) {
		console.error( 'An error happened.' );
	}
);
```

## 例子

[geometry / cube](../examples/webgl_geometry_cube){target="_blank"}

## 构造函数 (Constructor)

```md
TextureLoader( manager : LoadingManager )
manager — 加载器使用的loadingManager，默认值为THREE.DefaultLoadingManager.

创建一个新的TextureLoader.
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Loader](./Loader)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Loader](./Loader)。

***.load ( url : String, onLoad : Function, onProgress : Function, onError : Function ) : undefined***

- url — 文件的URL或者路径，也可以为 Data URI.

- onLoad — 加载完成时将调用。回调参数为将要加载的texture.

- onProgress — 将在加载过程中进行调用。参数为XMLHttpRequest实例，实例包含total和loaded字节。

- onError — 在加载错误时被调用。

开始从url加载，并使用解析过的响应内容调用回调函数。