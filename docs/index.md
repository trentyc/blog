---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
pageClass: "home-layout"

hero:
  name: trentyc's Blog
  text: 记录技术、生活、感悟
  tagline: Per ASPERA Ad Astra 穿越逆境 抵达繁星
  image:
    src: /logo.png
    alt: logo
  actions:
    - theme: brand
      text: 快速访问
      link: /frontend/html
    - theme: alt
      text: github
      link: https://github.com/trentyc/blog
    - theme: alt
      text: vitepress
      link: https://vitepress.dev/zh/

features:
  - icon: 📖
    title: 前端技术
    details: 记录前端技术的学习笔记，包括 HTML、CSS、JavaScript、TypeScript、Vue、React、Node.js 等。
    linkText: 前往查看
    link: /frontend/html/
  - icon: 📖
    title: nextjs
    details: 一个基于 React 的框架，用于构建全栈 Web 应用程序。Next.js 提供额外的特性和优化, 支持服务端渲染、静态生成、文件系统路由、类型安全等特性。
    linkText: 前往查看
    link: /nextjs/1-答疑篇  学习路线与答疑
  - icon: 📖
    title: WebGL
    details: WebGL（Web Graphics Library）是一个在网页上渲染3D图形的JavaScript API。它允许开发者使用HTML5的canvas元素来绘制2D和3D图形，无需使用插件。
    linkText: 前往查看
    link: /webGL/three/intro
  - icon: 📖
    title: 生活记录
    details: 记录生活中的点点滴滴，包括工作、学习、旅行、美食、音乐等。
    linkText: 前往查看
    link: /life/
  - icon: 📖
    title: NCRE
    details: 软考学习（信息系统项目管理）。
    linkText: 前往查看
    link: /NCRE/MCQ
---


<style>
/*爱的魔力转圈圈*/
.home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 0.3s cubic-bezier(0.3, 0, 0.8, 1);
}
</style>
