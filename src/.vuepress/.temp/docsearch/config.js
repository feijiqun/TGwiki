
import { DocSearch, injectDocSearchConfig } from "/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-docsearch@2.0.0-rc.108_@algolia+client-search@5.27.0_search-insights@2.15.0__ivzr4xythjsugjhgxs24mwbone/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@docsearch+css@3.9.0/node_modules/@docsearch/css/dist/style.css'
import '/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-docsearch@2.0.0-rc.108_@algolia+client-search@5.27.0_search-insights@2.15.0__ivzr4xythjsugjhgxs24mwbone/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/Users/tom/Documents/project/feijiqun/tgwiki-main/node_modules/.pnpm/@vuepress+plugin-docsearch@2.0.0-rc.108_@algolia+client-search@5.27.0_search-insights@2.15.0__ivzr4xythjsugjhgxs24mwbone/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
