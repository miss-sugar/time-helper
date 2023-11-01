import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,f as n}from"./app-604d5442.js";const s={},r=n(`<h1 id="🍈-friendly-format" tabindex="-1"><a class="header-anchor" href="#🍈-friendly-format" aria-hidden="true">#</a> 🍈 Friendly Format</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>It is generally used on social platforms, comments, forums, etc</p></div><h2 id="tofriendly" tabindex="-1"><a class="header-anchor" href="#tofriendly" aria-hidden="true">#</a> toFriendly()</h2><h3 id="returns-a-friendly-date-format-such-as-n-seconds-ago" tabindex="-1"><a class="header-anchor" href="#returns-a-friendly-date-format-such-as-n-seconds-ago" aria-hidden="true">#</a> Returns a friendly date format, such as N seconds ago</h3><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Introduction</th><th style="text-align:center;">Require</th></tr></thead><tbody><tr><td style="text-align:center;">time</td><td style="text-align:center;">Any type of string time or timestamp</td><td style="text-align:center;">required</td></tr><tr><td style="text-align:center;">lang</td><td style="text-align:center;">Language: zh for Chinese, en for English</td><td style="text-align:center;">Optional, the default value is zh</td></tr></tbody></table><h4 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values</h4><blockquote><p>Friendly date format</p></blockquote><h4 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code" aria-hidden="true">#</a> Example code</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* Convert to a friendly date format */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">toFriendly</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2022-3-2 10:15:33&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3天前</span>

<span class="token comment">/* Convert to a friendly date format */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">toFriendly</span><span class="token punctuation">(</span><span class="token number">1646186290</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;en&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 6 hours ago</span>
</code></pre></div>`,10),o=[r];function i(l,c){return t(),a("div",null,o)}const h=e(s,[["render",i],["__file","friendly-format.html.vue"]]);export{h as default};
