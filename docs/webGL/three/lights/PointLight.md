# 点光源 (PointLight)

- 全方位发光：光线从光源点向所有方向均匀发射。
- 衰减效果：随着距离增加，光线强度逐渐减弱，可以通过decay属性控制衰减率。
- 阴影：可以投射阴影，增强场景的立体感。
- 颜色和强度：通过color属性设置光的颜色，通过intensity属性调节光的亮度。
- 位置：光源的位置在场景中是固定的，可以自由移动以改变光照效果。
- 光照范围：通过distance属性限制光照范围，超过这个距离的物体将不再受到光照影响。
- 场景照明：常用于模拟室内照明，如台灯、吊灯等。

<iframe id="scene" src="https://threejs.org/examples/webgl_lights_pointlights.html"></iframe>

## 代码示例

```js
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );
```

## 构造函数 (Constructor)

```md
PointLight( color : Color, intensity : Float, distance : Number, decay : Float )
color -（可选）一个表示颜色的 Color 的实例、字符串或数字，默认为一个白色（0xffffff）的 Color 对象。
intensity -（可选）光照强度。默认值为 1。
distance - 光源照射的最大距离。默认值为 0（无限远）。
decay - 沿着光照距离的衰退量。默认值为 2。

创建一个新的点光源（PointLight）。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Light](./Light)。

***.castShadow : Boolean***

此属性设置为 true 灯光将投射阴影。注意：这样做的代价比较高，需要通过调整让阴影看起来正确。 查看 PointLightShadow 了解详细信息。 默认值为 false。

***.decay : Float***

光线随着距离增加变暗的衰减量。默认值为 2。
在物理正确渲染的上下文中，不应更改默认值。

***.distance : Float***

当值为零时，光线将根据平方反比定律衰减到无限远。 当值不为零时，光线会先按照平方反比定律衰减，直到距离截止点附近，然后线性衰减到 0。

默认值为 0.0。

***.intensity : Float***

光源的强度。默认值为 1。
单位是坎德拉（cd）。

改变该值会影响到 power 的值。

***.power : Float***

光源的功率。
单位为流明（lm）。

改变该值会影响到 intensity 的值。

***.shadow : PointLightShadow***

PointLightShadow 对象，用与计算此光照的阴影。

此对象的摄像机为：一个 fov 值为90度、aspect 值为 1、 near 值为 0、far 值为 500 的透视摄像机（PerspectiveCamera）


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Light](./Light)。

***.dispose () : undefined***

释放由该实例分配的 GPU 相关资源。 当这个实例不再在你的应用中使用时，调用这个方法。

***.copy ( source : PointLight ) : this***

复制 source 的值到这个平行光源对象。
