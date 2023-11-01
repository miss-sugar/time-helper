import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as n}from"./app-604d5442.js";const s={},i=n(`<h1 id="🍏-china-holiday" tabindex="-1"><a class="header-anchor" href="#🍏-china-holiday" aria-hidden="true">#</a> 🍏 China Holiday</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Specifically for China&#39;s holidays, it currently includes the holiday data of &#39;2020-2024&#39;, and will continue to be updated in the future. In order to facilitate maintenance and use, a new class &#39;ChinaHoliday&#39; was created</p></div><h2 id="isworkday" tabindex="-1"><a class="header-anchor" href="#isworkday" aria-hidden="true">#</a> isWorkday()</h2><h3 id="determine-whether-the-date-is-a-working-day-in-china" tabindex="-1"><a class="header-anchor" href="#determine-whether-the-date-is-a-working-day-in-china" aria-hidden="true">#</a> Determine whether the date is a working day in China</h3><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">Optional, defaults to the current time</td></tr></tbody></table><h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values</h4><blockquote><p>&#39;true&#39; if it&#39;s a working day, &#39;false&#39; if it&#39;s otherwise</p></blockquote><h4 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determine whether the following dates are working days in China */</span>
<span class="token class-name static-context">ChinaHoliday</span><span class="token operator">::</span><span class="token function">isWorkday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2023-01-29&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>

<span class="token comment">/* Determine whether today is a Chinese working day */</span>
<span class="token class-name static-context">ChinaHoliday</span><span class="token operator">::</span><span class="token function">isWorkday</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div><h2 id="isholiday" tabindex="-1"><a class="header-anchor" href="#isholiday" aria-hidden="true">#</a> isHoliday()</h2><h3 id="determine-whether-the-date-is-a-chinese-holiday" tabindex="-1"><a class="header-anchor" href="#determine-whether-the-date-is-a-chinese-holiday" aria-hidden="true">#</a> Determine whether the date is a Chinese holiday</h3><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">Optional, defaults to the current time</td></tr></tbody></table><h4 id="return-values-1" tabindex="-1"><a class="header-anchor" href="#return-values-1" aria-hidden="true">#</a> Return Values</h4><blockquote><p>&#39;true&#39; if it&#39;s a holiday, &#39;false&#39; if it&#39;s otherwise</p></blockquote><h4 id="example-code-1" tabindex="-1"><a class="header-anchor" href="#example-code-1" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determine whether the following dates are Chinese holidays */</span>
<span class="token class-name static-context">ChinaHoliday</span><span class="token operator">::</span><span class="token function">isHoliday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2023-01-28&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div>`,18),r=[i];function o(d,h){return a(),t("div",null,r)}const p=e(s,[["render",o],["__file","china-holiday.html.vue"]]);export{p as default};
