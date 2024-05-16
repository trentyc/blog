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
      text: "webGL",
      collapsed: false,
      items: [{ text: "基础知识", link: "/webGL/" }],
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
