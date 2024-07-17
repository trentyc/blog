# 点精灵材质(SpriteMaterial)

一种使用Sprite的材质。

## 代码示例
```js
const map = new THREE.TextureLoader().load('textures/sprite/png');
const material = new THREE.SpriteMaterial({ map: map, color: 0xffffff });

const sprite = new THREE.Sprite(material);
sprite.scale.set(200, 200, 1);
scene.add(sprite);
```

## 例子

[WebGL / raycast / sprite](../examples/webgl_raycaster_sprite){target="_blank"}


## 构造函数 (Constructor)

```md
SpriteMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。

属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色）， 内部调用Color.set(color)。 SpriteMaterials不会被Material.clippingPlanes裁剪。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.alphaMap : Texture***

alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。

仅使用纹理的颜色，忽略alpha通道（如果存在）。 对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。 Luminance-only以及luminance/alpha纹理也仍然有效。

***.color : Color***

材质的颜色(Color)，默认值为白色 (0xffffff)。 .map会和 color 相乘。

***.fog : Boolean***

材质是否受雾影响。默认为true。

***.isSpriteMaterial : Boolean***

Read-only flag to check if a given object is of type SpriteMaterial.

***.map : Texture***

颜色贴图。可以选择包括一个alpha通道，通常与.transparent 或.alphaTest。默认为null。

***.rotation : Radians***

sprite的转动，以弧度为单位。默认值为0。

***.sizeAttenuation : Boolean***

精灵的大小是否会被相机深度衰减。（仅限透视摄像头。）默认为true。

***.transparent : Boolean***

定义此材质是否透明。默认值为 true。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。