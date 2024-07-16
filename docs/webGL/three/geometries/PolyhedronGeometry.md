# PolyhedronGeometry 多面缓冲几何体

- 继承自 BufferGeometry。
- 多面体在三维空间中具有一些平面的立体图形。
- 这个类将一个顶点数组投射到一个球面上，之后将它们细分为所需的细节级别。
- 这个类由 DodecahedronGeometry、IcosahedronGeometry、OctahedronGeometry和TetrahedronGeometry 所使用，以生成它们各自的几何结构。


>[官网地址](https://threejs.org/docs/index.html#api/zh/geometries/PolyhedronGeometry)


## 代码示例

```js
const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
```

## 构造函数 (Constructor)

```md
PolyhedronGeometry(vertices : Array, indices : Array, radius : Float, detail : Integer)
vertices — 一个顶点Array（数组）：[1,1,1, -1,-1,-1, ... ]。
indices — 一个构成面的索引Array（数组）， [0,1,2, 2,3,0, ... ]。
radius — Float - 最终形状的半径。
detail — Integer - 将对这个几何体细分多少个级别。细节越多，形状就越平滑。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。