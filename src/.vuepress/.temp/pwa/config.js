import { h }  from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupPwa, setupViewPoint } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@ty_nvp5lrmfkpt64c5teiplzkto6e/node_modules/@vuepress/plugin-pwa/lib/client/composables/index.js";
import { PwaReadyPopup as _PwaReadyPopup } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@ty_nvp5lrmfkpt64c5teiplzkto6e/node_modules/@vuepress/plugin-pwa/lib/client/components/PwaReadyPopup.js";

import "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@ty_nvp5lrmfkpt64c5teiplzkto6e/node_modules/@vuepress/plugin-pwa/lib/client/styles/vars.css";

const locales = {"/":{"install":"安装","iOSInstall":"点击分享按钮然后点击“添加到主屏幕”","cancel":"取消","close":"关闭","prevImage":"上一张图片","nextImage":"下一张图片","desc":"详情","feature":"主要特色","explain":"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。","hint":"发现新内容可用","update":"新内容已就绪"}};

export default defineClientConfig({
  setup: () => {
    setupPwa("service-worker.js", false);
    setupViewPoint();
  },
  rootComponents: [
    () => h(_PwaReadyPopup, { locales }),
  ],
});
