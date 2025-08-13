<template><div><p>部分账号可能会有双向限制，无法直接发起私聊，这时候可能就需要一个私聊机器人。同时，私聊机器人还可以用作投稿，防止垃圾信息骚扰。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>提供双向机器人服务的机器人有很多（均不是Telegram官方），如 <a href="https://t.me/ModularBot" target="_blank" rel="noopener noreferrer">@ModularBot</a> 、<a href="https://t.me/EasyPM_bot" target="_blank" rel="noopener noreferrer">@EasyPM_bot</a> 等。本文以  <a href="https://t.me/LivegramBot" target="_blank" rel="noopener noreferrer">@LivegramBot</a> 为例，其他机器人流程与此相似。</p>
</div>
<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h2>
<ol>
<li>
<p>首先，请先 <RouteLink to="/createrobot.html.html">按照教程</RouteLink> 创建一个机器人。</p>
</li>
<li>
<p>私聊 <a href="https://t.me/LivegramBot" target="_blank" rel="noopener noreferrer">@LivegramBot</a> ，并选择一个语言。</p>
</li>
<li>
<p>点击<code v-pre>Add Bot</code>，机器人提示：<code v-pre>To connect a bot, you should follow these two steps...</code></p>
</li>
<li>
<p>将您的Token发送给机器人（格式：<code v-pre>12345:6789ABCDEF</code>）。</p>
<p>机器人提示：<code v-pre>Success! @xxxbot has been connected. The bot will forward any (including your own) messages sent to it...</code></p>
</li>
<li>
<p>接下来，私聊你的机器人。所有发给私聊机器人的消息（包括你自己的）都会转发给你。</p>
</li>
</ol>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/livegram1.jpg" alt="tfa-livegram1.jpg" tabindex="0" loading="lazy"><figcaption>tfa-livegram1.jpg</figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/livegram2.jpg" alt="tfa-livegram2.jpg" tabindex="0" loading="lazy"><figcaption>tfa-livegram2.jpg</figcaption></figure>
</details>
<h2 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧"><span>使用技巧</span></a></h2>
<ul>
<li>
<p>回复私聊机器人的消息，机器人会自动将您的消息转发给对方</p>
</li>
<li>
<p>您可以使用<code v-pre>/ban</code>或<code v-pre>/unban</code>命令回复消息，来封禁或解封账号</p>
</li>
<li>
<p>你可以在  <a href="https://t.me/LivegramBot" target="_blank" rel="noopener noreferrer">@LivegramBot</a> -&gt;<code v-pre>My Bots</code> 中管理机器人：</p>
<ul>
<li>
<p>Localizations：设置多语言欢迎信息</p>
</li>
<li>
<p>Groups：将私聊消息转发到群组</p>
</li>
<li>
<p>Broadcast：向所有使用者发送广播</p>
</li>
<li>
<p>Statistics：查看机器人统计信息</p>
</li>
<li>
<p>Anonymous Mode</p>
<p><strong>设置步骤</strong>：准备一个开启话题模式的群组，将机器人拉入群组中并授予管理话题权限。</p>
<p><strong>功能</strong>：机器人会为不同用户的私信创建不同的话题，便于管理消息。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>此项设置开启后不可撤销，请谨慎操作。</p>
</div>
</li>
<li>
<p>Disconnect Bot：取消连接机器人</p>
</li>
</ul>
</li>
</ul>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/livegram3.jpg" alt="tfa-livegram3.jpg" tabindex="0" loading="lazy"><figcaption>tfa-livegram3.jpg</figcaption></figure>
</details>
</div></template>


