// .vitepress/theme/index.js
import { watch } from "vue";
import { EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

import { createMediumZoomProvider } from "./composables/useMediumZoom";

import "./styles/index.scss";

let homePageStyle: HTMLStyleElement | undefined;

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router);
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === "/blog/"),
        { immediate: true }
      );
    }
  },
};

if (typeof window !== "undefined") {
  /* 注销 PWA 服务 */
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }

  /* 删除浏览器中的缓存 */
  if ("caches" in window) {
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          return caches.delete(key);
        })
      );
    });
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
