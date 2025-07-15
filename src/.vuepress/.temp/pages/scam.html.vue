<template><div><p>Telegram上有很多诈骗团伙，通常刚接触Telegram的小白很容易中招。我们在这里列举了一些常见的诈骗套路，供大家参考。</p>
<h2 id="账号异常" tabindex="-1"><a class="header-anchor" href="#账号异常"><span>账号异常</span></a></h2>
<p>有人突然通知你账号异常或存在风险，让你去找某个机器人/登录某个网站解除限制。</p>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/scam1.jpg" alt="tfa-scam1.jpg" tabindex="0" loading="lazy"><figcaption>tfa-scam1.jpg</figcaption></figure>
</details>
<div class="hint-container note">
<p class="hint-container-title">骗术解析</p>
<p>骗子通过假的机器人/网站让你提交手机号和登录验证码（或是验证码截图），来达成盗号的目的。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">防骗锦囊</p>
<ol>
<li>如果你的账号有异常情况，官方是不会主动找你的，和你聊天的人也没有通知。一般是直接限制你。所以有别人主动跟你说你的账号被限制了不要轻易相信。</li>
<li>官方解除限制的机器人有且只有一个： <code v-pre>@SpamBot</code> ，其他的都是假冒！</li>
<li>Telegram官网的域名是<code v-pre>telegram.org</code>、<code v-pre>telegram.dog</code>和<code v-pre>t.me</code>，请仔细甄别！</li>
<li>Telegram官方不会使用中文给你发消息！</li>
<li>官方不会管你索要登录验证码，所有管你要验证码的都是骗子！</li>
</ol>
</div>
<h2 id="多签钱包" tabindex="-1"><a class="header-anchor" href="#多签钱包"><span>多签钱包</span></a></h2>
<p>有人宣称“不玩了”，临退出前还惦记着大伙，把自己的助记词发到群里，要把财富分享出来。你一查，发现钱包里真有100U。</p>
<p>当你满心欢喜准备把这笔钱转出来时，却被提示能量不足，缺少TRX。面对近在咫尺的财富，你一咬牙，充了40TRX。可没想到，刚充进去，TRX瞬间就被转走了，那100U也怎么都转不出来。</p>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/scam2.jpg" alt="tfa-scam2.jpg" tabindex="0" loading="lazy"><figcaption>tfa-scam2.jpg</figcaption></figure>
</details>
<div class="hint-container note">
<p class="hint-container-title">骗术解析</p>
<p><code v-pre>多重签名机制</code>是一项重要的安全防护措施。它通过设置阈值和权重来约束特定操作，只有在多个签名方共同确认的情况下，这些操作才能执行。在波场多签机制里，阈值代表需要多少个签名方确认，才能执行特定操作。举个例子，若阈值设定为<code v-pre>2</code>，那么执行特定操作时，至少需要签名方权重大于等于<code v-pre>2</code>的确认。阈值可在多签合约中依据实际需求灵活调整。</p>
<p>权重则是指每个签名方所拥有的权重数值，它决定了每个签名方在多签操作中所占的比例。比如，阈值设置为<code v-pre>2</code>，有两个签名方的权重均为<code v-pre>1</code>，那么执行特定操作时，就必须得到这两个权重为<code v-pre>1</code>的签名方共同确认，操作才能生效。权重的设定同样需在合约中完成，并且所有签名方权重之和必须大于等于总权重要求。</p>
<p>有些骗子故意四处泄露自己的钱包私钥。用户一查链上资产，发现这个地址存有大量数字资产，可唯独缺少对应区块链的<code v-pre>Gas代币</code>，比如波场区块链的TRX，而转账又必须用到TRX作为手续费。很多用户以为自己撞上大运了，天上掉馅饼，有一笔横财等着自己。可一旦向该地址充入TRX当作手续费，满心欢喜准备提币时，却发现根本无法转走，白白损失了手续费。实际上，骗子故意泄露给你的钱包私钥，早就被他们设置了多签，账户的控制权始终牢牢掌握在骗子手中。</p>
</div>
<h2 id="高价购买用户名" tabindex="-1"><a class="header-anchor" href="#高价购买用户名"><span>高价购买用户名</span></a></h2>
<p>有用户找到你，说愿意用2000TON购买你的用户名，在Fragment平台上交易。然后他会给你发一个“看似”是官方的链接，引导你前去交易。</p>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/scam3.jpg" alt="tfa-scam3.jpg" tabindex="0" loading="lazy"><figcaption>tfa-scam3.jpg</figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/tfa/scam4.jpg" alt="tfa-scam4.jpg" tabindex="0" loading="lazy"><figcaption>tfa-scam4.jpg</figcaption></figure>
</details>
<div class="hint-container note">
<p class="hint-container-title">骗术解析</p>
<p>骗子将自己的机器人小程序伪装成官方机器人<code v-pre>@fragment</code>的链接，使用户放松警惕。打开链接后，通常骗子会要求你交纳几十或上百TON作为用户名的“上链手续费”。一旦你交了钱骗子便会跑路。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>天上不会掉馅饼！没有免费的午餐！贪小便宜吃大亏！</p>
</div>
</div></template>


