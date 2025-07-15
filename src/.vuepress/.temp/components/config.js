import { hasGlobalComponent } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_bjqyyjgq2rmyrjo4y7jz6pu2rm/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.90_sass@1.89.2_vuepress@2.0.0-rc.23_@vuepress+bundler-vit_yhauh6ekdcduvgdtdhmhyvsesq/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.90_sass@1.89.2_vuepress@2.0.0-rc.23_@vuepress+bundler-vit_yhauh6ekdcduvgdtdhmhyvsesq/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_bjqyyjgq2rmyrjo4y7jz6pu2rm/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
