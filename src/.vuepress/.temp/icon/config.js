import { hasGlobalComponent } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_bjqyyjgq2rmyrjo4y7jz6pu2rm/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vueuse+core@13.3.0_vue@3.5.16/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.108_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vuepress+bundler-_v45hfxkp24qckdbr5cc7eeidgu/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "fontawesome",
            prefix: "",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
}
