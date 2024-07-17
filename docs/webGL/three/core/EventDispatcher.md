# EventDispatcher

自定义对象的 JavaScript 事件。
EventDispatcher on GitHub

## 代码示例
```js
// 为自定义对象添加事件
class Car extends EventDispatcher {
  start() {
    this.dispatchEvent( { type: 'start', message: 'vroom vroom!'});
  }
}

// 使用自定义对象的事件

const car = new Car();

car.addEventListener('start', function (event) {
  alert(event.message);
})

car.start();
```

## 构造函数

EventDispatcher()
创建 EventDispatcher 对象。

## 方法

***.addEventListener(type: String, listener: Function):undefined***

type - 需要添加监听的事件类型。
listener - 事件发生时被调用到的函数。

为指定事件曾加监听函数。

***.hasEventListener(type: String, listener: Function):Boolean***

type - 需要被监听的事件类型。
listener - 事件发生时被调用到的函数。

检查监听函数是否已经被添加到指定事件。

***.removeEventListener(type: String, listener: Function):undefined***

type - 需要移除监听的事件类型。
listener - 需要被移除的监听函数。

从指定事件类型中移除监听函数。

***.dispatchEvent(event: Object): undefined***

event - 将被触发的事件。

触发一个事件。

