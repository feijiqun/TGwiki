<template><div><p>Telegram小程序（迷你应用程序）不仅仅是一个简单的工具，而且是一个可以替代普通网站的强大平台。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>本知识库完成了Telegram小程序的初步适配，您可以打开 <a href="https://t.me/TGwikiAppBot/tgwiki" target="_blank" rel="noopener noreferrer">@TGwikiAppBot</a> 进行体验。</p>
</div>
<h2 id="功能和特性" tabindex="-1"><a class="header-anchor" href="#功能和特性"><span>功能和特性</span></a></h2>
<p>以下是一些主要功能：</p>
<ul>
<li>灵活的界面：开发者可以使用JavaScript创建无限灵活的前端应用，直接在Telegram内启动小程序。</li>
<li>无缝授权：小程序支持无缝授权，用户可以方便地登录和使用。</li>
<li>集成支付：支持20多家支付提供商，包括Google Pay和Apple Pay，方便用户进行支付。</li>
<li>推送通知：小程序可以向用户发送定制的推送通知，保持用户的参与度。</li>
<li>多种启动方式：小程序可以通过键盘按钮、内联按钮、机器人菜单按钮、内联模式、直接链接和附件菜单启动。</li>
<li>与区块链交互：小程序可以与区块链和智能合约直接交互，提高账户安全性。</li>
</ul>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/miniapp1.jpg" alt="tfa-miniapp1.jpg" tabindex="0" loading="lazy"><figcaption>tfa-miniapp1.jpg</figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/miniapp2.jpg" alt="tfa-miniapp2.jpg" tabindex="0" loading="lazy"><figcaption>tfa-miniapp2.jpg</figcaption></figure>
</details>
<h2 id="创建小程序" tabindex="-1"><a class="header-anchor" href="#创建小程序"><span>创建小程序</span></a></h2>
<ol>
<li>
<p>创建机器人：按照 <RouteLink to="/createrobot.html">教程</RouteLink> 创建一个机器人。</p>
</li>
<li>
<p>私聊 <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer">@BotFather</a> ，点击<code v-pre>Menu</code>（菜单）-&gt; 点击 <code v-pre>/mybots</code>（我的机器人）-&gt;选择机器人-&gt;点击<code v-pre>Bot Settings</code>-&gt;点击<code v-pre>Configure Mini App</code>-&gt;<code v-pre>Enable Mini App</code></p>
</li>
<li>
<p>发送<code v-pre>/newapp</code>命令。选择你想要创建小程序的机器人。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/miniapp3.jpg" alt="tfa-miniapp3.jpg" tabindex="0" loading="lazy"><figcaption>tfa-miniapp3.jpg</figcaption></figure>
</details>
</li>
<li>
<p>为你的小程序提供一个标题、简短的描述和一张图片（尺寸必须为<code v-pre>640</code>x<code v-pre>360</code>）。上传预览GIF（发送<code v-pre>/empty</code>跳过）。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/miniapp4.jpg" alt="tfa-miniapp4.jpg" tabindex="0" loading="lazy"><figcaption>tfa-miniapp4.jpg</figcaption></figure>
</details>
</li>
<li>
<p>设置小程序打开时显示的URL。设置一个小程序短后缀（<code v-pre>3</code>~<code v-pre>30</code>字符），用户将可以使用<code v-pre>t.me/your_robot/short_name</code>链接直接打开小程序。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/miniapp5.jpg" alt="tfa-miniapp5.jpg" tabindex="0" loading="lazy"><figcaption>tfa-miniapp5.jpg</figcaption></figure>
</details>
</li>
<li>
<p>配置服务器并开发小程序</p>
<p>Telegram小程序支持丰富的前端功能，可以与用户进行交互。</p>
<p>你可以使用Telegram提供的Web App API来与Telegram进行交互，例如发送和接收消息。</p>
</li>
</ol>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>有关Telegram小程序开发的详细内容（代码细则，支持的API，用户交互等），请参阅 <a href="https://core.telegram.org/bots/webapps" target="_blank" rel="noopener noreferrer">Telegram Mini Apps官方文档</a> 。</p>
</div>
</div></template>


