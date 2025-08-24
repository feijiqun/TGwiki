<template><div><p>Telegram在2025年4月推出了账号冻结。当Telegram官方认为你违反了服务协议时，便会冻结你的账号。此举为防止大量封禁账号导致误封。</p>
<h2 id="冻结特征" tabindex="-1"><a class="header-anchor" href="#冻结特征"><span>冻结特征</span></a></h2>
<ul>
<li>冻结后账号将处于“只读”模式，可以正常登录，但无法执行任何操作。</li>
<li>仅自己可以看到个人信息，其他用户看到的是“❄️已注销账号”（雪花表示冻结状态）。</li>
<li>发消息被举报、大多数封控情形均会导致账号被冻结。</li>
<li>账号冻结2周后会自动注销，同时账号状态转变为 <RouteLink to="/banned.html">封禁</RouteLink> 。</li>
</ul>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/frozen1.jpg" alt="tfa-frozen1.jpg" tabindex="0" loading="lazy"><figcaption>tfa-frozen1.jpg</figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/frozen2.jpg" alt="tfa-frozen2.jpg" tabindex="0" loading="lazy"><figcaption>tfa-frozen2.jpg</figcaption></figure>
</details>
<h2 id="申诉步骤" tabindex="-1"><a class="header-anchor" href="#申诉步骤"><span>申诉步骤</span></a></h2>
<ol>
<li>
<p>联系官方机器人 <a href="https://t.me/SpamBot" target="_blank" rel="noopener noreferrer">@SpamBot</a> 并发送 <code v-pre>/start</code> 命令。</p>
<p>Bot回复：<code v-pre>Your account was blocked for violations of the Telegram Terms of Service based on user reports confirmed by our moderators.</code>（<code v-pre>经用户举报并由版主确认，您的帐户因违反Telegram服务条款而被封锁</code>）</p>
</li>
<li>
<p>点击输入框下方按钮<code v-pre>This is a mistake</code></p>
<p>Bot回复：<code v-pre>If you think your account was blocked by mistake, you can submit a complaint...</code>（<code v-pre>如果您认为您的帐户被错误封锁，您可以提交投诉</code>）</p>
</li>
<li>
<p>点击输入框下方按钮<code v-pre>Yes</code></p>
<p>Bot回复：<code v-pre>Please write us more details about your case. Why do you think your account was blocked, what went wrong?</code>（<code v-pre>请详细说明您的情况。您认为您的账号被封的原因是什么？出了什么问题？</code>）</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/frozen3.jpg" alt="tfa-frozen3.jpg" tabindex="0" loading="lazy"><figcaption>tfa-frozen3.jpg</figcaption></figure>
</details>
</li>
<li>
<p>输入申诉理由，结合自己情况，态度诚恳些。</p>
<p>参考话术1：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>My account is running well, I don't understand what I did to violate the rules. I subscribed to Telegram Premium this morning, but my account was frozen as soon as the membership arrived. I don't understand why, please help me unfreeze it. My account is very important to me. Thank you.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参考话术2：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>I was just using my account normally. I am sure I has not violated Telegram terms of service, and I promise I will never do so in the future. My account was blocked by accident. It was a mistake! Please help me check it and recover my account. Thanks.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Bot回复：<code v-pre>Please enter your full legal name.</code>（<code v-pre>请输入您的完整法定姓名</code>）</p>
</li>
<li>
<p>输入一个名字（不一定要真名，可以是Telegram昵称，但是看起来要正经些）。</p>
<p>Bot回复：<code v-pre>Please enter your contact email.</code>（<code v-pre>请输入联系邮箱</code>）</p>
</li>
<li>
<p>输入一个可以接收邮件的邮箱。</p>
<p>Bot回复：<code v-pre>Approximately, what year did you sign up for Telegram with this account?</code>（<code v-pre>大约在哪一年，您注册了这个Telegram账号？</code>）</p>
</li>
<li>
<p>输入你注册账号的年份，例如<code v-pre>2023</code>。</p>
<p>Bot回复：<code v-pre>Please provide a brief general description outlining how you discovered Telegram and, if applicable, who invited you to join.</code>（<code v-pre>请提供一份简短的概述，概述您如何发现Telegram，以及（如果适用）谁邀请您加入</code>）</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/frozen4.jpg" alt="tfa-frozen4.jpg" tabindex="0" loading="lazy"><figcaption>tfa-frozen4.jpg</figcaption></figure>
</details>
</li>
<li>
<p>发送以下内容：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>My colleague recommended it to me to use</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Bot回复：<code v-pre>Please briefly describe your average daily use of Telegram — including what you like doing the most on the platform and which features you prefer.</code>（<code v-pre>请简要描述您每天平均使用Telegram的情况——包括您最喜欢在该平台上做什么以及您喜欢哪些功能</code>）</p>
</li>
<li>
<p>输入你平时使用Telegram的情况，可以稍微具体些。</p>
<p>示例：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Work communication, enjoy the Telegram ecosystem</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Bot回复：<code v-pre>By submitting this appeal, you hereby acknowledge and agree that all the information you provided is accurate and truthful...</code>（<code v-pre>提交此申诉，即表示您确认并同意您提供的所有信息均准确真实</code>）</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/frozen5.jpg" alt="tfa-frozen5.jpg" tabindex="0" loading="lazy"><figcaption>tfa-frozen5.jpg</figcaption></figure>
</details>
</li>
<li>
<p>点击输入框下方按钮<code v-pre>Confirm</code></p>
</li>
<li>
<p>完成人机验证，然后点击输入框下方按钮<code v-pre>Done</code></p>
<p>Bot回复：<code v-pre>Thank you! Your appeal has been successfully submitted. Our team’s supervisors will check it as soon as possible.</code>（<code v-pre>谢谢！您的申诉已成功提交。我们团队的主管将尽快审核</code>）</p>
</li>
</ol>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>被冻结的账号一周只能申诉一次。</p>
</div>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2>
<ul>
<li>
<p>Telegram账号冻结后恢复的概率很小，建议想办法导出账号数据</p>
</li>
<li>
<p>您可以尝试应用内申诉的同时，前往 <a href="https://telegram.org/support" target="_blank" rel="noopener noreferrer">支持页面</a> 提交申诉、给官方发送邮件轰炸、联系官方Twitter，增大账号恢复概率。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>以上申诉方式在 <RouteLink to="/banned.html">号码被封禁</RouteLink> 中均有介绍。</p>
</div>
</li>
</ul>
</div></template>


