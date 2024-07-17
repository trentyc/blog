# 环境光 (AmbientLight)

- 均匀照明：为场景提供无阴影的均匀光线。
- 颜色设置：通过color属性定义光源颜色。
- 多光源兼容：可与其他光源类型结合使用。
- 基础照明：通常作为场景基础照明，补充其他光源。
- 调整氛围：通过颜色和亮度改变场景氛围。
- 无方向性：光线从所有方向均匀照射。

## 代码示例

```js
const light = new THREE.AmbientLight( 0x404040 ); // 柔和的白光
scene.add( light );
```

## 构造函数 (Constructor)

```md
AmbientLight( color : Color, intensity : Float )
- color -（可选）一个表示颜色的 Color 的实例、字符串或数字，默认为一个白色（0xffffff）的 Color 对象。
- intensity -（可选）光照的强度。默认值为 1。

创建一个环境光对象。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Light](./Light)。

***.isAmbientLight : Boolean***

只读，用于检查对象的类型是否为 AmbientLight


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Light](./Light)。
