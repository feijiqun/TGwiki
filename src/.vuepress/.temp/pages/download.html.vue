<template><div><p>Telegram客户端在使用过程中会自动下载媒体（图片/视频/音频/文件）缓存在设备上，就会大量的占用设备存储空间。</p>
<p>可以在设置中手动和自动清理这部分缓存，但依然有小部分运行App必须用到的数据是不能清理的；清理缓存并不是删除媒体，这些媒体会保留在Telegram云端，需要的时候可以再次下载使用。</p>
<p>Telegram的消息是全平台全客户端自动同步的（除了加密对话)，清理缓存并不会删除消息，删除消息也不是清理缓存的办法。</p>
<h2 id="清理缓存方法" tabindex="-1"><a class="header-anchor" href="#清理缓存方法"><span>清理缓存方法</span></a></h2>
<ul>
<li>
<p>iOS/macOS/Android客户端：<code v-pre>设置</code>-&gt;<code v-pre>数据</code>-&gt;<code v-pre>存储使用</code>-&gt;<code v-pre>清理缓存</code>，可以把<code v-pre>媒体文件保留时间</code>设置短一点，Telegram就会自动清理(3天/1周/1月)之前的缓存，如果选择<code v-pre>永远</code>就不会自动清理；此处也可以设置<code v-pre>最大缓存大小</code>。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/download1.jpg" alt="tfa-download1.jpg" tabindex="0" loading="lazy"><figcaption>tfa-download1.jpg</figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/download2.jpg" alt="tfa-download2.jpg" tabindex="0" loading="lazy"><figcaption>tfa-download2.jpg</figcaption></figure>
</details>
</li>
<li>
<p>Windows/macOS/Linux Desktop 客户端：左上角三短线-&gt;<code v-pre>设置</code>-&gt;<code v-pre>高级</code>-&gt;<code v-pre>缓存管理</code>-&gt;<code v-pre>清理缓存</code>，可以设置缓存总大小的限制。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/td/download1.jpg" alt="td-download1.jpg" tabindex="0" loading="lazy"><figcaption>td-download1.jpg</figcaption></figure>
</details>
</li>
</ul>
<h2 id="自动下载设置" tabindex="-1"><a class="header-anchor" href="#自动下载设置"><span>自动下载设置</span></a></h2>
<ul>
<li>
<p>iOS/macOS/Android客户端：<code v-pre>设置</code>-&gt;<code v-pre>数据</code>-&gt;<code v-pre>自动下载媒体</code></p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/tfa/download3.jpg" alt="tfa-download3.jpg" tabindex="0" loading="lazy"><figcaption>tfa-download3.jpg</figcaption></figure>
</details>
</li>
<li>
<p>Windows/macOS/Linux Desktop客户端：左上角三短线-&gt;<code v-pre>设置</code>-&gt;<code v-pre>高级</code>-&gt;<code v-pre>自动下载媒体</code>
可以关闭自动下载或把自动下载的大小限制小一点，关闭自动下载后，手动在对话中点击了媒体也会缓存在设备上</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/feijiqun/images/td/download2.jpg" alt="td-download2.jpg" tabindex="0" loading="lazy"><figcaption>td-download2.jpg</figcaption></figure>
</details>
</li>
</ul>
</div></template>


