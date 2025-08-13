<template><div><p>Telegram支持将对话分组（文件夹），帮助用户更高效的管理对话列表。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>Telegram客户端版本要求：</p>
<ul>
<li>iOS/Android/macOS 客户端 ≥ <code v-pre>6.0</code></li>
<li>Windows/macOS/Linux Desktop 客户端 ≥ <code v-pre>2.0</code></li>
</ul>
</div>
<h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组"><span>分组</span></a></h2>
<ul>
<li>可以选择包含的对话和对话类型，也可以选择不包含的对话和类型，也可以组合和自定义选择对话。</li>
<li>&quot;已归档&quot;对话不能分组。</li>
<li>每个分组最多只能添加<code v-pre>100</code>个对话（大会员是<code v-pre>200</code>个），分组列表中可以无限制置顶对话，但最多<code v-pre>10</code>个分组（大会员上限是<code v-pre>30</code>）。</li>
<li>Telegram Premium可以在对话列表中显示文件夹标签。</li>
</ul>
<p>比如：</p>
<ol>
<li>包含&quot;群组&quot;， 就是已加入所有群组的分组（包含已归档）；</li>
<li>包含&quot;频道&quot;，不包含&quot;已归档&quot;，就是已加入的不包含已归档的频道的分组；</li>
<li>包含&quot;群组&quot;，不包含&quot;已归档和指定群组&quot;，就是已加入的不包含已归档和指定的群组的分组。</li>
</ol>
<p>此外，您可以创建链接分享你的分组（不能分享联系人、私有频道和私有群组）。其他人点击链接可以直接添加分组。</p>
<details class="hint-container details"><summary>操作演示</summary>
<figure><img src="https://cdn.jsdelivr.net/gh/tgwiki//images/tfa/folder.jpg" alt="tfa-divide.jpg" tabindex="0" loading="lazy"><figcaption>tfa-divide.jpg</figcaption></figure>
</details>
<h2 id="操作方法" tabindex="-1"><a class="header-anchor" href="#操作方法"><span>操作方法:</span></a></h2>
<ul>
<li>iOS/Android/macOS 客户端：长按/右键&quot;对话&quot;或<code v-pre>设置</code>-&gt;<code v-pre>分组</code>，可以设置分组了；</li>
<li>如果你没有看到&quot;分组&quot;设置，可以 <a href="tg://settings/folders" target="_blank" rel="noopener noreferrer">点击此链接进入分组设置</a> 。</li>
</ul>
<h2 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧"><span>技巧</span></a></h2>
<ul>
<li>iOS/Android客户端：可以长按分组名进行&quot;编辑分组/重新排序/删除&quot;操作，对话列表中间左右滑动为切换分组。在&quot;对话&quot;一栏下拉进入已隐藏的&quot;已归档对话&quot;，分组里不能进入&quot;已归档对话&quot;。</li>
<li>iOS客户端手势操作的变化：对话头像处右滑：标为已读(标为未读)/置顶(取消置顶)；对话末尾处左滑：开启（关闭）通知/删除/归档。</li>
<li>Android客户端归档变为：<code v-pre>对话列表</code>-&gt;<code v-pre>长按对话</code>-&gt;<code v-pre>归档</code>。</li>
<li>macOS客户端：可以用快捷键 Command+1/2/3/4...切换分组，可以右键分组名进行&quot;编辑分组/重新排序/删除&quot;操作。</li>
<li>Desktop客户端：可以用快捷键 Ctrl+1/2/3/4...切换分组，可以右键分组名进行&quot;编辑分组/删除&quot;操作，拖动分组可以进行排序。</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>分组上的数字代表的是有消息的对话数，不是未读消息数量。</p>
</div>
</div></template>


