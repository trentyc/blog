# 平行光 (DirectionalLight)

- 平行光：光线从单一方向平行射出，不随距离衰减。
- 方向性：具有明确的方向，影响光照的方向和阴影的产生。
- 阴影：可以投射阴影，增强场景的立体感和真实感。
- 场景照明：常用于模拟自然光，如太阳光，为场景提供主要照明。
- 光源位置：通常设置在相机视角之外，以避免遮挡。
- 光照范围：由于是平行光，理论上光照范围无限。
- 与其他光源结合：可以与环境光和其他类型的光源结合，创造丰富的光照效果。

**关于位置、目标和旋转说明**

Three.js 的平行光常见的困惑是设置旋转没有效果。这是因为 three.js 的平行光类似与其他引擎的“目标平行光”。

这意味着它的方向是从一个平行光的位置 [position](#position) 到 [target](#target) 的位置。 （而不是一个只有旋转分量的“自由平行光”）。

这样做是为了让光线投射阴影。[shadow](#shadow) 摄像机需要一个位置来计算阴影。

有关更新目标的详细信息，请参阅 [target](#target) 下面的目标属性。

<iframe id="scene" src="https://threejs.org/examples/webgl_materials_bumpmap.html"></iframe>

## 代码示例

```js
// 从上方照射的白色平行光，强度为 0.5。
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
```

## 构造函数 (Constructor)

```md
DirectionalLight( color : Color, intensity : Float )
color -（可选）一个表示颜色的 Color 的实例、字符串或数字，默认为一个白色（0xffffff）的 Color 对象。
intensity -（可选）光照的强度。默认值为 1。

创建一个新的 DirectionalLight。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Light](./Light)。

***.castShadow : Boolean***{#castShadow}

此属性设置为 true 灯光将投射阴影。注意：这样做的代价比较高，需要通过调整让阴影看起来正确。 查看 DirectionalLightShadow 了解详细信息。 默认值为 false。

***.isDirectionalLight : Boolean***{#isDirectionalLight}

只读，用于检查对象的类型是否为 DirectionalLight。

***.position : Vector3***{#position}

假如这个值设置为 Object3D.DEFAULT_UP (0, 1, 0)，光线将会从上往下照射。

***.shadow : DirectionalLightShadow***{#shadow}

DirectionalLightShadow 对象，用于计算该平行光产生的阴影。

***.target : Object3D***{#target}

灯光从它的位置（[position](#position)）指向目标位置。默认的目标位置为(0, 0, 0)。
注意：对于目标的位置，如果要改为除默认值之外的其他位置，该位置必须被添加到场景（scene）中去。

```md
scene.add( light.target );
```

这是为了让目标的 matrixWorld 在每一帧自动更新。

也可以将目标设置为场景中的其他对象（任意拥有 [position](#position) 属性的对象），如:

```md
const targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject;
```

通过上述操作，光源就可以追踪目标对象了。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Light](./Light)。

***.dispose () : undefined***

释放由该实例分配的 GPU 相关资源。 当这个实例不再在你的应用中使用时，调用这个方法。

***.copy ( source : DirectionalLight ) : this***

复制 source 的值到这个平行光源对象。
