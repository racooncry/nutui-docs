import{e as a,o as t,y as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Input \u8F93\u5165\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u5355\u884C\u8F93\u5165\u6846</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Input } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C(\u5F02\u6B65)&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value1}&quot;</span> <span class="hljs-attr">change</span>=<span class="hljs-string">&quot;{change}&quot;</span> <span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;{focus}&quot;</span> <span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;{blur}&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value2}&quot;</span> <span class="hljs-attr">change</span>=<span class="hljs-string">&quot;{change}&quot;</span> <span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;{clear}&quot;</span> <span class="hljs-attr">requireShow</span> /&gt;</span>
</code></pre><h3>\u7981\u7528\u548C\u53EA\u8BFB</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;\u7981\u6B62\u4FEE\u6539&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;{true}&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;readonly\u53EA\u8BFB&quot;</span> <span class="hljs-attr">readonly</span>=<span class="hljs-string">&quot;{true}&quot;</span> /&gt;</span>
</code></pre><h3>\u9650\u5236\u8F93\u5165\u957F\u5EA6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9650\u52367&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value3}&quot;</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;7&quot;</span> /&gt;</span>
</code></pre><h3>\u5176\u4ED6\u7C7B\u578B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value4}&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6574\u6570&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;{value5}&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6570\u5B57&quot;</span> <span class="hljs-attr">defaultValue</span>=<span class="hljs-string">&quot;&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u652F\u6301\u5C0F\u6570\u70B9\u7684\u8F93\u5165&quot;</span> /&gt;</span>
</code></pre><h3>\u4EE3\u7801</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> [value1, UpdateValue1] = useState(<span class="hljs-string">&#39;&#39;</span>)
<span class="hljs-keyword">const</span> [value2, UpdateValue2] = useState(<span class="hljs-string">&#39;&#39;</span>)
<span class="hljs-keyword">const</span> [value3, UpdateValue3] = useState(<span class="hljs-string">&#39;&#39;</span>)
<span class="hljs-keyword">const</span> [value4, UpdateValue4] = useState(<span class="hljs-string">&#39;&#39;</span>)
<span class="hljs-keyword">const</span> [value5, UpdateValue5] = useState(<span class="hljs-string">&#39;&#39;</span>)
useEffect(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    UpdateValue1(<span class="hljs-string">&#39;\u5F02\u6B65\u6587\u672C&#39;</span>)
  }, <span class="hljs-number">5000</span>)
}, [])
<span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value: string, event: Event</span>) =&gt;</span> {
  UpdateValue2(value)
}
<span class="hljs-keyword">const</span> focus = <span class="hljs-function">(<span class="hljs-params">value: string, event: Event</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;focus:&#39;</span>, value, event)
}
<span class="hljs-keyword">const</span> blur = <span class="hljs-function">(<span class="hljs-params">value: string, event: Event</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;blur:&#39;</span>, value, event)
}
<span class="hljs-keyword">const</span> clear = <span class="hljs-function">(<span class="hljs-params">value: string</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;clear:&#39;</span>, value)
  UpdateValue2(<span class="hljs-string">&#39;&#39;</span>)
}
</code></pre><h3>Prop</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u521D\u59CB\u9ED8\u8BA4\u503C\uFF0C\u53CC\u5411\u7ED1\u5B9A</td><td>String</td><td>-</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>text</code> <code>number</code> \u7B49</td><td>String</td><td><code>text</code></td></tr><tr><td>placeholder</td><td>\u4E3A\u7A7A\u65F6\u5360\u4F4D\u7B26</td><td>String</td><td>-</td></tr><tr><td>label</td><td>\u5DE6\u4FA7\u6587\u6848</td><td>String</td><td>-</td></tr><tr><td>require-show</td><td>\u5DE6\u4FA7*\u53F7\u662F\u5426\u5C55\u793A</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>max-length</td><td>\u9650\u5236\u6700\u957F\u8F93\u5165\u5B57\u7B26</td><td>String\u3001Number</td><td>-</td></tr><tr><td>clearable</td><td>\u5C55\u793A\u6E05\u9664 icon</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>text-align</td><td>\u6587\u672C\u4F4D\u7F6E,\u53EF\u9009\u503C<code>left</code>,<code>center</code>,<code>right</code></td><td>String</td><td><code>left</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8F93\u5165\u5185\u5BB9\u65F6\u89E6\u53D1</td><td>val ,event</td></tr><tr><td>focus</td><td>\u805A\u7126\u65F6\u89E6\u53D1</td><td>val ,event</td></tr><tr><td>blur</td><td>\u5931\u7126\u65F6\u89E6\u53D1</td><td>val ,event</td></tr><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u7A7A\u65F6\u89E6\u53D1</td><td>val</td></tr></tbody></table>`,20),e=[p],u={setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",l,e))}};export{u as default};