webpackJsonp([92313290570902],{364:function(n,a){n.exports={data:{markdownRemark:{html:'<p>I was looking into ways to copy a given link to the clipboard upon clicking a button. JS has <strong>document.execCommand(‘copy’)</strong> for some operations of the same nature. Turns out this method only allows you to copy text that is currently selected, and you can only select text that’s in either a text input or textarea.</p>\n<p>The solution I came up with consists in creating a temporary input in which we could enter the text, execute the copy command and get rid of it right after.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- Button --></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secretInfo<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>secret info to be copied<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btnCopy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Copy Hidden Info to Clipboard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// JS function</span>\n\n<span class="token keyword">var</span> $body      <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> $btnCopy   <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'btnCopy\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> secretInfo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'secretInfo\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> <span class="token function-variable function">copyToClipboard</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>secretInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> $tempInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'INPUT\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  $body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>$tempInput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  $tempInput<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'value\'</span><span class="token punctuation">,</span> secretInfo<span class="token punctuation">)</span>\n  $tempInput<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">\'copy\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  $body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>$tempInput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n$btnCopy<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>ev<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">copyToClipboard</span><span class="token punctuation">(</span>secretInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a href="https://gist.github.com/anazard/d42354f45e172519c0be3cead34fe869">This snippet on Github Gist</a></p>\n<p>PS: the copy buttons are dynamically generated for each row of the datatable I had on that page. This is why this snippet seems to be a bit more complex than what I showed above, but it’s just a matter of removing that logic and adapt to your use-case.</p>',frontmatter:{date:"November 07, 2017",path:"/sdasd",title:"[Javascript] Copying text to clipboard"}}},pathContext:{}}}});
//# sourceMappingURL=path---sdasd-7462c15d9c7b6cbc1684.js.map