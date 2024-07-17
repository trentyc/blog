# 平面光光源 (RectAreaLight)

- 矩形发光面：光源是一个矩形平面，可以设置其宽度和高度。
- 模拟像明亮的窗户或者条状灯光光源。
- 不支持阴影。
- 只支持 MeshStandardMaterial 和 MeshPhysicalMaterial 两种材质。
- 你必须在你的场景中加入 RectAreaLightUniformsLib，并调用 init()。

<iframe id="scene" src="https://threejs.org/examples/webgl_lights_rectarealight.html"></iframe>

## 代码示例

```js
const width = 10;
const height = 10;
const intensity = 1;
const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
rectLight.position.set( 5, 5, 0 );
rectLight.lookAt( 0, 0, 0 );
scene.add( rectLight )

const rectLightHelper = new RectAreaLightHelper( rectLight );
scene.add( rectLightHelper );
```

## 构造函数 (Constructor)

```md
RectAreaLight( color : Color, intensity : Float, width : Float, height : Float )
color -（可选）一个表示颜色的 Color 的实例、字符串或数字，默认为一个白色（0xffffff）的 Color 对象。
intensity -（可选）光源强度／亮度 。默认值为 1。
width -（可选）光源宽度。默认值为 10。
height -（可选）光源高度。默认值为 10。

创建一个新的平面光。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Light](./Light)。

***.height : Float***

光源高度。

***.intensity : Float***

光源的强度。默认值为 1。
单位是尼特（cd/m^2）。

改变该值会影响到 power 的值。

***.isRectAreaLight : Boolean***

只读，用于检查对象的类型是否为 RectAreaLight。

***.power : Float***

光源的功率。
单位为流明（lm）。

改变该值会影响到 intensity 的值。

***.width : Float***

光源宽度。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Light](./Light)。


***.copy ( source : RectAreaLight ) : this***

复制 source 的值到这个平行光源对象。
