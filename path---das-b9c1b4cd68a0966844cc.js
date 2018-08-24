webpackJsonp([0x5f04cc2d14fa],{351:function(n,a){n.exports={data:{markdownRemark:{html:'<p>I was looking for ways of getting the hostname part of a given url. For my surprise, JS had a built-in feature for that, as long as the link is within a <strong>&#x3C; a ></strong> tag. So we have to create a temporary tag to hold the link, extract the hostname and get rid of it once we\'re done.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// JS function</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $linkField <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'[name="form-link"]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  $sourceField <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'[name="form-source"]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  $linkField<span class="token punctuation">.</span><span class="token function">keypress</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    $tempA <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    $tempA<span class="token punctuation">.</span>href <span class="token operator">=</span> $linkField<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    $sourceField<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>$tempA<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    $tempA<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a href="https://gist.github.com/anazard/b3e70a21d58d7d48b04891fa5a4360f4">This snippet on Github Gist</a></p>',frontmatter:{date:null,path:"/das",title:"[Javascript] Getting the hostname of a url"}}},pathContext:{}}}});
//# sourceMappingURL=path---das-b9c1b4cd68a0966844cc.js.map