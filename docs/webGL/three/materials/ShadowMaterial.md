# 阴影材质(ShadowMaterial)

此材质可以接受阴影，但在其它方面完全透明。

## 代码示例
```js
const geometry = new THREE.PlaneGeometry(2000, 2000);
geometry.rotateX(-Math.PI / 2);

const material = new THREE.ShadowMaterial();
material.opacity = 0.2;

const plane = new THREE.Mesh(geometry, material);
plane.position.y = -200;
plane.receiveShadow = true;
scene.add(plane);
```

## 例子

[geometry / spline / editor](../examples/webgl_geometry_spline_editor){target="_blank"}


## 构造函数 (Constructor)

```md
ShadowMaterial( parameters : Object )
parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。 材质的任何属性都可以从此处传入(包括从Material继承的任何属性)。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Material](./Material)。

***.color : Color***

Color of the material, by default set to black (0x000000).

***.fog : Boolean***

材质是否受雾影响。默认为true。

***.transparent : Boolean***

定义此材质是否透明。默认值为 true。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Material](./Material)。