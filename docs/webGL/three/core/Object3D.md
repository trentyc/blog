# 三维物体 (Object3D)

- Three.js中大部分对象的基类。
- 提供了一系列的属性和方法来对三维空间中的物体进行操纵。
- 可以通过.add( object )方法来将对象进行组合，该方法将对象添加为子对象，但为此最好使用Group（来作为父对象）。

## 构造函数 (Constructor)

Object3D()
构造器中不带有参数。

## 属性 (Properties) {#Properties}

***.animations : AnimationClip***

三维物体所属的动画剪辑数组.

***.castShadow : Boolean***

对象是否被渲染到阴影贴图中。默认值为false。

***.children : Array***

含有对象的子级的数组。请参阅Group来了解将手动对象进行分组的相关信息。

***.customDepthMaterial : Material***

在渲染到深度图的时候所用的自定义深度材质。 只能在网格中使用。 当使用DirectionalLight（平行光）或者SpotLight（聚光灯光）生成影子的时候, 如果你调整过顶点着色器中的顶点位置，就需要定义一个自定义深度材质来生成正确的影子。默认为undefined.

***.customDistanceMaterial : Material***

与customDepthMaterial相同，但与PointLight(点光源）一起使用。默认值为undefined。

***.frustumCulled : Boolean***

当这个设置了的时候，每一帧渲染前都会检测这个物体是不是在相机的视椎体范围内。 如果设置为false 物体不管是不是在相机的视椎体范围内都会渲染。默认为true。

***.id : Integer***

只读 —— 表示该对象实例ID的唯一数字。

***.isObject3D : Boolean***

查看所给对象是不是Object3D类型的只读标记.

***.layers : Layers***

物体的层级关系。 物体只有和一个正在使用的Camera至少在同一个层时才可见。当使用Raycaster进行射线检测的时候此项属性可以用于过滤不参与检测的物体.

***.matrix : Matrix4***

局部变换矩阵。

***.matrixAutoUpdate : Boolean***

当这个属性设置了之后，它将计算每一帧的位移、旋转（四元变换）和缩放矩阵，并重新计算matrixWorld属性。默认值是Object3D.DEFAULT_MATRIX_AUTO_UPDATE (true)。

***.matrixWorld : Matrix4***

物体的世界变换。若这个Object3D没有父级，则它将和local transform .matrix（局部变换矩阵）相同。

***.matrixWorldAutoUpdate : Boolean***

默认为 true. 当设置的时候，渲染器在每一帧都会检查物体自身以及它的自带是否需要更新世界变换矩阵。 如果不需要的话它自身以及它的子代的所有世界变换矩阵都需要你来维护。

***.matrixWorldNeedsUpdate : Boolean***

当这个属性设置了之后，它将计算在那一帧中的matrixWorld，并将这个值重置为false。默认值为false。

***.modelViewMatrix : Matrix4***

这个值传递给着色器，用于计算物体的位置。

***.name : String***

对象的名称，可选、不必唯一。默认值是一个空字符串。

***.normalMatrix : Matrix3***

这个值传递给着色器，用于计算物体的光照。 它是物体的modelViewMatrix矩阵中，左上角3x3子矩阵的逆的转置矩阵。

使用这个特殊矩阵的原因，是只需使用modelViewMatrix就可以得出一个法线（缩放时）的非单位长度或者非垂直的方向（不规则缩放时）。

另一方面，modelViewMatrix矩阵中的位移部分和法线的计算无关，因此Matrix3就已经足够了。

***.onAfterRender : Function***

一个可选的回调函数，在Object3D渲染之后直接执行。 使用以下参数来调用此函数：renderer，scene，camera，geometry，material，group。

注意此回调函数只会在可渲染的3D物体上执行。可渲染的3D物体指的是那种拥有视觉表现的、定义了几何体与材质的物体，例如像是Mesh、Line、Points 或者Sprite。 Object3D、 Group 或者 Bone 这些是不可渲染的物体，因此此回调函数不会在这样的物体上执行。

***.onAfterShadow : Function***

An optional callback that is executed immediately after a 3D object is rendered to a shadow map. This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry, depthMaterial, group.

注意此回调函数只会在可渲染的3D物体上执行。可渲染的3D物体指的是那种拥有视觉表现的、定义了几何体与材质的物体，例如像是Mesh、Line、Points 或者Sprite。 Object3D、 Group 或者 Bone 这些是不可渲染的物体，因此此回调函数不会在这样的物体上执行。

***.onBeforeRender : Function***

一个可选的回调函数，在Object3D渲染之前直接执行。 使用以下参数来调用此函数：renderer，scene，camera，geometry，material，group。

注意此回调函数只会在可渲染的3D物体上执行。可渲染的3D物体指的是那种拥有视觉表现的、定义了几何体与材质的物体，例如像是Mesh、Line、Points 或者Sprite。 Object3D、 Group 或者 Bone 这些是不可渲染的物体，因此此回调函数不会在这样的物体上执行。

***.onBeforeShadow : Function***

An optional callback that is executed immediately before a 3D object is rendered to a shadow map. This function is called with the following parameters: renderer, scene, camera, shadowCamera, geometry, depthMaterial, group.

注意此回调函数只会在可渲染的3D物体上执行。可渲染的3D物体指的是那种拥有视觉表现的、定义了几何体与材质的物体，例如像是Mesh、Line、Points 或者Sprite。 Object3D、 Group 或者 Bone 这些是不可渲染的物体，因此此回调函数不会在这样的物体上执行。

***.parent : Object3D***

在scene graph（场景图）中，一个对象的父级对象。 一个对象最多仅能有一个父级对象。

***.position : Vector3***

表示对象局部位置的Vector3。默认值为(0, 0, 0)。

***.quaternion : Quaternion***

表示对象局部旋转的Quaternion（四元数）。

***.receiveShadow : Boolean***

材质是否接收阴影。默认值为false。

***.renderOrder : Number***

这个值将使得scene graph（场景图）中默认的的渲染顺序被覆盖， 即使不透明对象和透明对象保持独立顺序。 渲染顺序是由低到高来排序的，默认值为0。

***.rotation : Euler***

物体的局部旋转，以弧度来表示。（请参阅Euler angles-欧拉角）

***.scale : Vector3***

物体的局部缩放。默认值是Vector3( 1, 1, 1 )。

***.up : Vector3***

这个属性由lookAt方法所使用，例如，来决定结果的朝向。 默认值是Object3D.DEFAULT_UP，即( 0, 1, 0 )。

***.userData : Object***

一个用于存储Object3D自定义数据的对象。 它不应当包含对函数的引用，因为这些函数将不会被克隆。

***.uuid : String***

该对象实例的UUID。 这是一个自动生成的值，不应当对其进行修改。

***.visible : Boolean***

可见性。这个值为true时，物体将被渲染。默认值为true。

## 静态属性 (Static) {#Static}

静态属性和方法由每个类所定义，并非由每个类的实例所定义。 也就是说，改变Object3D.DEFAULT_UP或Object3D.DEFAULT_MATRIX_AUTO_UPDATE的值， 将改变每个在此之后由Object3D类（或派生类）创建的实例中的up和matrixAutoUpdate的值。（已经创建好的Object3D不会受到影响）。

***.DEFAULT_UP : Vector3***

默认的物体的up方向，同时也作为DirectionalLight、HemisphereLight和Spotlight（自顶向下创建的灯光）的默认方向。 默认设为( 0, 1, 0 )。

***.DEFAULT_MATRIX_AUTO_UPDATE : Boolean***

matrixAutoUpdate的默认设置，用于新创建的Object3D。

***.DEFAULT_MATRIX_WORLD_AUTO_UPDATE : Boolean***

matrixWorldAutoUpdate的默认设置，用于新创建的Object3D。

## 方法 (Methods) {#Methods}

EventDispatcher 在该类上可用的所有方法。

***.add ( object : Object3D, ... ) : this***

添加对象到这个对象的子级，可以添加任意数量的对象。 当前传入的对象中的父级将在这里被移除，因为一个对象仅能有一个父级。

请参阅Group来查看手动编组对象的相关信息。

***.applyMatrix4 ( matrix : Matrix4 ) : undefined***

对当前物体应用这个变换矩阵，并更新物体的位置、旋转和缩放。

***.applyQuaternion ( quaternion : Quaternion ) : this***

对当前物体应用由四元数所表示的变换。

***.attach ( object : Object3D ) : this***

将object作为子级来添加到该对象中，同时保持该object的世界变换。

***.clone ( recursive : Boolean ) : Object3D***

recursive —— 如果值为true，则该物体的后代也会被克隆。默认值为true。

返回对象前物体的克隆（以及可选的所有后代）。

***.copy ( object : Object3D, recursive : Boolean ) : this***

recursive —— 如果值为true，则该物体的后代也会被复制。默认值为true。

复制给定的对象到这个对象中。 请注意，事件监听器和用户定义的回调函数（.onAfterRender 和 .onBeforeRender）不会被复制。

***.getObjectById ( id : Integer ) : Object3D***

id —— 标识该对象实例的唯一数字。

从该对象开始，搜索一个对象及其子级，返回第一个带有匹配id的子对象。
请注意，id是按照时间顺序来分配的：1、2、3、……，每增加一个新的对象就自增1。

***.getObjectByName ( name : String ) : Object3D***

name —— 用于来匹配子物体中Object3D.name属性的字符串。

从该对象开始，搜索一个对象及其子级，返回第一个带有匹配name的子对象。
请注意，大多数的对象中name默认是一个空字符串，要使用这个方法，你将需要手动地设置name属性。

***.getObjectByProperty ( name : String, value : Any ) : Object3D***

name —— 将要用于查找的属性的名称。
value —— 给定的属性的值。

从该对象开始，搜索一个对象及其子级，返回第一个给定的属性中包含有匹配的值的子对象。

***.getObjectsByProperty ( name : String, value : Any, optionalTarget : Array ) : Object3D***

name —— 将要用于查找的属性的名称。
value —— 给定的属性的值。
optionalTarget -- (optional) target to set the result. Otherwise a new Array is instantiated. If set, you must clear this array prior to each call (i.e., array.length = 0;).

从此对象开始，搜索一个对象及其子对象，返回包含给定属性的匹配值的所有子对象。

***.getWorldPosition ( target : Vector3 ) : Vector3***

target — 结果将被复制到这个Vector3中。

返回一个表示该物体在世界空间中位置的矢量。

***.getWorldQuaternion ( target : Quaternion ) : Quaternion***

target — 结果将被复制到这个Quaternion中。

返回一个表示该物体在世界空间中旋转的四元数。

***.getWorldScale ( target : Vector3 ) : Vector3***

target — 结果将被复制到这个Vector3中。

返回一个包含着该物体在世界空间中各个轴向上所应用的缩放因数的矢量。

***.getWorldDirection ( target : Vector3 ) : Vector3***

target — 结果将被复制到这个Vector3中。

返回一个表示该物体在世界空间中Z轴正方向的矢量。

***.localToWorld ( vector : Vector3 ) : Vector3***

vector - 一个表示在该物体局部空间中位置的向量。

将该向量从物体的局部空间转换到世界空间。

***.lookAt ( vector : Vector3 ) : undefined***
***.lookAt ( x : Float, y : Float, z : Float ) : undefined***

vector - 一个表示世界空间中位置的向量。

也可以使用世界空间中x、y和z的位置分量。

旋转物体使其在世界空间中面朝一个点。

这一方法不支持其父级被旋转过或者被位移过的物体。

***.raycast ( raycaster : Raycaster, intersects : Array ) : undefined***

抽象（空方法），在一条被投射出的射线与这个物体之间获得交点。 在一些子类，例如Mesh, Line, and Points实现了这个方法，以用于光线投射。

***.remove ( object : Object3D, ... ) : this***

从当前对象的子级中移除对象。可以移除任意数量的对象。

***.removeFromParent () : this***

Removes this object from its current parent.

***.rotateOnAxis ( axis : Vector3, angle : Float ) : this***

axis —— 一个在局部空间中的标准化向量。
angle —— 角度，以弧度来表示。

在局部空间中绕着该物体的轴来旋转一个物体，假设这个轴已被标准化。

***.rotateOnWorldAxis ( axis : Vector3, angle : Float ) : this***

axis -- 一个在世界空间中的标准化向量。
angle -- 角度，以弧度来表示。

在世界空间中绕着该物体的轴来旋转一个物体，假设这个轴已被标准化。 方法假设该物体没有旋转过的父级。

***.rotateX ( rad : Float ) : this***

rad - 将要旋转的角度（以弧度来表示）。

绕局部空间的X轴旋转这个物体。

***.rotateY ( rad : Float ) : this***

rad - 将要旋转的角度（以弧度来表示）。

绕局部空间的Y轴旋转这个物体。

***.rotateZ ( rad : Float ) : this***

rad - 将要旋转的角度（以弧度来表示）。

绕局部空间的Z轴旋转这个物体。

***.setRotationFromAxisAngle ( axis : Vector3, angle : Float ) : undefined***

axis -- 一个在局部空间中的标准化向量。
angle -- 角度（以弧度来表示）。

调用.quaternion中的setFromAxisAngle( axis, angle )。

***.setRotationFromEuler ( euler : Euler ) : undefined***

euler -- 指定了旋转量的欧拉角。
调用.quaternion中的setRotationFromEuler( euler)。

***.setRotationFromMatrix ( m : Matrix4 ) : undefined***

m -- 通过该矩阵中的旋转分量来旋转四元数。
调用.quaternion中的setFromRotationMatrix( m)。

请注意，这里假设m上的3x3矩阵是一个纯旋转矩阵（即未缩放的矩阵）。

***.setRotationFromQuaternion ( q : Quaternion ) : undefined***

q -- 标准化的四元数。

将所给的四元数复制到.quaternion中。

***.toJSON ( meta : Object ) : Object***

meta -- 包含有元数据的对象，例如该对象的材质、纹理或图片。 将对象转换为 three.js JSON Object/Scene format（three.js JSON 物体/场景格式）。

***.translateOnAxis ( axis : Vector3, distance : Float ) : this***

axis -- 一个在局部空间中的标准化向量。
distance -- 将要平移的距离。

在局部空间中沿着一条轴来平移物体，假设轴已被标准化。

***.translateX ( distance : Float ) : this***

沿着X轴将平移distance个单位。

***.translateY ( distance : Float ) : this***

沿着Y轴将平移distance个单位。

***.translateZ ( distance : Float ) : this***

沿着Z轴将平移distance个单位。

***.traverse ( callback : Function ) : undefined***

callback - 以一个object3D对象作为第一个参数的函数。

在对象以及后代中执行的回调函数。

***.traverseVisible ( callback : Function ) : undefined***

callback - 以一个object3D对象作为第一个参数的函数。

类似traverse函数，但在这里，回调函数仅对可见的对象执行，不可见对象的后代将不遍历。

***.traverseAncestors ( callback : Function ) : undefined***

callback - 以一个object3D对象作为第一个参数的函数。

在所有的祖先中执行回调函数。

***.updateMatrix () : undefined***

更新局部变换。

***.updateMatrixWorld ( force : Boolean ) : undefined***

更新物体及其后代的全局变换。

***.updateWorldMatrix ( updateParents : Boolean, updateChildren : Boolean ) : undefined***

updateParents - 递归更新物体的所有祖先的全局变换.
updateChildren - 递归更新物体的所有后代的全局变换.

更新物体的全局变换。

***.worldToLocal ( vector : Vector3 ) : Vector3***

vector - 一个表示在世界空间中位置的向量。

将该向量从世界空间转换到物体的局部空间。
