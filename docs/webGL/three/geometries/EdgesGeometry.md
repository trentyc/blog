# EdgesGeometry 边缘几何体

- 继承自 BufferGeometry。
- 作为一个辅助对象来查看geometry的边缘。
- 更适合创建一个只显示边缘的线框模型。

<iframe id="scene" src="https://threejs.org/examples/webgl_helpers.html"></iframe>

## 代码示例

```js
const geometry = new THREE.BoxGeometry( 100, 100, 100 );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
```

## 构造函数 (Constructor)
```md
EdgesGeometry( geometry : BufferGeometry, thresholdAngle : Integer )
geometry — 任何一个几何体对象。
thresholdAngle — 仅当相邻面的法线之间的角度（单位为角度）超过这个值时，才会渲染边缘。默认值为1。
```

## 属性 (Properties) {#Properties}

共有属性请参见其基类 [BufferGeometry](../core/BufferGeometry#Properties)。

## 方法 (Methods) {#Methods}

共有方法请参见其基类 [BufferGeometry](../core/BufferGeometry#Methods)。