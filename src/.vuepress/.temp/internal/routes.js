export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页","icon":"home"} }],
  ["/archive.html", { loader: () => import(/* webpackChunkName: "archive.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/archive.html.js"), meta: {"title":"对话归档"} }],
  ["/banned.html", { loader: () => import(/* webpackChunkName: "banned.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/banned.html.js"), meta: {"title":"号码被封禁"} }],
  ["/boost.html", { loader: () => import(/* webpackChunkName: "boost.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/boost.html.js"), meta: {"title":"频道/群组助推"} }],
  ["/browser.html", { loader: () => import(/* webpackChunkName: "browser.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/browser.html.js"), meta: {"title":"内置浏览器"} }],
  ["/business.html", { loader: () => import(/* webpackChunkName: "business.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/business.html.js"), meta: {"title":"Business"} }],
  ["/comment.html", { loader: () => import(/* webpackChunkName: "comment.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/comment.html.js"), meta: {"title":"评论功能"} }],
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/contact.html.js"), meta: {"title":"联系官方"} }],
  ["/createchannel.html", { loader: () => import(/* webpackChunkName: "createchannel.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/createchannel.html.js"), meta: {"title":"新建频道"} }],
  ["/creategroup.html", { loader: () => import(/* webpackChunkName: "creategroup.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/creategroup.html.js"), meta: {"title":"新建群组"} }],
  ["/createrobot.html", { loader: () => import(/* webpackChunkName: "createrobot.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/createrobot.html.js"), meta: {"title":"创建机器人"} }],
  ["/createsticker.html", { loader: () => import(/* webpackChunkName: "createsticker.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/createsticker.html.js"), meta: {"title":"创建贴纸"} }],
  ["/dc.html", { loader: () => import(/* webpackChunkName: "dc.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/dc.html.js"), meta: {"title":"DC说明"} }],
  ["/deleteaccount.html", { loader: () => import(/* webpackChunkName: "deleteaccount.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/deleteaccount.html.js"), meta: {"title":"删除账号"} }],
  ["/download.html", { loader: () => import(/* webpackChunkName: "download.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/download.html.js"), meta: {"title":"缓存和下载"} }],
  ["/editphoto.html", { loader: () => import(/* webpackChunkName: "editphoto.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/editphoto.html.js"), meta: {"title":"图片排版"} }],
  ["/emaillogin.html", { loader: () => import(/* webpackChunkName: "emaillogin.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/emaillogin.html.js"), meta: {"title":"邮箱登录"} }],
  ["/encrypt.html", { loader: () => import(/* webpackChunkName: "encrypt.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/encrypt.html.js"), meta: {"title":"加密对话"} }],
  ["/faq.html", { loader: () => import(/* webpackChunkName: "faq.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/faq.html.js"), meta: {"title":"常见问题与解答"} }],
  ["/favourite.html", { loader: () => import(/* webpackChunkName: "favourite.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/favourite.html.js"), meta: {"title":"收藏夹"} }],
  ["/findadmin.html", { loader: () => import(/* webpackChunkName: "findadmin.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/findadmin.html.js"), meta: {"title":"找出群管理员"} }],
  ["/folder.html", { loader: () => import(/* webpackChunkName: "folder.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/folder.html.js"), meta: {"title":"对话分组"} }],
  ["/format.html", { loader: () => import(/* webpackChunkName: "format.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/format.html.js"), meta: {"title":"消息格式"} }],
  ["/fragment.html", { loader: () => import(/* webpackChunkName: "fragment.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/fragment.html.js"), meta: {"title":"Fragment"} }],
  ["/frozen.html", { loader: () => import(/* webpackChunkName: "frozen.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/frozen.html.js"), meta: {"title":"账号被冻结"} }],
  ["/guide.html", { loader: () => import(/* webpackChunkName: "guide.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/guide.html.js"), meta: {"title":"文档指南"} }],
  ["/language.html", { loader: () => import(/* webpackChunkName: "language.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/language.html.js"), meta: {"title":"中文语言包"} }],
  ["/limit.html", { loader: () => import(/* webpackChunkName: "limit.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/limit.html.js"), meta: {"title":"Telegram限制"} }],
  ["/livegram.html", { loader: () => import(/* webpackChunkName: "livegram.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/livegram.html.js"), meta: {"title":"私聊机器人搭建"} }],
  ["/managegroup.html", { loader: () => import(/* webpackChunkName: "managegroup.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/managegroup.html.js"), meta: {"title":"管理群组"} }],
  ["/miniapp.html", { loader: () => import(/* webpackChunkName: "miniapp.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/miniapp.html.js"), meta: {"title":"小程序"} }],
  ["/moderation.html", { loader: () => import(/* webpackChunkName: "moderation.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/moderation.html.js"), meta: {"title":"内容审查"} }],
  ["/monetization.html", { loader: () => import(/* webpackChunkName: "monetization.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/monetization.html.js"), meta: {"title":"频道创收"} }],
  ["/multiaccount.html", { loader: () => import(/* webpackChunkName: "multiaccount.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/multiaccount.html.js"), meta: {"title":"添加账号"} }],
  ["/nagram.html", { loader: () => import(/* webpackChunkName: "nagram.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/nagram.html.js"), meta: {"title":"Nagram"} }],
  ["/nearby.html", { loader: () => import(/* webpackChunkName: "nearby.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/nearby.html.js"), meta: {"title":"附近的人和群组"} }],
  ["/notcomesms.html", { loader: () => import(/* webpackChunkName: "notcomesms.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/notcomesms.html.js"), meta: {"title":"未收到验证码"} }],
  ["/poll.html", { loader: () => import(/* webpackChunkName: "poll.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/poll.html.js"), meta: {"title":"创建投票"} }],
  ["/pornios.html", { loader: () => import(/* webpackChunkName: "pornios.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/pornios.html.js"), meta: {"title":"解除敏感内容限制"} }],
  ["/premium.html", { loader: () => import(/* webpackChunkName: "premium.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/premium.html.js"), meta: {"title":"Premium"} }],
  ["/privacy.html", { loader: () => import(/* webpackChunkName: "privacy.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/privacy.html.js"), meta: {"title":"隐私设置"} }],
  ["/proxy.html", { loader: () => import(/* webpackChunkName: "proxy.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/proxy.html.js"), meta: {"title":"代理设置"} }],
  ["/scam.html", { loader: () => import(/* webpackChunkName: "scam.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/scam.html.js"), meta: {"title":"谨防诈骗"} }],
  ["/scan.html", { loader: () => import(/* webpackChunkName: "scan.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/scan.html.js"), meta: {"title":"扫一扫"} }],
  ["/search.html", { loader: () => import(/* webpackChunkName: "search.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/search.html.js"), meta: {"title":"内置搜索"} }],
  ["/shortcut.html", { loader: () => import(/* webpackChunkName: "shortcut.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/shortcut.html.js"), meta: {"title":"快捷键"} }],
  ["/slowmode.html", { loader: () => import(/* webpackChunkName: "slowmode.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/slowmode.html.js"), meta: {"title":"慢速模式"} }],
  ["/spam.html", { loader: () => import(/* webpackChunkName: "spam.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/spam.html.js"), meta: {"title":"解除私聊限制"} }],
  ["/speakaschannel.html", { loader: () => import(/* webpackChunkName: "speakaschannel.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/speakaschannel.html.js"), meta: {"title":"频道身份发言"} }],
  ["/stars.html", { loader: () => import(/* webpackChunkName: "stars.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/stars.html.js"), meta: {"title":"Telegram星币"} }],
  ["/stories.html", { loader: () => import(/* webpackChunkName: "stories.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/stories.html.js"), meta: {"title":"动态功能"} }],
  ["/telegraph.html", { loader: () => import(/* webpackChunkName: "telegraph.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/telegraph.html.js"), meta: {"title":"Telegraph"} }],
  ["/term.html", { loader: () => import(/* webpackChunkName: "term.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/term.html.js"), meta: {"title":"名词解释"} }],
  ["/theme.html", { loader: () => import(/* webpackChunkName: "theme.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/theme.html.js"), meta: {"title":"Telegram主题"} }],
  ["/thirdparty.html", { loader: () => import(/* webpackChunkName: "thirdparty.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/thirdparty.html.js"), meta: {"title":"第三方客户端"} }],
  ["/translate.html", { loader: () => import(/* webpackChunkName: "translate.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/translate.html.js"), meta: {"title":"消息翻译"} }],
  ["/transparency.html", { loader: () => import(/* webpackChunkName: "transparency.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/transparency.html.js"), meta: {"title":"用户数据披露"} }],
  ["/turrit.html", { loader: () => import(/* webpackChunkName: "turrit.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/turrit.html.js"), meta: {"title":"Turrit"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/tom/Documents/project/feijiqun/tgwiki-main/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
