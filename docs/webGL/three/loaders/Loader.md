# 加载器 (Loader)

用于实现加载器的基类。

## 构造函数 (Constructor)

```md
Loader( manager : LoadingManager )
manager — 加载器将要使用的 loadingManager。默认为 THREE.DefaultLoadingManager。

创建一个新的Loader。
```

## 属性 (Properties) {#Properties}

***.crossOrigin : String***

crossOrigin 字符串用于实现 CORS ，以从允许 CORS 的其他域加载url。 默认为anonymous。

***.manager : LoadingManager***

加载器要使用的 loadingManager 。默认为 DefaultLoadingManager 。

***.path : String***

将从中加载资产的基本路径。 默认为空字符串。

***.resourcePath : String***

将从中加载额外资源（例如纹理贴图）的基本路径。 默认为空字符串。

***.requestHeader : Object***

request header 在 HTTP 请求中使用。 请参考 .setRequestHeader。 默认为 undefined。

## 方法 (Methods) {#Methods}

***.load () : undefined***

该方法需要被所有具体的加载器来实现。它包含了从后端加载资产的逻辑。

***.loadAsync ( url : String, onProgress : Function ) : Promise***

- url — 一个字符串，包含要加载的文件的路径/URL。

- onProgress — （可选）加载过程中将会被调用的函数。参数将是一个XMLHttpRequest实例，其包含了 .total （总）字节数和 .loaded （已加载）字节数。
该函数等效于.load，但返回的是一个 Promise。

onLoad 由 Promise.resolve 处理，而 onError 则由 Promise.reject 处理。

***.parse () : undefined***

该方法需要被所有具体的加载器来实现。它包含了解析资产到 three.js 实体的逻辑。

***.setCrossOrigin ( crossOrigin : String ) : this***

crossOrigin — crossOrigin字符串用于实现CORS，以从允许CORS的其它域加载url。

***.setPath ( path : String ) : this***

path — 设置资产的基本路径。

***.setResourcePath ( resourcePath : String ) : this***

resourcePath — 设置独立资源（如纹理贴图）的基本路径。

***.setRequestHeader ( requestHeader : Object ) : this***

requestHeader - key: 要设置header的名称。 value：要设置header的值。

设置在 HTTP 请求中使用的 request header（请求头）。
