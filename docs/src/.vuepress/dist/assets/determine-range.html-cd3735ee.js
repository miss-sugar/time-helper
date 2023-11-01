import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,f as n}from"./app-604d5442.js";const s={},r=n(`<h1 id="🍉-determine-range" tabindex="-1"><a class="header-anchor" href="#🍉-determine-range" aria-hidden="true">#</a> 🍉 Determine Range</h1><h2 id="istoday" tabindex="-1"><a class="header-anchor" href="#istoday" aria-hidden="true">#</a> isToday()</h2><h3 id="determine-whether-the-date-is-today" tabindex="-1"><a class="header-anchor" href="#determine-whether-the-date-is-today" aria-hidden="true">#</a> Determine whether the date is today</h3><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">required</td></tr></tbody></table><h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Result of Bool type: &#39;true&#39; or &#39;false&#39;</p></blockquote><h4 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determine whether the date is today */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isToday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2020-4-10 23:01:11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div><h2 id="isthisweek" tabindex="-1"><a class="header-anchor" href="#isthisweek" aria-hidden="true">#</a> isThisWeek()</h2><h3 id="determine-if-the-date-is-this-week" tabindex="-1"><a class="header-anchor" href="#determine-if-the-date-is-this-week" aria-hidden="true">#</a> Determine if the date is this week</h3><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">required</td></tr></tbody></table><h4 id="return-values-1" tabindex="-1"><a class="header-anchor" href="#return-values-1" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Result of Bool type: &#39;true&#39; or &#39;false&#39;</p></blockquote><h4 id="example-code-1" tabindex="-1"><a class="header-anchor" href="#example-code-1" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determine if the date is this week */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isThisWeek</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2020-5-1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div><h2 id="isthismonth" tabindex="-1"><a class="header-anchor" href="#isthismonth" aria-hidden="true">#</a> isThisMonth()</h2><h3 id="determine-whether-the-date-is-this-month" tabindex="-1"><a class="header-anchor" href="#determine-whether-the-date-is-this-month" aria-hidden="true">#</a> Determine whether the date is this month</h3><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">required</td></tr></tbody></table><h4 id="return-values-2" tabindex="-1"><a class="header-anchor" href="#return-values-2" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Result of Bool type: &#39;true&#39; or &#39;false&#39;</p></blockquote><h4 id="example-code-2" tabindex="-1"><a class="header-anchor" href="#example-code-2" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determine whether the date is this month */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isThisMonth</span><span class="token punctuation">(</span><span class="token number">1586451741</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div><h2 id="isthisyear" tabindex="-1"><a class="header-anchor" href="#isthisyear" aria-hidden="true">#</a> isThisYear()</h2><h3 id="determine-if-the-date-is-this-year" tabindex="-1"><a class="header-anchor" href="#determine-if-the-date-is-this-year" aria-hidden="true">#</a> Determine if the date is this year</h3><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">required</td></tr></tbody></table><h4 id="return-values-3" tabindex="-1"><a class="header-anchor" href="#return-values-3" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Result of Bool type: &#39;true&#39; or &#39;false&#39;</p></blockquote><h4 id="example-code-3" tabindex="-1"><a class="header-anchor" href="#example-code-3" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determine if the date is this year */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isThisYear</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Apr 11, 2023&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div><h2 id="getweekday" tabindex="-1"><a class="header-anchor" href="#getweekday" aria-hidden="true">#</a> getWeekDay()</h2><h3 id="the-date-of-the-week-is-determined" tabindex="-1"><a class="header-anchor" href="#the-date-of-the-week-is-determined" aria-hidden="true">#</a> The date of the week is determined</h3><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">Optional, the default value is the current date</td></tr></tbody></table><h4 id="return-values-4" tabindex="-1"><a class="header-anchor" href="#return-values-4" aria-hidden="true">#</a> Return Values</h4><blockquote><p>The return value is 1-7, 1 is Monday... 7 is Sunday</p></blockquote><h4 id="example-code-4" tabindex="-1"><a class="header-anchor" href="#example-code-4" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determine the day of the week when the specified time is determined */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getWeekDay</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2023-10-01 12:31:01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 7</span>

<span class="token comment">/* Judge what day of the week it is */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getWeekDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
</code></pre></div><h2 id="isweekday" tabindex="-1"><a class="header-anchor" href="#isweekday" aria-hidden="true">#</a> isWeekday()</h2><h3 id="determine-whether-the-date-is-a-normal-day" tabindex="-1"><a class="header-anchor" href="#determine-whether-the-date-is-a-normal-day" aria-hidden="true">#</a> Determine whether the date is a normal day</h3><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">Optional, the default value is the current date</td></tr></tbody></table><h4 id="return-values-5" tabindex="-1"><a class="header-anchor" href="#return-values-5" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Results for Bool type: &#39;true&#39; from Monday to Friday, &#39;false&#39; from Saturday to Sunday</p></blockquote><h4 id="example-code-5" tabindex="-1"><a class="header-anchor" href="#example-code-5" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Determines whether the specified time is a normal day */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isWeekday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Mar 8, 2023&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div><h2 id="isweekend" tabindex="-1"><a class="header-anchor" href="#isweekend" aria-hidden="true">#</a> isWeekend()</h2><h3 id="determine-if-the-date-is-a-weekend" tabindex="-1"><a class="header-anchor" href="#determine-if-the-date-is-a-weekend" aria-hidden="true">#</a> Determine if the date is a weekend</h3><h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">Optional, the default value is the current date</td></tr></tbody></table><h4 id="return-values-6" tabindex="-1"><a class="header-anchor" href="#return-values-6" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Results of Bool type: &#39;true&#39; on Saturday and Sunday, &#39;false&#39; on Monday to Friday</p></blockquote><h4 id="example-code-6" tabindex="-1"><a class="header-anchor" href="#example-code-6" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Check whether the specified time is a weekend */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">isWeekend</span><span class="token punctuation">(</span><span class="token number">1698516612</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div>`,57),i=[r];function d(h,o){return t(),a("div",null,i)}const p=e(s,[["render",d],["__file","determine-range.html.vue"]]);export{p as default};
