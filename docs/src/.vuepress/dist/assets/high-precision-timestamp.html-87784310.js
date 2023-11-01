import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as n}from"./app-604d5442.js";const s={},i=n(`<h1 id="🍌-high-precision-timestamp" tabindex="-1"><a class="header-anchor" href="#🍌-high-precision-timestamp" aria-hidden="true">#</a> 🍌 High Precision Timestamp</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>It may be used to generate order numbers or to interface with other programming languages</p></div><h2 id="gettimestamp" tabindex="-1"><a class="header-anchor" href="#gettimestamp" aria-hidden="true">#</a> getTimestamp()</h2><h3 id="to-obtain-a-timestamp-in-seconds-you-can-use-the-system-function-time-instead" tabindex="-1"><a class="header-anchor" href="#to-obtain-a-timestamp-in-seconds-you-can-use-the-system-function-time-instead" aria-hidden="true">#</a> To obtain a timestamp in seconds, you can use the system function time() instead</h3><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><blockquote><p>noting</p></blockquote><h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Timestamp in the current seconds</p></blockquote><h4 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Gets the timestamp of the current second */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698762509</span>
</code></pre></div><h2 id="getmillitimestamp" tabindex="-1"><a class="header-anchor" href="#getmillitimestamp" aria-hidden="true">#</a> getMilliTimestamp()</h2><h3 id="get-millisecond-timestamps" tabindex="-1"><a class="header-anchor" href="#get-millisecond-timestamps" aria-hidden="true">#</a> Get millisecond timestamps</h3><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><blockquote><p>noting</p></blockquote><h4 id="return-values-1" tabindex="-1"><a class="header-anchor" href="#return-values-1" aria-hidden="true">#</a> Return Values</h4><blockquote><p>The timestamp of the current millisecond level</p></blockquote><h4 id="example-code-1" tabindex="-1"><a class="header-anchor" href="#example-code-1" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Obtain the timestamp of the current millisecond */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getMilliTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698762509279</span>
</code></pre></div><h2 id="getmicrotimestamp" tabindex="-1"><a class="header-anchor" href="#getmicrotimestamp" aria-hidden="true">#</a> getMicroTimestamp()</h2><h3 id="get-microsecond-timestamps" tabindex="-1"><a class="header-anchor" href="#get-microsecond-timestamps" aria-hidden="true">#</a> Get microsecond timestamps</h3><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><blockquote><p>noting</p></blockquote><h4 id="return-values-2" tabindex="-1"><a class="header-anchor" href="#return-values-2" aria-hidden="true">#</a> Return Values</h4><blockquote><p>The current microsecond timestamp</p></blockquote><h4 id="example-code-2" tabindex="-1"><a class="header-anchor" href="#example-code-2" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Get the current microsecond timestamp */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getMicroTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698762509279645</span>
</code></pre></div><h2 id="getnanotimestamp" tabindex="-1"><a class="header-anchor" href="#getnanotimestamp" aria-hidden="true">#</a> getNanoTimestamp()</h2><h3 id="get-nanosecond-timestamps" tabindex="-1"><a class="header-anchor" href="#get-nanosecond-timestamps" aria-hidden="true">#</a> Get nanosecond timestamps</h3><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><blockquote><p>noting</p></blockquote><h4 id="return-values-3" tabindex="-1"><a class="header-anchor" href="#return-values-3" aria-hidden="true">#</a> Return Values</h4><blockquote><p>The timestamp of the current nanosecond</p></blockquote><h4 id="example-code-3" tabindex="-1"><a class="header-anchor" href="#example-code-3" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Obtain the current nanosecond timestamp */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">getNanoTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1698762509279645820</span>
</code></pre></div>`,34),o=[i];function c(r,p){return a(),t("div",null,o)}const m=e(s,[["render",c],["__file","high-precision-timestamp.html.vue"]]);export{m as default};
