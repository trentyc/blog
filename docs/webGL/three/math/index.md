# Box2

表示二维空间中的一个轴对齐包围盒 (axis-aligned bounding box, AABB) 。

## 构造函数(Constructor)

Box2(min: Vector2, max: Vector2)

min - (可选) Vector2 表示该盒子的下边界(x, y)。 默认值为 (+ Infinity, + Infinity)。
max - (可选) Vector2 表示该盒子的上边界(x, y)。 默认值为 (- Infinity, - Infinity)。

创建一个介于最小和最大值之间的Box2。

## 属性(Properties)

***.min: Vector2***

Vector2 表示该盒子的下边界（x, y）。
默认值为 (+ Infinity, + Infinity)。

***.max: Vector2***

Vector2 表示该盒子的上边界(x, y).
默认值为(-Infinity, -Infinity)。

## 方法(Methods)

***.clampPoint(point: Vector2, target: Vector2): Vector2***

point - clamp 的位置(Vector2)
target —— 结果会被复制到该二维向量中。

在该盒子范围内夹紧(Clamps) point。

***.clone(): Box2***

返回一个新的Box2, 其min和max与此盒子相同。

***.containsBox(box: Box2): Boolean***

box - 要检查是否被包含的盒子。

如果盒子包含整个被检查盒子，则返回true。如果两者重叠，也会返回true。

***.containsPoint(point: Vector2): Boolean***

point - 要检查是否被包含的点Vector2。

如果指定的点(point)位于盒子的边界内或者边界上, 则返回true。

***.copy(box: Box2): this***

将box的min和max复制到此盒子中。

***.distanceToPoint(point: Vector2): Float***

point - 要测量距离的点(Vector2)。

返回这个盒子的任何边缘到指定点的距离。如果这个点(point)位于这个盒子里，距离将是0。

***.equals(box: Box2): Boolean***

box - 要对比的盒子

如果这个盒子和被对比盒子具有相同的上下边界，则返回true。

***.expandByPoint(point: Vector2): this***

point - 应该被盒子包含的点。

扩展盒子的边界来包含该点。

***.expandByScalar(scalar: Float): this***

scalar - 盒子扩展的距离。

在每个维度上扩展参数scalar所指定的距离，如果为负数，则盒子空间将收缩。

***.expandByVector(vector: Vector2): this***

vector - 按照该向量扩展。

在每个维度中按vector的数值进行扩展。宽度在两个方向上的扩展将由vector的x分量确定，高度在两个方向上的扩展则由y分量确定。

***.getCenter(target: Vector2): Vector2***

target - 结果会被复制到该二维向量中。

以二维向量形式返回盒子的中心点。

***.getParameter(point: Vector2, target: Vector2): Vector2***

point - 二维向量(Vector2)。
target - 结果将被复制到此二维向量中。

返回一个点作为此和字的宽度和高度的比例。

***.getSize(target: Vector2): Vector2***

target - 结果将被复制到此二维向量中。

返回此盒子的宽度和高度。

***.intersect(box: Box2): this***

box - 要相交的盒子。

返回两者的相交后的盒子，并将相交后的盒子的上限设置为两者的上限中的较小者，将下限设置为两者的下限中的较大者。

***.intersectsBox(box: Box2): Boolean***

box - 用来检查相交的盒子。

确定该盒子是否和其相交。

***.isEmpty(): Boolean***

如果这个盒子包含0个顶点，则返回true。

请注意一个下上边界相等的盒子仍然包括一个点， 一个两个边界共享的点。

***.makeEmpty():this***

使此盒子为空。

***.set(min: Vector2, max: Vector2): this***

min - (必须) 表示该盒子的下边界(x, y)。
max - (必须) 表示该盒子的上边界(x, y)。

设置这个合资的上下(x,y)的界限。
请注意，此方法仅复制给定对象的值。

***.setFromCenterAndSize(center: Vector2, size: Vector2): this***

center - 盒子所有设置的中心位置(Vector2)。
size - 盒子所要设置的x和y尺寸(Vector2)。

使盒子的中心点位于center, 并设置宽高为size中指定的值。

***.setFromPoints(points: Array):this***

points - 点的集合， 由这些点确定的空间将被盒子包围。

设置这个盒子的上下边界，来包含所有设置在points参数中的点。

***.transalte(offset: Vector2): this***

offset - 偏移方向和距离。

添加offset到这个盒子的上下边界，实际上在2D空间移动这个盒子offset个单位。

***.union(box: Box2):this***

box - 将要与该盒子联合的盒子。

在 box 参数的上边界和该盒子的上边界之间取较大者，而对两者的下边界取较小者，这样获取一个新的较大的联合盒子。


