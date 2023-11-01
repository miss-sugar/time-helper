import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as n}from"./app-47ae2797.js";const s={},d=n(`<h1 id="🍉-判断时间范围" tabindex="-1"><a class="header-anchor" href="#🍉-判断时间范围" aria-hidden="true">#</a> 🍉 判断时间范围</h1><h2 id="istoday" tabindex="-1"><a class="header-anchor" href="#istoday" aria-hidden="true">#</a> isToday()</h2><h3 id="判断日期是否为今天" tabindex="-1"><a class="header-anchor" href="#判断日期是否为今天" aria-hidden="true">#</a> 判断日期是否为今天</h3><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">必须</td></tr></tbody></table><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><blockquote><p>Bool类型的结果: <code>true</code> 或 <code>false</code></p></blockquote><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断日期是否为今天 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isToday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2020-4-10 23:01:11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div><h2 id="isthisweek" tabindex="-1"><a class="header-anchor" href="#isthisweek" aria-hidden="true">#</a> isThisWeek()</h2><h3 id="判断日期是否为本周" tabindex="-1"><a class="header-anchor" href="#判断日期是否为本周" aria-hidden="true">#</a> 判断日期是否为本周</h3><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">必须</td></tr></tbody></table><h4 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a> 返回值</h4><blockquote><p>Bool类型的结果: <code>true</code> 或 <code>false</code></p></blockquote><h4 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断日期是否为本周 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isThisWeek</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2020-5-1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div><h2 id="isthismonth" tabindex="-1"><a class="header-anchor" href="#isthismonth" aria-hidden="true">#</a> isThisMonth()</h2><h3 id="判断日期是否为本月" tabindex="-1"><a class="header-anchor" href="#判断日期是否为本月" aria-hidden="true">#</a> 判断日期是否为本月</h3><h4 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">必须</td></tr></tbody></table><h4 id="返回值-2" tabindex="-1"><a class="header-anchor" href="#返回值-2" aria-hidden="true">#</a> 返回值</h4><blockquote><p>Bool类型的结果: <code>true</code> 或 <code>false</code></p></blockquote><h4 id="示例代码-2" tabindex="-1"><a class="header-anchor" href="#示例代码-2" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断日期是否为本月 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isThisMonth</span><span class="token punctuation">(</span><span class="token number">1586451741</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div><h2 id="isthisyear" tabindex="-1"><a class="header-anchor" href="#isthisyear" aria-hidden="true">#</a> isThisYear()</h2><h3 id="判断日期是否为今年" tabindex="-1"><a class="header-anchor" href="#判断日期是否为今年" aria-hidden="true">#</a> 判断日期是否为今年</h3><h4 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">必须</td></tr></tbody></table><h4 id="返回值-3" tabindex="-1"><a class="header-anchor" href="#返回值-3" aria-hidden="true">#</a> 返回值</h4><blockquote><p>Bool类型的结果: <code>true</code> 或 <code>false</code></p></blockquote><h4 id="示例代码-3" tabindex="-1"><a class="header-anchor" href="#示例代码-3" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断日期是否为今年 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isThisYear</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Apr 11, 2023&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div><h2 id="getweekday" tabindex="-1"><a class="header-anchor" href="#getweekday" aria-hidden="true">#</a> getWeekDay()</h2><h3 id="判断日期是星期几" tabindex="-1"><a class="header-anchor" href="#判断日期是星期几" aria-hidden="true">#</a> 判断日期是星期几</h3><h4 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">可选, 默认值为当前日期</td></tr></tbody></table><h4 id="返回值-4" tabindex="-1"><a class="header-anchor" href="#返回值-4" aria-hidden="true">#</a> 返回值</h4><blockquote><p>返回值为1-7, 1为星期一... 7为星期日</p></blockquote><h4 id="示例代码-4" tabindex="-1"><a class="header-anchor" href="#示例代码-4" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断指定时间是星期几 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getWeekDay</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2023-10-01 12:31:01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>

<span class="token comment">/* 判断今天是星期几 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getWeekDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
</code></pre></div><h2 id="isweekday" tabindex="-1"><a class="header-anchor" href="#isweekday" aria-hidden="true">#</a> isWeekday()</h2><h3 id="判断日期是否为平常日" tabindex="-1"><a class="header-anchor" href="#判断日期是否为平常日" aria-hidden="true">#</a> 判断日期是否为平常日</h3><h4 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">可选, 默认值为当前日期</td></tr></tbody></table><h4 id="返回值-5" tabindex="-1"><a class="header-anchor" href="#返回值-5" aria-hidden="true">#</a> 返回值</h4><blockquote><p>Bool类型的结果: 周一到周五返回<code>true</code>, 周六日返回<code>false</code></p></blockquote><h4 id="示例代码-5" tabindex="-1"><a class="header-anchor" href="#示例代码-5" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断指定时间是否为平常日 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isWeekday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Mar 8, 2023&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div><h2 id="isweekend" tabindex="-1"><a class="header-anchor" href="#isweekend" aria-hidden="true">#</a> isWeekend()</h2><h3 id="判断日期是否为周末" tabindex="-1"><a class="header-anchor" href="#判断日期是否为周末" aria-hidden="true">#</a> 判断日期是否为周末</h3><h4 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">可选, 默认值为当前日期</td></tr></tbody></table><h4 id="返回值-6" tabindex="-1"><a class="header-anchor" href="#返回值-6" aria-hidden="true">#</a> 返回值</h4><blockquote><p>Bool类型的结果: 周六日返回<code>true</code>, 周一到周五返回<code>false</code></p></blockquote><h4 id="示例代码-6" tabindex="-1"><a class="header-anchor" href="#示例代码-6" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断指定时间是否为周末 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isWeekend</span><span class="token punctuation">(</span><span class="token number">1698516612</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div>`,57),c=[d];function r(i,h){return a(),t("div",null,c)}const p=e(s,[["render",r],["__file","determine-range.html.vue"]]);export{p as default};
