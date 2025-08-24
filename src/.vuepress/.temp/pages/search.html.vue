<template><div><h2 id="消息搜索" tabindex="-1"><a class="header-anchor" href="#消息搜索"><span>消息搜索</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Telegram中文搜索体验比较差，以下方法可以助你更快地找到聊天记录和频道信息。</p>
</div>
<ul>
<li>
<p>Telegram的中文搜索是以「词组」为单位的，以标点符号或空格作为词的间隔。</p>
<p><code v-pre>辜鸿铭说过：真正的自由，并不意味着可以随心所欲，而是可以自由地做正确的事情。</code></p>
<p>在搜索框输入：<code v-pre>真正的自由</code>、<code v-pre>并不意味着可以随心所欲</code>、<code v-pre>而是可以自由地做正确的事情</code>都可搜到这条历史信息，因为标点符号充当了分词符。</p>
</li>
<li>
<p>也可以手动添加多余的标点符号（例如井号 <code v-pre>＃</code>）或空格来分词：</p>
<p><code v-pre>#辜鸿铭 说过：真正的 #自由，并不意味着可以随心所欲，而是可以自由地做正确的事情。</code></p>
<p>点击以下词组，或者在搜索框输入：<code v-pre>#辜鸿铭</code>、<code v-pre>#自由</code>都可以找到这句话。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>建议频道主在发布内容的时候，用 <code v-pre>#</code> 打上相应的标签，方便订阅者找到想要的信息。</p>
</div>
</li>
<li>
<p>新版Telegram在点击标签后，可以选择查找范围，包括：<code v-pre>当前对话</code>、<code v-pre>已加对话</code>和<code v-pre>全部对话</code>。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>很多不法分子利用此特性在Telegram上批量发送垃圾信息占用<code v-pre>全部对话</code>中的搜索位置。请勿轻信其中的广告，防止上当受骗！</p>
</div>
</li>
<li>
<p>你也可以在电脑上导出HTML或JSON格式的聊天记录，然后通过其他工具更加便捷地搜索</p>
</li>
</ul>
<h2 id="全局搜索" tabindex="-1"><a class="header-anchor" href="#全局搜索"><span>全局搜索</span></a></h2>
<p>新版Telegram支持按类型（例如：<code v-pre>频道</code>、<code v-pre>媒体</code>、<code v-pre>链接</code>、<code v-pre>小程序</code>等）搜索。</p>
<p><strong>全局搜索技巧：如何按日期搜索？</strong></p>
<ol>
<li>打开在Telegram移动端首页</li>
<li>点击搜索框</li>
<li>输入日期，即可按照日期筛选历史消息：
<ul>
<li><code v-pre>2021</code>：2021年</li>
<li><code v-pre>01</code>.<code v-pre>2021</code> / <code v-pre>Jan 2021</code>：2021年1月</li>
<li><code v-pre>01.13.2021</code>：2021年1月13日</li>
</ul>
</li>
</ol>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/search.jpg" alt="tfa-search.jpg" tabindex="0" loading="lazy"><figcaption>tfa-search.jpg</figcaption></figure>
</details>
</div></template>


