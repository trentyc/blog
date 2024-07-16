# WireframeGeometry 立方缓冲几何体

- 继承自 BufferGeometry。
- 这个类可以被用作一个辅助物体，来对一个geometry以线框的形式进行查看。
- 更适合创建完整的线框模型

<iframe id="scene" src="https://threejs.org/examples/webgl_helpers.html"></iframe>

>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/WireframeGeometry)


## 代码示例

```js
const geometry = new THREE.SphereGeometry( 100, 100, 100 );

const wireframe = new THREE.WireframeGeometry( geometry );

const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.25;
line.material.transparent = true;

scene.add( line );
```

## 构造函数 (Constructor)

```md
WireframeGeometry( geometry : BufferGeometry )
geometry — 任意几何体对象。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。