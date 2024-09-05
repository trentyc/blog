import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/frontend/": [
    {
      text: "HTML",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/html/" }],
    },
    {
      text: "CSS",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/css/" }],
    },
    {
      text: "JavaScript",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/javaScript/" }],
    },
    {
      text: "TypeScript",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/typeScript/" }],
    },
    {
      text: "面试题",
      link: "/frontend/interview-questions",
    },
  ],
  "/nextjs/": [
    {
      text: "1-答疑篇  学习路线与答疑",
      link: "/nextjs/1-答疑篇  学习路线与答疑",
    },
    {
      text: "2-初始篇  Next.js CLI",
      link: "/nextjs/2-初始篇  Next.js CLI",
    },
    {
      text: "3-路由篇  App Router",
      link: "/nextjs/3-路由篇  App Router",
    },
    {
      text: "4-路由篇  链接与导航",
      link: "/nextjs/4-路由篇  链接与导航",
    },
    {
      text: "5-路由篇  动态路由、路由组、平行路由和拦截路由",
      link: "/nextjs/5-路由篇  动态路由、路由组、平行路由和拦截路由",
    },
    {
      text: "6-路由篇  路由处理程序",
      link: "/nextjs/6-路由篇  路由处理程序",
    },
    {
      text: "7-路由篇  中间件",
      link: "/nextjs/7-路由篇  中间件",
    },
    {
      text: "8-渲染篇  从 CSR、SSR、SSG、ISR 开始说起",
      link: "/nextjs/8-渲染篇  从 CSR、SSR、SSG、ISR 开始说起",
    },
    {
      text: "9-渲染篇  React Server Component 与 SSR",
      link: "/nextjs/9-渲染篇  React Server Component 与 SSR",
    },
    {
      text: "10-渲染篇  Suspense 与 Streaming",
      link: "/nextjs/10-渲染篇  Suspense 与 Streaming",
    },
    {
      text: "11-渲染篇  服务端组件和客户端组件",
      link: "/nextjs/11-渲染篇  服务端组件和客户端组件",
    },
    {
      text: "12-渲染篇  服务端渲染策略",
      link: "/nextjs/12-渲染篇  服务端渲染策略",
    },
    {
      text: "13-数据获取篇  数据获取、缓存与重新验证",
      link: "/nextjs/13-数据获取篇  数据获取、缓存与重新验证",
    },
    {
      text: "14-缓存篇  Caching（上）",
      link: "/nextjs/14-缓存篇  Caching（上）",
    },
    {
      text: "15-缓存篇  Caching（下）",
      link: "/nextjs/15-缓存篇  Caching（下）",
    },
    {
      text: "16-数据获取篇  Server Actions（上）",
      link: "/nextjs/16-数据获取篇  Server Actions（上）",
    },
    {
      text: "17-数据获取篇  Server Actions（下）",
      link: "/nextjs/17-数据获取篇  Server Actions（下）",
    },
    {
      text: "18-样式篇  Tailwind CSS、CSS-in-JS 与 Sass",
      link: "/nextjs/18-样式篇  Tailwind CSS、CSS-in-JS 与 Sass",
    },
    {
      text: "19-配置篇  环境变量、路径别名与 src 目录",
      link: "/nextjs/19-配置篇  环境变量、路径别名与 src 目录",
    },
    {
      text: "20-配置篇  路由段配置项",
      link: "/nextjs/20-配置篇  路由段配置项",
    },
    {
      text: "21-组件篇  Images",
      link: "/nextjs/21-组件篇  Images",
    },
    {
      text: "22-组件篇  Font",
      link: "/nextjs/22-组件篇  Font",
    },
    {
      text: "23-组件篇  Link 和 Script",
      link: "/nextjs/23-组件篇  Link 和 Script",
    },
    {
      text: "24-Metadata 篇  基于配置",
      link: "/nextjs/24-Metadata 篇  基于配置",
    },
    {
      text: "25-Metadata 篇  基于文件",
      link: "/nextjs/25-Metadata 篇  基于文件",
    },
    {
      text: "26-优化篇  懒加载",
      link: "/nextjs/26-优化篇  懒加载",
    },
    {
      text: "27-渲染篇  Edge Runtime",
      link: "/nextjs/27-渲染篇  Edge Runtime",
    },
    {
      text: "28-路由篇  国际化",
      link: "/nextjs/28-路由篇  国际化",
    },
    {
      text: "29-配置篇  TypeScript 和 ESLint",
      link: "/nextjs/29-配置篇  TypeScript 和 ESLint",
    },
    {
      text: "30-配置篇  MDX",
      link: "/nextjs/30-配置篇  MDX",
    },
    {
      text: "31-配置篇  草稿模式和内容安全策略",
      link: "/nextjs/31-配置篇  草稿模式和内容安全策略",
    },
    {
      text: "32-部署篇  静态导出",
      link: "/nextjs/32-部署篇  静态导出",
    },
    {
      text: "33-API 篇  next.config.js（上）",
      link: "/nextjs/33-API 篇  next.config.js（上）",
    },
    {
      text: "34-API 篇  next.config.js（下）",
      link: "/nextjs/34-API 篇  next.config.js（下）",
    },
    {
      text: "35-API 篇  常用函数与方法（上）",
      link: "/nextjs/35-API 篇  常用函数与方法（上）",
    },
    {
      text: "36-API 篇  常用函数与方法（下）",
      link: "/nextjs/36-API 篇  常用函数与方法（下）",
    },
    {
      text: "37-实战篇  React Notes  项目介绍与创建",
      link: "/nextjs/37-实战篇  React Notes  项目介绍与创建",
    },
    {
      text: "38-实战篇  React Notes  侧边栏笔记列表",
      link: "/nextjs/38-实战篇  React Notes  侧边栏笔记列表",
    },
    {
      text: "39-实战篇  React Notes  笔记预览界面",
      link: "/nextjs/39-实战篇  React Notes  笔记预览界面",
    },
    {
      text: "40-实战篇  React Notes  笔记编辑界面",
      link: "/nextjs/40-实战篇  React Notes  笔记编辑界面",
    },
    {
      text: "41-实战篇  React Notes  笔记搜索",
      link: "/nextjs/41-实战篇  React Notes  笔记搜索",
    },
    {
      text: "42-实战篇  React Notes  国际化",
      link: "/nextjs/42-实战篇  React Notes  国际化",
    },
    {
      text: "43-实战篇  React Notes  文件上传",
      link: "/nextjs/43-实战篇  React Notes  文件上传",
    },
    {
      text: "44-实战篇  React Notes  next-auth",
      link: "/nextjs/44-实战篇  React Notes  next-auth",
    },
    {
      text: "45-实战篇  React Notes  Strapi",
      link: "/nextjs/45-实战篇  React Notes  Strapi",
    },
    {
      text: "46-实战篇  React Notes  Prisma",
      link: "/nextjs/46-实战篇  React Notes  Prisma",
    },
    {
      text: "47-实战篇  React Notes  服务器部署",
      link: "/nextjs/47-实战篇  React Notes  服务器部署",
    },
    {
      text: "48-实战篇  React Notes  Docker 快速入门",
      link: "/nextjs/48-实战篇  React Notes  Docker 快速入门",
    },
    {
      text: "49-实战篇  React Notes  Docker 部署",
      link: "/nextjs/49-实战篇  React Notes  Docker 部署",
    },
    {
      text: "50-实战篇  React Notes  Vercel 部署",
      link: "/nextjs/50-实战篇  React Notes  Vercel 部署",
    },
    {
      text: "51-实战篇  博客  快速实现",
      link: "/nextjs/51-实战篇  博客  快速实现",
    },
    {
      text: "52-实战篇  博客  Contentlayer",
      link: "/nextjs/52-实战篇  博客  Contentlayer",
    },
    {
      text: "53-实战篇  博客  SEO",
      link: "/nextjs/53-实战篇  博客  SEO",
    },
    {
      text: "54-实战篇  博客  深色模式（Dark Mode）",
      link: "/nextjs/54-实战篇  博客  深色模式（Dark Mode）",
    },
    {
      text: "55-实战篇  博客  i18n",
      link: "/nextjs/55-实战篇  博客  i18n",
    },
    {
      text: "56-实战篇  博客  性能分析",
      link: "/nextjs/56-实战篇  博客  性能分析",
    },
    {
      text: "57-实战篇  博客  评论系统",
      link: "/nextjs/57-实战篇  博客  评论系统",
    },
    {
      text: "58-实战篇  最佳实践总览",
      link: "/nextjs/58-实战篇  最佳实践总览",
    },
    {
      text: "59-实战篇  Clerk 与登录注册",
      link: "/nextjs/59-实战篇  Clerk 与登录注册",
    },
    {
      text: "60-实战篇  Crowdin 与本地化",
      link: "/nextjs/60-实战篇  Crowdin 与本地化",
    },
    {
      text: "61-实战篇  Storybook 与 UI 开发",
      link: "/nextjs/61-实战篇  Storybook 与 UI 开发",
    },
    {
      text: "62-实战篇  React Hook Form 与表单处理",
      link: "/nextjs/62-实战篇  React Hook Form 与表单处理",
    },
    {
      text: "62-实战篇  Zod 与数据校验",
      link: "/nextjs/62-实战篇  Zod 与数据校验",
    },
    {
      text: "63-实战篇   Shadcn UI 与组件库",
      link: "/nextjs/63-实战篇   Shadcn UI 与组件库",
    },
    {
      text: "63-源码篇  手写 React SSR",
      link: "/nextjs/63-源码篇  手写 React SSR",
    },
    {
      text: "64-实战篇  React Hook From 与表单处理",
      link: "/nextjs/64-实战篇  React Hook From 与表单处理",
    },
    {
      text: "64-源码篇  手写 React SSG 和 ISR",
      link: "/nextjs/64-源码篇  手写 React SSG 和 ISR",
    },
    {
      text: "65-实战篇  tRPC 与类型安全",
      link: "/nextjs/65-实战篇  tRPC 与类型安全",
    },
    {
      text: "65-源码篇  手写 RSC（上）",
      link: "/nextjs/65-源码篇  手写 RSC（上）",
    },
    {
      text: "65-源码篇  手写 React SSR",
      link: "/nextjs/65-源码篇  手写 React SSR",
    },
    {
      text: "66-实战篇  create-t3-app 与项目初始化",
      link: "/nextjs/66-实战篇  create-t3-app 与项目初始化",
    },
    {
      text: "66-源码篇  手写 RSC（下）",
      link: "/nextjs/66-源码篇  手写 RSC（下）",
    },
    {
      text: "66-源码篇  手写 React SSG 和 ISR",
      link: "/nextjs/66-源码篇  手写 React SSG 和 ISR",
    },
    {
      text: "67-实战篇  t3-app 实战  身份认证与主题切换",
      link: "/nextjs/67-实战篇  t3-app 实战  身份认证与主题切换",
    },
    {
      text: "67-源码篇  RSC 实现原理",
      link: "/nextjs/67-源码篇  RSC 实现原理",
    },
    {
      text: "67-源码篇  手写 RSC（上）",
      link: "/nextjs/67-源码篇  手写 RSC（上）",
    },
    {
      text: "68-实战篇  t3-app 实战  创建清单",
      link: "/nextjs/68-实战篇  t3-app 实战  创建清单",
    },
    {
      text: "68-源码篇  实现 Streaming",
      link: "/nextjs/68-源码篇  实现 Streaming",
    },
    {
      text: "68-源码篇  手写 RSC（下）",
      link: "/nextjs/68-源码篇  手写 RSC（下）",
    },
    {
      text: "69-实战篇  t3-app 实战  创建任务",
      link: "/nextjs/69-实战篇  t3-app 实战  创建任务",
    },
    {
      text: "69-源码篇  RSC 实现原理",
      link: "/nextjs/69-源码篇  RSC 实现原理",
    },
    {
      text: "69-源码篇  实现 Server Actions",
      link: "/nextjs/69-源码篇  实现 Server Actions",
    },
    {
      text: "70-源码篇  实现 Streaming",
      link: "/nextjs/70-源码篇  实现 Streaming",
    },
    {
      text: "70-源码篇  实现客户端组件",
      link: "/nextjs/70-源码篇  实现客户端组件",
    },
    {
      text: "70-源码篇  手写 React SSR",
      link: "/nextjs/70-源码篇  手写 React SSR",
    },
    {
      text: "71-源码篇  实现 Server Actions",
      link: "/nextjs/71-源码篇  实现 Server Actions",
    },
    {
      text: "71-源码篇  手写 React SSG 和 ISR",
      link: "/nextjs/71-源码篇  手写 React SSG 和 ISR",
    },
    {
      text: "71-面试篇  五千字的面试技巧分享",
      link: "/nextjs/71-面试篇  五千字的面试技巧分享",
    },
    {
      text: "72-源码篇  实现客户端组件",
      link: "/nextjs/72-源码篇  实现客户端组件",
    },
    {
      text: "72-源码篇  手写 RSC（上）",
      link: "/nextjs/72-源码篇  手写 RSC（上）",
    },
    {
      text: "72-面试篇   常见面试题及解析（1）",
      link: "/nextjs/72-面试篇   常见面试题及解析（1）",
    },
    {
      text: "73-源码篇  手写 RSC（下）",
      link: "/nextjs/73-源码篇  手写 RSC（下）",
    },
    {
      text: "73-面试篇   常见面试题及解析（2）",
      link: "/nextjs/73-面试篇   常见面试题及解析（2）",
    },
    {
      text: "73-面试篇  五千字的面试技巧分享",
      link: "/nextjs/73-面试篇  五千字的面试技巧分享",
    },
    {
      text: "74-源码篇  RSC 实现原理",
      link: "/nextjs/74-源码篇  RSC 实现原理",
    },
    {
      text: "74-番外篇  拓展阅读",
      link: "/nextjs/74-番外篇  拓展阅读",
    },
    {
      text: "74-面试篇   常见面试题及解析（1）",
      link: "/nextjs/74-面试篇   常见面试题及解析（1）",
    },
    {
      text: "75-源码篇  实现 Streaming",
      link: "/nextjs/75-源码篇  实现 Streaming",
    },
    {
      text: "75-面试篇   常见面试题及解析（2）",
      link: "/nextjs/75-面试篇   常见面试题及解析（2）",
    },
    {
      text: "76-源码篇  实现 Server Actions",
      link: "/nextjs/76-源码篇  实现 Server Actions",
    },
    {
      text: "76-番外篇  拓展阅读",
      link: "/nextjs/76-番外篇  拓展阅读",
    },
    {
      text: "77-源码篇  实现客户端组件",
      link: "/nextjs/77-源码篇  实现客户端组件",
    },
    {
      text: "78-面试篇  五千字的面试技巧分享",
      link: "/nextjs/78-面试篇  五千字的面试技巧分享",
    },
    {
      text: "79-面试篇   常见面试题及解析（1）",
      link: "/nextjs/79-面试篇   常见面试题及解析（1）",
    },
    {
      text: "80-面试篇   常见面试题及解析（2）",
      link: "/nextjs/80-面试篇   常见面试题及解析（2）",
    },
    {
      text: "81-番外篇  拓展阅读",
      link: "/nextjs/81-番外篇  拓展阅读",
    },
  ],
  "/webGL/": [
    {
      text: "three.js",
      collapsed: false,
      items: [
        { text: "简介", link: "/webGL/three/intro" },
        { text: "入门指南", link: "/webGL/three/getting-started" },
        {
          text: "核心",
          collapsed: true,
          items: [
            {
              text: "BufferAttribute",
              link: "/webGL/three/core/BufferAttribute",
            },
            {
              text: "BufferGeometry",
              link: "/webGL/three/core/BufferGeometry",
            },
            {
              text: "Object3D",
              link: "/webGL/three/core/Object3D",
            },
            {
              text: "Clock",
              link: "/webGL/three/core/Clock",
            },
            {
              text: "EventDispatcher",
              link: "/webGL/three/core/EventDispatcher",
            },
            {
              text: "Uniform",
              link: "/webGL/three/core/Uniform",
            },
          ],
        },
        {
          text: "灯光",
          collapsed: true,
          items: [
            {
              text: "Light",
              link: "/webGL/three/lights/Light",
            },
            {
              text: "AmbientLight",
              link: "/webGL/three/lights/AmbientLight",
            },
            {
              text: "DirectionalLight",
              link: "/webGL/three/lights/DirectionalLight",
            },
            {
              text: "HemisphereLight",
              link: "/webGL/three/lights/HemisphereLight",
            },
            {
              text: "LightProbe",
              link: "/webGL/three/lights/LightProbe",
            },
            {
              text: "PointLight",
              link: "/webGL/three/lights/PointLight",
            },
            {
              text: "RectAreaLight",
              link: "/webGL/three/lights/RectAreaLight",
            },
            {
              text: "SpotLight",
              link: "/webGL/three/lights/SpotLight",
            },
          ],
        },
        {
          text: "灯光/阴影",
          collapsed: true,
          items: [
            {
              text: "LightShadow",
              link: "/webGL/three/lights/shadows/LightShadow",
            },
            {
              text: "PointLightShadow",
              link: "/webGL/three/lights/shadows/PointLightShadow",
            },
            {
              text: "DirectionalLightShadow",
              link: "/webGL/three/lights/shadows/DirectionalLightShadow",
            },
            {
              text: "SpotLightShadow",
              link: "/webGL/three/lights/shadows/SpotLightShadow",
            },
          ],
        },
        {
          text: "摄像机",
          collapsed: true,
          items: [
            {
              text: "Camera",
              link: "/webGL/three/cameras/Camera",
            },
            {
              text: "ArrayCamera",
              link: "/webGL/three/cameras/ArrayCamera",
            },
            {
              text: "CubeCamera",
              link: "/webGL/three/cameras/CubeCamera",
            },
            {
              text: "OrthographicCamera",
              link: "/webGL/three/cameras/OrthographicCamera",
            },
            {
              text: "PerspectiveCamera",
              link: "/webGL/three/cameras/PerspectiveCamera",
            },
            {
              text: "StereoCamera",
              link: "/webGL/three/cameras/StereoCamera",
            },
          ],
        },
        {
          text: "几何体",
          collapsed: true,
          items: [
            {
              text: "BoxGeometry",
              link: "/webGL/three/geometries/BoxGeometry",
            },
            {
              text: "CapsuleGeometry",
              link: "/webGL/three/geometries/CapsuleGeometry",
            },
            {
              text: "CircleGeometry",
              link: "/webGL/three/geometries/CircleGeometry",
            },
            {
              text: "ConeGeometry",
              link: "/webGL/three/geometries/ConeGeometry",
            },
            {
              text: "CylinderGeometry",
              link: "/webGL/three/geometries/CylinderGeometry",
            },
            {
              text: "DodecahedronGeometry",
              link: "/webGL/three/geometries/DodecahedronGeometry",
            },
            {
              text: "EdgesGeometry",
              link: "/webGL/three/geometries/EdgesGeometry",
            },
            {
              text: "ExtrudeGeometry",
              link: "/webGL/three/geometries/ExtrudeGeometry",
            },
            {
              text: "IcosahedronGeometry",
              link: "/webGL/three/geometries/IcosahedronGeometry",
            },
            {
              text: "LatheGeometry",
              link: "/webGL/three/geometries/LatheGeometry",
            },
            {
              text: "OctahedronGeometry",
              link: "/webGL/three/geometries/OctahedronGeometry",
            },
            {
              text: "PlaneGeometry",
              link: "/webGL/three/geometries/PlaneGeometry",
            },
            {
              text: "PolyhedronGeometry",
              link: "/webGL/three/geometries/PolyhedronGeometry",
            },
            {
              text: "RingGeometry",
              link: "/webGL/three/geometries/RingGeometry",
            },
            {
              text: "ShapeGeometry",
              link: "/webGL/three/geometries/ShapeGeometry",
            },
            {
              text: "SphereGeometry",
              link: "/webGL/three/geometries/SphereGeometry",
            },
            {
              text: "TetrahedronGeometry",
              link: "/webGL/three/geometries/TetrahedronGeometry",
            },
            {
              text: "TorusGeometry",
              link: "/webGL/three/geometries/TorusGeometry",
            },
            {
              text: "TorusKnotGeometry",
              link: "/webGL/three/geometries/TorusKnotGeometry",
            },
            {
              text: "TubeGeometry",
              link: "/webGL/three/geometries/TubeGeometry",
            },
            {
              text: "WireframeGeometry",
              link: "/webGL/three/geometries/WireframeGeometry",
            },
          ],
        },
        {
          text: "加载器",
          collapsed: true,
          items: [
            { text: "Loader", link: "/webGL/three/loaders/Loader" },
            {
              text: "TextureLoader",
              link: "/webGL/three/loaders/TextureLoader",
            },
            { text: "GLTFLoader", link: "/webGL/three/loaders/GLTFLoader" },
          ],
        },
        {
          text: "材质",
          collapsed: true,
          items: [
            { text: "Material", link: "/webGL/three/materials/Material" },
            {
              text: "LineBasicMaterial",
              link: "/webGL/three/materials/LineBasicMaterial",
            },
            {
              text: "LineDashedMaterial",
              link: "/webGL/three/materials/LineDashedMaterial",
            },
            {
              text: "MeshBasicMaterial",
              link: "/webGL/three/materials/MeshBasicMaterial",
            },
            {
              text: "MeshDepthMaterial",
              link: "/webGL/three/materials/MeshDepthMaterial",
            },
            {
              text: "MeshDistanceMaterial",
              link: "/webGL/three/materials/MeshDistanceMaterial",
            },
            {
              text: "MeshLambertMaterial",
              link: "/webGL/three/materials/MeshLambertMaterial",
            },
            {
              text: "MeshNormalMaterial",
              link: "/webGL/three/materials/MeshNormalMaterial",
            },
            {
              text: "MeshPhongMaterial",
              link: "/webGL/three/materials/MeshPhongMaterial",
            },
            {
              text: "PointsMaterial",
              link: "/webGL/three/materials/PointsMaterial",
            },
            {
              text: "RawShaderMaterial",
              link: "/webGL/three/materials/RawShaderMaterial",
            },
            {
              text: "ShaderMaterial",
              link: "/webGL/three/materials/ShaderMaterial",
            },
            {
              text: "ShadowMaterial",
              link: "/webGL/three/materials/ShadowMaterial",
            },
            {
              text: "SpriteMaterial",
              link: "/webGL/three/materials/SpriteMaterial",
            },
          ],
        },
      ],
    },
  ],
  "/life/": [
    {
      text: "Life",
      collapsed: false,
      items: [{ text: "资本主义的本质", link: "/life/capitalism" }],
    },
  ],
  "/NCRE/": [
    {
      text: "选择题",
      link: "/NCRE/MCQ/",
    },
    {
      text: "案例分析",
      link: "/NCRE/CAQ/",
    },
    {
      text: "论文",
      link: "/NCRE/ESSAY/",
    },
  ],
};
