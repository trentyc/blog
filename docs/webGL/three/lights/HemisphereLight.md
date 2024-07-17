# 半球光 (HemisphereLight)

- 双色光源：由两种颜色的光组成，一种来自天空（skyColor），一种来自地面（groundColor）。
- 半球形照明：光源覆盖了物体的上半球和下半球，模拟了天空和地面的光照效果。
- 无阴影：HemisphereLight 不产生阴影，适用于需要柔和光照的场景。
- 方向性较弱：与DirectionalLight相比，HemisphereLight的方向性较弱，更适用于提供环境光。
- 颜色混合：根据物体相对于光源的位置，物体表面会接收到不同比例的两种颜色光照，形成渐变效果。
- 补充照明：通常作为补充光源，与其他类型的光源（如AmbientLight或DirectionalLight）结合使用。
- 视觉效果：可以创造出天空和地面反射光的效果，增加场景的自然感和深度

<iframe id="scene" src="https://threejs.org/examples/webgl_lights_hemisphere.html"></iframe>

## 代码示例

```js
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );
```

## 构造函数 (Constructor)

```md
HemisphereLight( skyColor : Integer, groundColor : Integer, intensity : Float )
skyColor -（可选）一个表示颜色的 Color 的实例、字符串或数字，默认为一个白色（0xffffff）的 Color 对象。
groundColor -（可选）一个表示颜色的 Color 的实例、字符串或数字，默认为一个白色（0xffffff）的 Color 对象。
intensity -（可选）光照强度。默认值为 1。

创建一个半球光。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Light](./Light)。

***.color : Color***

在构造时传递的天空发出光线的颜色。 默认值为白色（0xffffff）的 Color 对象。

***.groundColor : Color***

在构造时传递的地面发出光线的颜色。 默认值为白色（0xffffff）的 Color 对象。

***.isHemisphereLight : Boolean***

只读，用于检查对象的类型是否为 HemisphereLight。

***.position : Vector3***

假如这个值设置为 Object3D.DEFAULT_UP (0, 1, 0)，光线将会从上往下照射。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Light](./Light)。

***.copy ( source : HemisphereLight ) : this***

从 source 复制 color、intensity 和 groundColor 的值到当前半球光对象中。
