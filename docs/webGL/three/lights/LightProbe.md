# 光照探针 (LightProbe)

- 非发光体：它不产生光，而是使用存储的光照信息来影响场景中的物体。
- 光照信息：LightProbe 存储了场景中的光照信息，包括颜色和亮度。
- 无阴影：HemisphereLight 不产生阴影，适用于需要柔和光照的场景。
- 环境映射：LightProbe 可以用于实现高级的环境映射技术，如球形谐波（Spherical Harmonics）或HDR环境贴图。
- 场景照明：虽然LightProbe不发光，但它可以显著改善场景的光照质量，特别是在需要模拟复杂光照环境的情况下。

光照探针通常从（辐射）环境贴图中创建。LightProbeGenerator 类可以用于从 CubeTexture 或 WebGLCubeRenderTarget 的实例来创建光照探针。 但是，光照估算数据同样可以以其他形式提供，例如，通过WebXR。 这使得增强现实内容的渲染能够对现实世界的照明做出反应。

目前在 Three.js 中的探测实现支持所谓的漫射光探测。 这种类型的光照探针在功能上等效于辐照环境贴图。

<iframe id="scene" src="https://threejs.org/examples/webgl_lightprobe.html"></iframe>

## 构造函数 (Constructor)

```md
LightProbe( sh : SphericalHarmonics3, intensity : Float )
sh -（可选）一个 SphericalHarmonics3 的实例。
intensity -（可选）光照探针强度的数值。默认值为 1。

创建一个新的 LightProbe 。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [Light](./Light)。 color 属性当前未做评估，因此不生效。

***.isLightProbe : Boolean***

只读，用于检查对象的类型是否为 LightProbe。

***.sh : SphericalHarmonics3***

光照探针使用球面谐波（spherical harmonic）来编码光照信息。


## 方法 (Methods) {#Methods}

共有方法请参见其基类 [Light](./Light)。
