<template><div><p>Nagram是一个基于NekoX并进行了一些修改的第三方Telegram客户端。拥有强大的功能且在 <a href="https://github.com/NextAlone/Nagram" target="_blank" rel="noopener noreferrer">GitHub</a> 上开源。</p>
<p><strong>Nagram下载方式</strong>：<a href="https://github.com/NextAlone/Nagram/releases" target="_blank" rel="noopener noreferrer">GitHub</a> / <a href="https://t.me/nagram_channel" target="_blank" rel="noopener noreferrer">Telegram Channel</a></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>以下介绍的各项功能设置均在<code v-pre>设置</code>-&gt;<code v-pre>N-设置</code>中。</p>
<p>由于Nagram自定义设置条目较多，本文篇幅有限，一些通俗易懂和不常用的条目在此省略。</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>以下各项目中的“直达”按钮仅在Nagram内有效，使用外部浏览器或其他应用无法打开。您可以复制链接到Nagram应用中打开。</p>
</div>
<h2 id="通用" tabindex="-1"><a class="header-anchor" href="#通用"><span>通用</span></a></h2>
<h3 id="翻译" tabindex="-1"><a class="header-anchor" href="#翻译"><span>翻译 <a href="https://t.me/nasettings/general?r=TranslationProvider" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/general1.jpg" alt="na-general1.jpg" tabindex="0" loading="lazy"><figcaption>na-general1.jpg</figcaption></figure>
</details>
<ul>
<li>
<p><strong>翻译源</strong>：Google翻译<Badge text="推荐" type="tip" vertical="top" />、Google中文翻译、Yandex翻译、彩云小译、微软翻译、有道翻译、DeepL翻译、Telegram API、腾讯交互翻译</p>
</li>
<li>
<p>目标翻译语言：将其他人的消息翻译成什么语言。</p>
</li>
<li>
<p>输入翻译目标语言：将你输入的消息翻译成什么语言。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>输入翻译使用方法：输入消息后点击输入框右侧的三个点，选择<code v-pre>翻译</code>。</p>
</div>
</li>
<li>
<p>Google Cloud翻译秘钥：设置后，将调用云翻译API，翻译更快速、稳定且节省流量。</p>
</li>
<li>
<p>翻译后隐藏原文：若关闭，你将会同时看到消息的原文和译文，中间用<code v-pre>-------</code>分隔开。</p>
</li>
</ul>
<h3 id="文件夹-对话分组" tabindex="-1"><a class="header-anchor" href="#文件夹-对话分组"><span>文件夹（对话分组） <a href="https://t.me/nasettings/general?r=HideAllTab" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/general2.jpg" alt="na-general2.jpg" tabindex="0" loading="lazy"><figcaption>na-general2.jpg</figcaption></figure>
</details>
<ul>
<li>隐藏“全部对话”：开启后，将不再显示“全部对话”分组。你可以在主页按“返回”按钮打开“全部对话”。</li>
<li>下拉打开已归档对话：将“已归档对话”隐藏在列表顶部，通过下拉打开。</li>
<li>忽略文件夹标签中静音的未读计数：文件夹未读对话数量仅显示置顶对话和开启通知的对话。</li>
<li>忽略文件夹标签上的未读计数：压根不显示文件夹未读对话数量。</li>
<li>在标签栏上显示：<code v-pre>标题</code>/<code v-pre>图标</code>/<code v-pre>图标和标题</code></li>
<li>隐藏文件夹中的“全部取消静音”：长按文件夹标签时不再显示<code v-pre>全部静音</code>和<code v-pre>全部取消静音</code>选项。</li>
</ul>
<h3 id="外观" tabindex="-1"><a class="header-anchor" href="#外观"><span>外观 <a href="https://t.me/nasettings/general?r=TypefaceUseDefault" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/general3.jpg" alt="na-general3.jpg" tabindex="0" loading="lazy"><figcaption>na-general3.jpg</figcaption></figure>
</details>
<ul>
<li>一直显示圣诞帽：在主界面标题（”Nagram“）显示圣诞帽，重启应用生效。</li>
<li>一直显示下载管理器：在主界面右上角（搜索旁边）一直显示下载按钮，而不是有下载时才显示。</li>
<li>标题栏装饰、图标装饰、聊天框装饰：是否显示节日装饰，默认是<code v-pre>基于日期</code></li>
<li>通知图标样式：<code v-pre>官方</code>/<code v-pre>Nagram</code><Badge text="默认" type="tip" vertical="top" />/<code v-pre>Nekogram</code></li>
</ul>
<h3 id="隐私" tabindex="-1"><a class="header-anchor" href="#隐私"><span>隐私 <a href="https://t.me/nasettings/general?r=DisableSystemAccount" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<ul>
<li>禁用系统账户：在<strong>手机系统设置</strong>的“用户与账号”中（不同系统名称可能不同）不显示Nagram账号信息，防止其他应用读取。</li>
<li>禁用分享我的手机号码：添加联系人时取消勾选“分享手机号码”</li>
<li>禁用修改手机号码的建议：不再在设置中显示“xxx还是你的手机号吗”通知</li>
<li>禁用官方网页自动登录：打开网页时不传递账号登录信息</li>
</ul>
<h3 id="通用-1" tabindex="-1"><a class="header-anchor" href="#通用-1"><span>通用 <a href="https://t.me/nasettings/general?r=CustomTitle" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/general4.jpg" alt="na-general4.jpg" tabindex="0" loading="lazy"><figcaption>na-general4.jpg</figcaption></figure>
</details>
<ul>
<li>自定义标题：自定义主界面顶部的标题</li>
<li>自定义存储路径：修改文件的下载路径</li>
<li>禁用五秒内后悔：执行操作（例如删除对话）时，不再显示“撤销”提示。</li>
<li>在个人资料中显示ID/DC：是否显示用户ID和所在数据中心</li>
<li>启用应用内相机：拍摄照片使用应用内相机还是系统相机</li>
<li>禁用数字舍入：开启后，频道/群组的成员数将显示精确数字，而不是大概数量。</li>
</ul>
<h2 id="聊天" tabindex="-1"><a class="header-anchor" href="#聊天"><span>聊天</span></a></h2>
<h3 id="聊天-1" tabindex="-1"><a class="header-anchor" href="#聊天-1"><span>聊天 <a href="https://t.me/nasettings/chat?r=EmojiSet" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat1.jpg" alt="na-chat1.jpg" tabindex="0" loading="lazy"><figcaption>na-chat1.jpg</figcaption></figure>
</details>
<ul>
<li>
<p>Emoji包：自定义显示的表情包，支持导入ttf文件，仅本地生效。</p>
</li>
<li>
<p>以秒为单位显示时间戳：消息时间戳精确到秒（正常是精确到分钟）</p>
</li>
<li>
<p>标记频道匿名身份别名：在别人用频道发言的右上角标记别名，以和正常用户发言区分。</p>
</li>
<li>
<p>消息菜单：设置轻点消息时显示的菜单</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat2.jpg" alt="na-chat2.jpg" tabindex="0" loading="lazy"><figcaption>na-chat2.jpg</figcaption></figure>
</details>
</li>
<li>
<p>默认删除菜单：设置管理员删除成员时默认的操作菜单</p>
</li>
<li>
<p>禁用对话导航栏按钮：设置长按选中消息时，哪些按钮不显示在操作栏中</p>
</li>
<li>
<p>显示服务消息时间：为所有服务消息（加入/退出提示，近期操作等）显示时间戳</p>
</li>
<li>
<p>显示转发消息日期：显示被转发的消息原先的发出时间</p>
</li>
<li>
<p>总是保存聊天记录的偏移量：离开对话后重新打开仍保持原先的阅读进度</p>
</li>
<li>
<p>文本样式：设置在输入框选中文本后可以进行的样式编辑操作</p>
</li>
<li>
<p>显示用户最近在线状态：在群组聊天时，每个成员的右下角显示一个在线状态</p>
</li>
<li>
<p>着色管理员头衔：使管理员头衔更明显</p>
</li>
</ul>
<h3 id="交互" tabindex="-1"><a class="header-anchor" href="#交互"><span>交互 <a href="https://t.me/nasettings/chat?r=HideKeyboardOnChatScroll" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat3.jpg" alt="na-chat3.jpg" tabindex="0" loading="lazy"><figcaption>na-chat3.jpg</figcaption></figure>
</details>
<ul>
<li>
<p>禁用相机即时预览：选择图片时是否开启即时相机预览</p>
</li>
<li>
<p>禁用趋势推荐：您可以在此处禁用一些TG内的一些通知和功能。例如Premium升级通知（在对话列表顶部推荐你订阅Premium的通知）等。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat4.jpg" alt="na-chat4.jpg" tabindex="0" loading="lazy"><figcaption>na-chat4.jpg</figcaption></figure>
</details>
</li>
<li>
<p>禁用点按切换图片/头像：点按图片左右侧将不再切换到上/下一张图片。</p>
</li>
<li>
<p>隐藏消息已读提示：隐藏群组内点击“已读回执”时下方的”已读信息仅保留7天“提示</p>
</li>
<li>
<p>使用群组名称作为输入框提示：将输入框占位符（placeholder）显示为当前群组名称。</p>
</li>
<li>
<p>隐藏输入框中的机器人按钮：输入框右侧不再显示“/”（召唤机器人命令的按钮）</p>
</li>
<li>
<p>禁用点击指令文本发送：点击其他人发送的机器人命令时不会发送消息，防止误触</p>
</li>
</ul>
<h3 id="贴纸" tabindex="-1"><a class="header-anchor" href="#贴纸"><span>贴纸 <a href="https://t.me/nasettings/chat?r=DontSendGreetingSticker" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/chat5.jpg" alt="na-chat5.jpg" tabindex="0" loading="lazy"><figcaption>na-chat5.jpg</figcaption></figure>
</details>
<ul>
<li>
<p>不要发送问候贴纸：禁用打开新聊天时点击发送问候贴纸的功能</p>
</li>
<li>
<p>隐藏贴纸发送时间：隐藏贴纸右下角的时间信息，同时也会隐藏已读标识</p>
</li>
<li>
<p>真正的隐藏贴纸发送时间：隐藏贴纸右下角的时间信息，您仍可以看到已读标识</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>以上两个条目只是在你的设备上不显示贴纸的发送时间，而不是从服务器上隐藏。同时你的在线行为（比如已读回执）也会被正常记录。</p>
</div>
</li>
</ul>
<h3 id="操作确认" tabindex="-1"><a class="header-anchor" href="#操作确认"><span>操作确认 <a href="https://t.me/nasettings/chat?r=AskBeforeCalling" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h3>
<ul>
<li>呼叫前确认</li>
<li>跳过打开链接确认</li>
<li>发送视频/语音留言前确认</li>
<li>复读前确认</li>
</ul>
<h2 id="实验性功能" tabindex="-1"><a class="header-anchor" href="#实验性功能"><span>实验性功能 <a href="https://t.me/nasettings/experimental?r=channelAlias" target="_blank" rel="noopener noreferrer"><Badge text="直达" vertical="middle" /></a></span></a></h2>
<details class="hint-container details"><summary>界面截图</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki/images/na/experimental.jpg" alt="na-experimental.jpg" tabindex="0" loading="lazy"><figcaption>na-experimental.jpg</figcaption></figure>
</details>
<ul>
<li>频道别名：您可以为每个频道标记别名（频道信息右上角三个点-&gt;<code v-pre>标记别名</code>），本地生效。</li>
<li>伪装高性能设备：让服务器认为当前设备是高性能设备</li>
<li>隐藏代理赞助商频道：使用内置代理时，隐藏对话列表顶部的赞助商广告。</li>
<li>外部贴纸缓存：与其他应用共享贴纸包</li>
<li>Pangu化：发送（或接收）消息时，在中文等全角语言和英文等半角语言中间插入空格，使消息更具可读性。</li>
</ul>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2>
<ul>
<li>Nagram支持最多登录8个账号（大会员可以登录10个）。</li>
<li>联系人列表支持显示是否是双向联系人。</li>
<li>全局搜索-&gt;点击搜索框右侧二维码图标，可以使用扫一扫功能，直接扫描其他用户分享的二维码。</li>
<li>长按全局搜索图标，打开收藏夹。</li>
<li>长按主界面左上角三个横线，显示最近的对话。</li>
<li>在设置主页面点击右上角搜索图标，可以搜索Nagram自定义设置条目。</li>
</ul>
</div></template>


