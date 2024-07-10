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
  ],
  "/webGL/": [
    {
      text: "three.js",
      collapsed: false,
      items: [
        { text: "简介", link: "/webGL/three/intro" },
        { text: "入门指南", link: "/webGL/three/getting-started" },
        { text: "几何体和材质", link: "/webGL/three/geometry-and-materials" },
        { text: "灯光和阴影", link: "/webGL/three/lights-and-shadows" },
        { text: "动画与交互", link: "/webGL/three/animation-and-interaction" },
      ],
    },
  ],
  "/life/": [
    {
      text: "Life",
      collapsed: false,
      items: [{ text: "生活记录", link: "/life/" }],
    },
  ],
};
