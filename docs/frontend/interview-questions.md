# 面试题 {#interview-questions}

## html 代码第一行的作用

```md
HTML 代码的第一行用于声明文档的类型，并且告诉浏览器使用哪种 HTML 的标准来解析页面
```

## html 里 meta 属性

```
HTML中的<meta>标签位于<head>部分，用于提供关于HTML文档的元数据。<meta>标签有多种属性，下面是一些常见的属性及其用途：
```

1. charset: 定义文档的字符编码，例如：

```html
<meta charset="UTF-8" />
```

2. name: 定义元数据的名称。name 属性可以与 content 属性一起使用来提供额外的元数据，例如：

```html
<meta name="description" content="这是网页的描述" />
```

3. content: 与 name 属性配合使用，定义元数据的值。

4. http-equiv: 定义一个 HTTP 头部的值。当 http-equiv 属性被设置为"Content-Type"时，可以指定字符编码：

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```

5. viewport: 控制页面布局在不同设备上的显示方式，常用于响应式设计，例如：

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

6. keywords: 定义页面的关键词，用于搜索引擎优化，但现代搜索引擎可能不再重视这一属性。

7. author: 定义页面的作者。

8. referrer: 控制文档的引用策略，例如：

```html
<meta name="referrer" content="no-referrer" />
```

9. robots: 控制搜索引擎爬虫如何抓取页面，例如：

```html
<meta name="robots" content="index, follow" />
```

10. description: 定义页面的描述，通常用于搜索引擎结果页面的摘要。

## CSS 中的布局方式

这道题其实就是考你 display 属性的属性值你了解多少，面试官主要是想考你 flex，因为这套题答完之后就问了你对 flex 了解多少。

- block
- inline
- inline-block
- flex
- grid
- table
- table-cell

## 聊一聊 flexable 布局

[Flex 布局教程 (阮一峰)](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
