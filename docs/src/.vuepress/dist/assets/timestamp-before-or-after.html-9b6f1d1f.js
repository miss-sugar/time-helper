import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as n}from"./app-47ae2797.js";const s={},c=n(`<h1 id="🍋-获取前后时间戳" tabindex="-1"><a class="header-anchor" href="#🍋-获取前后时间戳" aria-hidden="true">#</a> 🍋 获取前后时间戳</h1><h2 id="beforeminute" tabindex="-1"><a class="header-anchor" href="#beforeminute" aria-hidden="true">#</a> beforeMinute()</h2><h3 id="获取指定时间n分钟前的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n分钟前的时间戳" aria-hidden="true">#</a> 获取指定时间N分钟前的时间戳</h3><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">minute</td><td style="text-align:center;">分钟数</td><td style="text-align:center;">可选, 默认为1分钟</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该分钟的0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N分钟前的时间戳</p></blockquote><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取指定时间3分钟前0秒的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeMinute</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;2022-3-2 10:15:33&#39;</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1646187120</span>

<span class="token comment">/* 获取指定时间10分钟前的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeMinute</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;2022-3-2 10:15:33&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1646186733</span>

<span class="token comment">/* 获取5分钟前的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeMinute</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>
</code></pre></div><h2 id="afterminute" tabindex="-1"><a class="header-anchor" href="#afterminute" aria-hidden="true">#</a> afterMinute()</h2><h3 id="获取指定时间n分钟后的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n分钟后的时间戳" aria-hidden="true">#</a> 获取指定时间N分钟后的时间戳</h3><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">minute</td><td style="text-align:center;">分钟数</td><td style="text-align:center;">可选, 默认为1分钟</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该分钟的0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N分钟后的时间戳</p></blockquote><h4 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取指定时间20分钟后的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterMinute</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;2022-3-2 10:15:33&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1646188533</span>

<span class="token comment">/* 获取1分钟后的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>
</code></pre></div><h2 id="beforehour" tabindex="-1"><a class="header-anchor" href="#beforehour" aria-hidden="true">#</a> beforeHour()</h2><h3 id="获取指定时间n小前的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n小前的时间戳" aria-hidden="true">#</a> 获取指定时间N小前的时间戳</h3><h4 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">hour</td><td style="text-align:center;">小时数</td><td style="text-align:center;">可选, 默认为1小时</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该小时的0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-2" tabindex="-1"><a class="header-anchor" href="#返回值-2" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N小时前的时间戳</p></blockquote><h4 id="示例代码-2" tabindex="-1"><a class="header-anchor" href="#示例代码-2" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取3小时前的0分0秒开始计算的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeHour</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token constant">null</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>

<span class="token comment">/* 获取指定时间1小时前的时间戳(请注意此处为php8之后的用法) */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeHour</span><span class="token punctuation">(</span><span class="token argument-name">datetime</span><span class="token punctuation">:</span><span class="token string single-quoted-string">&#39;Apr 11, 2020&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1586534400</span>
</code></pre></div><h2 id="afterhour" tabindex="-1"><a class="header-anchor" href="#afterhour" aria-hidden="true">#</a> afterHour()</h2><h3 id="获取指定时间n小后的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n小后的时间戳" aria-hidden="true">#</a> 获取指定时间N小后的时间戳</h3><h4 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">hour</td><td style="text-align:center;">小时数</td><td style="text-align:center;">可选, 默认为1小时</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该小时的0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-3" tabindex="-1"><a class="header-anchor" href="#返回值-3" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N小时后的时间戳</p></blockquote><h4 id="示例代码-3" tabindex="-1"><a class="header-anchor" href="#示例代码-3" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 返回2小时后的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterHour</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>
</code></pre></div><h2 id="beforeday" tabindex="-1"><a class="header-anchor" href="#beforeday" aria-hidden="true">#</a> beforeDay()</h2><h3 id="获取指定时间n天前的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n天前的时间戳" aria-hidden="true">#</a> 获取指定时间N天前的时间戳</h3><h4 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">day</td><td style="text-align:center;">天数</td><td style="text-align:center;">可选, 默认为1天</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该天的0点0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-4" tabindex="-1"><a class="header-anchor" href="#返回值-4" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N天前的时间戳</p></blockquote><h4 id="示例代码-4" tabindex="-1"><a class="header-anchor" href="#示例代码-4" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取15天前0点的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeDay</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token constant">null</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>

<span class="token comment">/* 获取指定时间3天前的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeDay</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1698734495</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698475295</span>
</code></pre></div><h2 id="afterday" tabindex="-1"><a class="header-anchor" href="#afterday" aria-hidden="true">#</a> afterDay()</h2><h3 id="获取指定时间n天后的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n天后的时间戳" aria-hidden="true">#</a> 获取指定时间N天后的时间戳</h3><h4 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">day</td><td style="text-align:center;">天数</td><td style="text-align:center;">可选, 默认为1天</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该天的0点0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-5" tabindex="-1"><a class="header-anchor" href="#返回值-5" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N天后的时间戳</p></blockquote><h4 id="示例代码-5" tabindex="-1"><a class="header-anchor" href="#示例代码-5" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取15天后的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterDay</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698483295</span>
</code></pre></div><h2 id="beforeweek" tabindex="-1"><a class="header-anchor" href="#beforeweek" aria-hidden="true">#</a> beforeWeek()</h2><h3 id="获取指定时间n周前的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n周前的时间戳" aria-hidden="true">#</a> 获取指定时间N周前的时间戳</h3><h4 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">week</td><td style="text-align:center;">周数</td><td style="text-align:center;">可选, 默认为1周</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr></tbody></table><h4 id="返回值-6" tabindex="-1"><a class="header-anchor" href="#返回值-6" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N周前的时间戳</p></blockquote><h4 id="示例代码-6" tabindex="-1"><a class="header-anchor" href="#示例代码-6" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取指定时间2周前的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeWeek</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;2022-4-24 23:01:11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1649602871</span>
</code></pre></div><h2 id="afterweek" tabindex="-1"><a class="header-anchor" href="#afterweek" aria-hidden="true">#</a> afterWeek()</h2><h3 id="获取指定时间n周后的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n周后的时间戳" aria-hidden="true">#</a> 获取指定时间N周后的时间戳</h3><h4 id="参数-7" tabindex="-1"><a class="header-anchor" href="#参数-7" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">week</td><td style="text-align:center;">周数</td><td style="text-align:center;">可选, 默认为1周</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr></tbody></table><h4 id="返回值-7" tabindex="-1"><a class="header-anchor" href="#返回值-7" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N周后的时间戳</p></blockquote><h4 id="示例代码-7" tabindex="-1"><a class="header-anchor" href="#示例代码-7" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取一周后的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>
</code></pre></div><h2 id="beforemonth" tabindex="-1"><a class="header-anchor" href="#beforemonth" aria-hidden="true">#</a> beforeMonth()</h2><h3 id="获取指定时间n月前的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n月前的时间戳" aria-hidden="true">#</a> 获取指定时间N月前的时间戳</h3><h4 id="参数-8" tabindex="-1"><a class="header-anchor" href="#参数-8" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">month</td><td style="text-align:center;">月数</td><td style="text-align:center;">可选, 默认为1个月</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该月的1日0点0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-8" tabindex="-1"><a class="header-anchor" href="#返回值-8" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N月前的时间戳</p></blockquote><h4 id="示例代码-8" tabindex="-1"><a class="header-anchor" href="#示例代码-8" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取以下时间1个月前的时间戳(请注意此处为php8之后的用法) */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeMonth</span><span class="token punctuation">(</span><span class="token argument-name">datetime</span><span class="token punctuation">:</span><span class="token number">1646360133</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1643940933</span>

<span class="token comment">/* 获取2个月前1日0点0分的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeMonth</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token constant">null</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>

<span class="token comment">/* 获取3个月前的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeMonth</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698624481</span>
</code></pre></div><h2 id="aftermonth" tabindex="-1"><a class="header-anchor" href="#aftermonth" aria-hidden="true">#</a> afterMonth()</h2><h3 id="获取指定时间n月后的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n月后的时间戳" aria-hidden="true">#</a> 获取指定时间N月后的时间戳</h3><h4 id="参数-9" tabindex="-1"><a class="header-anchor" href="#参数-9" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">month</td><td style="text-align:center;">月数</td><td style="text-align:center;">可选, 默认为1个月</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该月的1日0点0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-9" tabindex="-1"><a class="header-anchor" href="#返回值-9" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N月后的时间戳</p></blockquote><h4 id="示例代码-9" tabindex="-1"><a class="header-anchor" href="#示例代码-9" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取5个月后的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterMonth</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>

<span class="token comment">/* 获取下个月1日0点0分的时间戳(请注意此处为php8之后的用法) */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterMonth</span><span class="token punctuation">(</span><span class="token argument-name">round</span><span class="token punctuation">:</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1643940933</span>
</code></pre></div><h2 id="beforeyear" tabindex="-1"><a class="header-anchor" href="#beforeyear" aria-hidden="true">#</a> beforeYear()</h2><h3 id="获取指定时间n年前的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n年前的时间戳" aria-hidden="true">#</a> 获取指定时间N年前的时间戳</h3><h4 id="参数-10" tabindex="-1"><a class="header-anchor" href="#参数-10" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">year</td><td style="text-align:center;">年数</td><td style="text-align:center;">可选, 默认为1年</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该年的1月1日0点0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-10" tabindex="-1"><a class="header-anchor" href="#返回值-10" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N年前的时间戳</p></blockquote><h4 id="示例代码-10" tabindex="-1"><a class="header-anchor" href="#示例代码-10" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取指定时间3年前的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeYear</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;2022-7-11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1562774400</span>

<span class="token comment">/* 获取明年1月1日0点0分0秒的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">beforeYear</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token constant">null</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1640995200</span>
</code></pre></div><h2 id="afteryear" tabindex="-1"><a class="header-anchor" href="#afteryear" aria-hidden="true">#</a> afterYear()</h2><h3 id="获取指定时间n年后的时间戳" tabindex="-1"><a class="header-anchor" href="#获取指定时间n年后的时间戳" aria-hidden="true">#</a> 获取指定时间N年后的时间戳</h3><h4 id="参数-11" tabindex="-1"><a class="header-anchor" href="#参数-11" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">year</td><td style="text-align:center;">年数</td><td style="text-align:center;">可选, 默认为1年</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">从指定时间开始计算 (任意类型的字符串时间或时间戳)</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">是否取整,如果为true,则从该年的1月1日0点0分0秒开始计算</td><td style="text-align:center;">可选, 默认为false</td></tr></tbody></table><h4 id="返回值-11" tabindex="-1"><a class="header-anchor" href="#返回值-11" aria-hidden="true">#</a> 返回值</h4><blockquote><p>从指定之间开始计算,N年后的时间戳</p></blockquote><h4 id="示例代码-11" tabindex="-1"><a class="header-anchor" href="#示例代码-11" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 获取2年后的时间戳 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">afterYear</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698734495</span>
</code></pre></div>`,97),r=[c];function l(p,o){return e(),a("div",null,r)}const h=t(s,[["render",l],["__file","timestamp-before-or-after.html.vue"]]);export{h as default};
