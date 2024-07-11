import { defineConfig } from "vitepress";

import { head, nav, sidebar, algolia } from "./configs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  base: "/blog/",
  title: "trentyc's Blog",
  description: "个人博客",
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },

  /* 主题配置 */
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,

    logo: "/logo.png",

    nav,

    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "目录",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/trentyc/blog" }],

    footer: {
      copyright: "Copyright © 2024-present trentyc",
    },

    darkModeSwitchLabel: "外观",

    returnToTopLabel: "返回顶部",

    lastUpdatedText: "上次更新",

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    search: {
      // provider: 'local', // 可以开启本地搜索
      provider: "algolia",
      options: algolia,
    },
  },
});
