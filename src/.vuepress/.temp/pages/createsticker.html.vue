<template><div><p>贴纸类似于微信中的表情包，Telegram支持多种多样的贴纸。</p>
<p><strong>Telegram的贴纸管理机器人是 <a href="https://t.me/Stickers" target="_blank" rel="noopener noreferrer">@Stickers</a> 。</strong></p>
<h2 id="创建静态贴纸" tabindex="-1"><a class="header-anchor" href="#创建静态贴纸"><span>创建静态贴纸</span></a></h2>
<ol>
<li>
<p>发送 <code v-pre>/newpack</code> 命令，等待机器人回应后发送你想要的贴纸名称，创建一个贴纸集合的名字（支持中文）。</p>
</li>
<li>
<p>上传图片</p>
<p>图片格式要求：<code v-pre>512px</code>*<code v-pre>512px</code>（一边达到512px即可），支持png和webp格式，最大支持<code v-pre>512px</code></p>
<p>可使用Ps（Photoshop）修改格式，如果图片过多，可以使用ps的批处理工具，先录制动作，再进行批处理一次解决全部图片的适配问题，事半功倍。</p>
<details class="hint-container details"><summary>附：批处理教程</summary>
<ol>
<li>将想要修改的图片全部放在一个本地文件夹里面。</li>
<li>使用Ps打开图片。</li>
<li>点击<code v-pre>窗口</code>-<code v-pre>动作</code>，创建新的动作，设置动作名称。</li>
<li><code v-pre>图选</code>-&gt;<code v-pre>图选大小</code>，设置 <code v-pre>512px</code> <code v-pre>512px</code>，点击确定。如果图片内存过大，可以在调整图像大小的时候降低分辨率，控制在<code v-pre>512kb</code>以下。</li>
<li>点击<code v-pre>文件</code>-&gt;<code v-pre>自动</code>-&gt;<code v-pre>批处理</code>，动作选择你刚刚录制的动作  源 选择文件夹 选择你存放图片的文件夹。点击确定，开始进行批量处理。等待全部处理过程，结束。</li>
</ol>
</details>
</li>
<li>
<p>发送图片给机器人，未压缩图片。 然后发送emoji表情，将表情和图片进行关联。</p>
<p>重复进行操作，直至上传完成所有的。 发送 <code v-pre>/publish</code> 命令结束上传。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/createsticker1.jpg" alt="tfa-createsticker1.jpg" tabindex="0" loading="lazy"><figcaption>tfa-createsticker1.jpg</figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/createsticker2.jpg" alt="tfa-createsticker2.jpg" tabindex="0" loading="lazy"><figcaption>tfa-createsticker2.jpg</figcaption></figure>
</details>
</li>
<li>
<p>为贴图集设置图标。Telegram应用程序会将其显示在贴纸面板的贴纸列表中。</p>
<p>要设置图标，请发送带有透明层的PNG或WEBP格式的<code v-pre>100</code>x<code v-pre>100</code>方形图像。</p>
<p>您可以跳过此步骤，应用将使用包的第一个贴纸作为其图标。跳过发送 <code v-pre>/skip</code></p>
</li>
<li>
<p>为你的贴纸创建分享地址。设置成功后你可以通过此地址将贴纸分享给别人。</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此机器人还可以在后续对贴纸进行修改，可以添加，修改，删除，排序，还可以查看贴纸的每日使用人数，命令都有详细说明，可以认真探索以下。</p>
</div>
<h2 id="创建动态贴纸" tabindex="-1"><a class="header-anchor" href="#创建动态贴纸"><span>创建动态贴纸</span></a></h2>
<p>动态贴纸的创作比较复杂，目前只给出了通过命令 <code v-pre>/newvideo</code> 创建的动态视频贴纸</p>
<ul>
<li>对于贴纸，一面的大小必须正好是 512 像素——另一面可以是 512 像素或更小。</li>
<li>对于表情符号，视频的大小<strong>必须正好是<code v-pre>100</code>x<code v-pre>100</code>像素</strong></li>
<li>视频时长不得超过 <code v-pre>3</code>秒。</li>
<li>帧速率最高可达 <code v-pre>30</code>FPS。</li>
<li>视频应循环播放以获得最佳用户体验。</li>
<li>视频大小不应超过<code v-pre>256</code>KB。</li>
<li>视频必须为使用 <strong>VP9 编解码器</strong>编码的WEBM格式。</li>
<li>视频必须没有音频流。</li>
</ul>
<p>目前通过在线网站可以将gif转成webm格式，如果gif是透明背景，那么转换城的webm格式的表情也是透明背景，在线网站地址：<a href="https://cdkm.com/cn/gif-to-webm" target="_blank" rel="noopener noreferrer">GIF转WEBM</a></p>
<p>在转换的时候设置转换项-&gt;<code v-pre>视频尺寸</code>-&gt;<code v-pre>自定义</code>，设置成<code v-pre>512px</code> <code v-pre>512px</code>，进行转换完成后，下载下来。</p>
<p>上传过程同上描述。先创建动态贴纸名称，上传，对应emoji表情，上传完成设置贴纸地址即可分享使用。</p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2>
<p>您也可以使用下面的第三方Telegram机器人，更方便地创建贴纸包：</p>
<ul>
<li><a href="https://t.me/fStikBot" target="_blank" rel="noopener noreferrer">@fStikBot</a></li>
<li><a href="https://t.me/WuMingv2Bot" target="_blank" rel="noopener noreferrer">@WuMingv2Bot</a></li>
<li><a href="https://t.me/KyStkrBot" target="_blank" rel="noopener noreferrer">@KyStkrBot</a></li>
</ul>
</div></template>


