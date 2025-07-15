import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.92_@vuepress+plugin-docsearch@2.0.0-rc.108_@algolia+client-searc_q44znxzbygbhnuuxbpnxditdwq/node_modules/vuepress-theme-hope/lib/client/exports/base.js";

import { defineCatalogInfoGetter } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_6yfdz46ivjxzsxurt6faoflwee/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_bjqyyjgq2rmyrjo4y7jz6pu2rm/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_bjqyyjgq2rmyrjo4y7jz6pu2rm/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_bjqyyjgq2rmyrjo4y7jz6pu2rm/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.92_@vuepress+plugin-docsearch@2.0.0-rc.108_@algolia+client-searc_q44znxzbygbhnuuxbpnxditdwq/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
