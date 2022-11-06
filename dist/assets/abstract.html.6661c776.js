import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c,a as n,b as l,e as o,d as s}from"./app.36bfa2ec.js";const i={},u=o(`<p>\u201C\u4E8C\u54E5\uFF0C\u4F60\u8FD9\u660E\u663E\u52A0\u5FEB\u4E86\u66F4\u65B0\u7684\u9891\u7387\u5440\uFF01\u201D\u4E09\u59B9\u5BF9\u4E8E\u6211\u6700\u8FD1\u7684\u809D\u52B2\u7531\u8877\u7684\u4F69\u670D\u4E86\u8D77\u6765\u3002</p><p>\u201C\u54C8\u54C8\uFF0C\u662F\u5440\uFF0C\u6211\u8981\u7ED9\u5E7F\u5927\u7684\u5B66\u5F1F\u5B66\u59B9\u4EEC\u4E00\u4E2A\u5B8C\u6574\u7684 Java \u5B66\u4E60\u4F53\u7CFB\u3002\u201D\u6211\u5BF9\u672A\u6765\u5145\u6EE1\u4E86\u4FE1\u5FC3\u3002</p><p>\u201C\u90A3\u5C31\u5F00\u59CB\u5427\u3002\u201D\u4E09\u59B9\u8BF4\u3002</p><hr><h2 id="\u5B9A\u4E49\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u5B9A\u4E49\u62BD\u8C61\u7C7B</h2><p>\u5B9A\u4E49\u62BD\u8C61\u7C7B\u7684\u65F6\u5019\u9700\u8981\u7528\u5230\u5173\u952E\u5B57 <code>abstract</code>\uFF0C\u653E\u5728 <code>class</code> \u5173\u952E\u5B57\u524D\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E\u62BD\u8C61\u7C7B\u7684\u547D\u540D\uFF0C\u300A\u963F\u91CC\u7684 Java \u5F00\u53D1\u624B\u518C\u300B\u4E0A\u6709\u5F3A\u8C03\uFF0C\u201C\u62BD\u8C61\u7C7B\u547D\u540D\u8981\u4F7F\u7528 Abstract \u6216 Base \u5F00\u5934\u201D\uFF0C\u8FD9\u6761\u89C4\u7EA6\u8FD8\u662F\u503C\u5F97\u9075\u5B88\u7684\u3002</p><h2 id="\u62BD\u8C61\u7C7B\u7684\u7279\u5F81" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u7684\u7279\u5F81" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u7684\u7279\u5F81</h2><p>\u62BD\u8C61\u7C7B\u662F\u4E0D\u80FD\u5B9E\u4F8B\u5316\u7684\uFF0C\u5C1D\u8BD5\u901A\u8FC7 <code>new</code> \u5173\u952E\u5B57\u5B9E\u4F8B\u5316\u7684\u8BDD\uFF0C\u7F16\u8BD1\u5668\u4F1A\u62A5\u9519\uFF0C\u63D0\u793A\u201C\u7C7B\u662F\u62BD\u8C61\u7684\uFF0C\u4E0D\u80FD\u5B9E\u4F8B\u5316\u201D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/abstract-01.png" alt=""></p><p>\u867D\u7136\u62BD\u8C61\u7C7B\u4E0D\u80FD\u5B9E\u4F8B\u5316\uFF0C\u4F46\u53EF\u4EE5\u6709\u5B50\u7C7B\u3002\u5B50\u7C7B\u901A\u8FC7 <code>extends</code> \u5173\u952E\u5B57\u6765\u7EE7\u627F\u62BD\u8C61\u7C7B\u3002\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasketballPlayer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u4E2A\u7C7B\u5B9A\u4E49\u4E86\u4E00\u4E2A\u6216\u591A\u4E2A\u62BD\u8C61\u65B9\u6CD5\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5FC5\u987B\u662F\u62BD\u8C61\u7C7B\u3002</p><p>\u5F53\u6211\u4EEC\u5C1D\u8BD5\u5728\u4E00\u4E2A\u666E\u901A\u7C7B\u4E2D\u5B9A\u4E49\u62BD\u8C61\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u7F16\u8BD1\u5668\u4F1A\u6709\u4E24\u5904\u9519\u8BEF\u63D0\u793A\u3002\u7B2C\u4E00\u5904\u5728\u7C7B\u7EA7\u522B\u4E0A\uFF0C\u63D0\u793A\u201C\u8FD9\u4E2A\u7C7B\u5FC5\u987B\u901A\u8FC7 <code>abstract</code> \u5173\u952E\u5B57\u5B9A\u4E49\u201D\uFF0C\u89C1\u4E0B\u56FE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/abstract-02.png" alt=""></p><p>\u7B2C\u4E8C\u5904\u5728\u5C1D\u8BD5\u5B9A\u4E49 abstract \u7684\u65B9\u6CD5\u4E0A\uFF0C\u63D0\u793A\u201C\u62BD\u8C61\u65B9\u6CD5\u6240\u5728\u7684\u7C7B\u4E0D\u662F\u62BD\u8C61\u7684\u201D\uFF0C\u89C1\u4E0B\u56FE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/abstract-03.png" alt=""></p><p>\u62BD\u8C61\u7C7B\u4E2D\u65E2\u53EF\u4EE5\u5B9A\u4E49\u62BD\u8C61\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u666E\u901A\u65B9\u6CD5\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD0\u52A8\u5458\u4E5F\u8981\u4F11\u606F\u800C\u4E0D\u662F\u6311\u6218\u6781\u9650&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62BD\u8C61\u7C7B\u6D3E\u751F\u7684\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0\u7236\u7C7B\u4E2D\u5B9A\u4E49\u7684\u62BD\u8C61\u65B9\u6CD5\u3002\u6BD4\u5982\u8BF4\uFF0C\u62BD\u8C61\u7C7B AbstractPlayer \u4E2D\u5B9A\u4E49\u4E86 <code>play()</code> \u65B9\u6CD5\uFF0C\u5B50\u7C7B BasketballPlayer \u4E2D\u5C31\u5FC5\u987B\u5B9E\u73B0\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasketballPlayer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662F\u5F20\u4F2F\u4F26\uFF0C\u7BEE\u7403\u573A\u4E0A\u5F97\u8FC7 100 \u5206&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709\u5B9E\u73B0\u7684\u8BDD\uFF0C\u7F16\u8BD1\u5668\u4F1A\u63D0\u793A\u201C\u5B50\u7C7B\u5FC5\u987B\u5B9E\u73B0\u62BD\u8C61\u65B9\u6CD5\u201D\uFF0C\u89C1\u4E0B\u56FE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/abstract-04.png" alt=""></p><h2 id="\u62BD\u8C61\u7C7B\u7684\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u7684\u5E94\u7528\u573A\u666F</h2><p>\u201C\u4E8C\u54E5\uFF0C\u62BD\u8C61\u65B9\u6CD5\u6211\u660E\u767D\u4E86\uFF0C\u90A3\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528\u62BD\u8C61\u65B9\u6CD5\u5462\uFF1F\u80FD\u7ED9\u6211\u8BB2\u8BB2\u5B83\u7684\u5E94\u7528\u573A\u666F\u5417\uFF1F\u201D\u4E09\u59B9\u53CA\u65F6\u7684\u63D2\u8BDD\u9053\u3002</p><p>\u201C\u8FD9\u95EE\u9898\u95EE\u7684\u6070\u5230\u597D\u5904\u5440\uFF01\u201D\u6211\u6276\u4E86\u6276\u773C\u955C\u7EE7\u7EED\u8BF4\u3002</p><h3 id="\u7B2C\u4E00\u79CD\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u79CD\u573A\u666F" aria-hidden="true">#</a> <strong>\u7B2C\u4E00\u79CD\u573A\u666F</strong></h3><p>\u5F53\u6211\u4EEC\u5E0C\u671B\u4E00\u4E9B\u901A\u7528\u7684\u529F\u80FD\u88AB\u591A\u4E2A\u5B50\u7C7B\u590D\u7528\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u62BD\u8C61\u7C7B\u3002\u6BD4\u5982\u8BF4\uFF0CAbstractPlayer \u62BD\u8C61\u7C7B\u4E2D\u6709\u4E00\u4E2A\u666E\u901A\u7684\u65B9\u6CD5 <code>sleep()</code>\uFF0C\u8868\u660E\u6240\u6709\u8FD0\u52A8\u5458\u90FD\u9700\u8981\u4F11\u606F\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u53EF\u4EE5\u88AB\u5B50\u7C7B\u590D\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD0\u52A8\u5458\u4E5F\u8981\u4F11\u606F\u800C\u4E0D\u662F\u6311\u6218\u6781\u9650&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7C7B BasketballPlayer \u7EE7\u627F\u4E86 AbstractPlayer \u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BasketballPlayer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u62E5\u6709\u4E86 <code>sleep()</code> \u65B9\u6CD5\u3002BasketballPlayer \u7684\u5BF9\u8C61\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u7236\u7C7B\u7684 <code>sleep()</code> \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">BasketballPlayer</span> basketballPlayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasketballPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
basketballPlayer<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B50\u7C7B FootballPlayer \u7EE7\u627F\u4E86 AbstractPlayer \u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">FootballPlayer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u62E5\u6709\u4E86 <code>sleep()</code> \u65B9\u6CD5\uFF0CFootballPlayer \u7684\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u7236\u7C7B\u7684 <code>sleep()</code> \u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">FootballPlayer</span> footballPlayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FootballPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
footballPlayer<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u662F\u4E0D\u662F\u5C31\u5B9E\u73B0\u4E86\u4EE3\u7801\u7684\u590D\u7528\u5462\uFF1F</p><h3 id="\u7B2C\u4E8C\u79CD\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u79CD\u573A\u666F" aria-hidden="true">#</a> <strong>\u7B2C\u4E8C\u79CD\u573A\u666F</strong></h3><p>\u5F53\u6211\u4EEC\u9700\u8981\u5728\u62BD\u8C61\u7C7B\u4E2D\u5B9A\u4E49\u597D API\uFF0C\u7136\u540E\u5728\u5B50\u7C7B\u4E2D\u6269\u5C55\u5B9E\u73B0\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528\u62BD\u8C61\u7C7B\u3002\u6BD4\u5982\u8BF4\uFF0CAbstractPlayer \u62BD\u8C61\u7C7B\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5 <code>play()</code>\uFF0C\u8868\u660E\u6240\u6709\u8FD0\u52A8\u5458\u90FD\u53EF\u4EE5\u4ECE\u4E8B\u67D0\u9879\u8FD0\u52A8\uFF0C\u4F46\u9700\u8981\u5BF9\u5E94\u5B50\u7C7B\u53BB\u6269\u5C55\u5B9E\u73B0\uFF0C\u8868\u660E\u7BEE\u7403\u8FD0\u52A8\u5458\u6253\u7BEE\u7403\uFF0C\u8DB3\u7403\u8FD0\u52A8\u5458\u8E22\u8DB3\u7403\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BasketballPlayer \u7EE7\u627F\u4E86 AbstractPlayer \u7C7B\uFF0C\u6269\u5C55\u5B9E\u73B0\u4E86\u81EA\u5DF1\u7684 <code>play()</code> \u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasketballPlayer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662F\u5F20\u4F2F\u4F26\uFF0C\u6211\u7BEE\u7403\u573A\u4E0A\u5F97\u8FC7 100 \u5206\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FootballPlayer \u7EE7\u627F\u4E86 AbstractPlayer \u7C7B\uFF0C\u6269\u5C55\u5B9E\u73B0\u4E86\u81EA\u5DF1\u7684 <code>play()</code> \u65B9\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FootballPlayer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662FC\u7F57\uFF0C\u6211\u80FD\u63A5\u4F4F\u4EFB\u610F\u9AD8\u5EA6\u7684\u5934\u7403&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u8FDB\u4E00\u6B65\u5C55\u793A\u62BD\u8C61\u7C7B\u7684\u7279\u6027\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E00\u4E2A\u5177\u4F53\u7684\u793A\u4F8B\u3002\u5047\u8BBE\u73B0\u5728\u6709\u4E00\u4E2A\u6587\u4EF6\uFF0C\u91CC\u9762\u7684\u5185\u5BB9\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u6709\u4E00\u4E2A\u201CHello World\u201D\uFF0C\u73B0\u5728\u9700\u8981\u6709\u4E00\u4E2A\u8BFB\u53D6\u5668\u5C06\u5185\u5BB9\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u51FA\u6765\uFF0C\u6700\u597D\u80FD\u6309\u7167\u5927\u5199\u7684\u65B9\u5F0F\uFF0C\u6216\u8005\u5C0F\u5199\u7684\u65B9\u5F0F\u6765\u8BFB\u3002</p><p>\u8FD9\u65F6\u5019\uFF0C\u6700\u597D\u5B9A\u4E49\u4E00\u4E2A\u62BD\u8C61\u7C7B BaseFileReader\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseFileReader</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Path</span> filePath<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token class-name">BaseFileReader</span><span class="token punctuation">(</span><span class="token class-name">Path</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>filePath <span class="token operator">=</span> filePath<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">mapFileLine</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">mapFileLine</span><span class="token punctuation">(</span><span class="token class-name">String</span> line<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>filePath \u4E3A\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F7F\u7528 protected \u4FEE\u9970\uFF0C\u8868\u660E\u8BE5\u6210\u5458\u53D8\u91CF\u53EF\u4EE5\u5728\u9700\u8981\u65F6\u88AB\u5B50\u7C7B\u8BBF\u95EE\u5230\u3002</p></li><li><p><code>readFile()</code> \u65B9\u6CD5\u7528\u6765\u8BFB\u53D6\u6587\u4EF6\uFF0C\u65B9\u6CD5\u4F53\u91CC\u9762\u8C03\u7528\u4E86\u62BD\u8C61\u65B9\u6CD5 <code>mapFileLine()</code>\u2014\u2014\u9700\u8981\u5B50\u7C7B\u6765\u6269\u5C55\u5B9E\u73B0\u5927\u5C0F\u5199\u7684\u4E0D\u540C\u8BFB\u53D6\u65B9\u5F0F\u3002</p></li></ul><p>\u5728\u6211\u770B\u6765\uFF0CBaseFileReader \u7C7B\u8BBE\u8BA1\u7684\u5C31\u975E\u5E38\u5408\u7406\uFF0C\u5E76\u4E14\u6613\u4E8E\u6269\u5C55\uFF0C\u5B50\u7C7B\u53EA\u9700\u8981\u4E13\u6CE8\u4E8E\u5177\u4F53\u7684\u5927\u5C0F\u5199\u5B9E\u73B0\u65B9\u5F0F\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u5C0F\u5199\u7684\u65B9\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LowercaseFileReader</span> <span class="token keyword">extends</span> <span class="token class-name">BaseFileReader</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">LowercaseFileReader</span><span class="token punctuation">(</span><span class="token class-name">Path</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> <span class="token function">mapFileLine</span><span class="token punctuation">(</span><span class="token class-name">String</span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> line<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u5199\u7684\u65B9\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">UppercaseFileReader</span> <span class="token keyword">extends</span> <span class="token class-name">BaseFileReader</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">UppercaseFileReader</span><span class="token punctuation">(</span><span class="token class-name">Path</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> <span class="token function">mapFileLine</span><span class="token punctuation">(</span><span class="token class-name">String</span> line<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> line<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u6587\u4EF6\u91CC\u9762\u4E00\u884C\u4E00\u884C\u8BFB\u53D6\u5185\u5BB9\u7684\u4EE3\u7801\u88AB\u5B50\u7C7B\u590D\u7528\u4E86\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u5B50\u7C7B\u53EA\u9700\u8981\u4E13\u6CE8\u4E8E\u81EA\u5DF1\u8BE5\u505A\u7684\u5DE5\u4F5C\uFF0CLowercaseFileReader \u4EE5\u5C0F\u5199\u7684\u65B9\u5F0F\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0CUppercaseFileReader \u4EE5\u5927\u5199\u7684\u65B9\u5F0F\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002</p><p>\u6765\u770B\u4E00\u4E0B\u6D4B\u8BD5\u7C7B FileReaderTest\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileReaderTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">URISyntaxException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">URL</span> location <span class="token operator">=</span> <span class="token class-name">FileReaderTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;helloworld.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Path</span> path <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span><span class="token function">toURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BaseFileReader</span> lowercaseFileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LowercaseFileReader</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BaseFileReader</span> uppercaseFileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UppercaseFileReader</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>lowercaseFileReader<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uppercaseFileReader<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u9879\u76EE\u7684 resource \u76EE\u5F55\u4E0B\u5EFA\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\uFF0C\u540D\u5B57\u53EB helloworld.txt\uFF0C\u91CC\u9762\u7684\u5185\u5BB9\u5C31\u662F\u201CHello World\u201D\u3002\u6587\u4EF6\u7684\u5177\u4F53\u4F4D\u7F6E\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u6211\u7528\u7684\u96C6\u6210\u5F00\u53D1\u73AF\u5883\u662F Intellij IDEA\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/object-class/abstract-05.png" alt=""></p><p>\u5728 resource \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7 <code>ClassLoader.getResource()</code> \u7684\u65B9\u5F0F\u83B7\u53D6\u5230 URI \u8DEF\u5F84\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u53D6\u5230\u6587\u672C\u5185\u5BB9\u4E86\u3002</p><p>\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[hello world]
[HELLO WORLD]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u8C61\u7C7B\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u603B\u7ED3" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u603B\u7ED3</h2><p>\u597D\u4E86\uFF0C\u5BF9\u4E8E\u62BD\u8C61\u7C7B\u6211\u4EEC\u7B80\u5355\u603B\u7ED3\u4E00\u4E0B\uFF1A</p><p>1\u3001\u62BD\u8C61\u7C7B\u4E0D\u80FD\u88AB\u5B9E\u4F8B\u5316\u3002 2\u3001\u62BD\u8C61\u7C7B\u5E94\u8BE5\u81F3\u5C11\u6709\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5426\u5219\u5B83\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\u3002 3\u3001\u62BD\u8C61\u7C7B\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u6CA1\u6709\u65B9\u6CD5\u4F53\u3002 4\u3001\u62BD\u8C61\u7C7B\u7684\u5B50\u7C7B\u5FC5\u987B\u7ED9\u51FA\u7236\u7C7B\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u9664\u975E\u8BE5\u5B50\u7C7B\u4E5F\u662F\u62BD\u8C61\u7C7B\u3002</p><p>\u201C\u5B8C\u4E86\u5417\uFF1F\u4E8C\u54E5\u201D\u4E09\u59B9\u4F3C\u4E4E\u8FD8\u6C89\u6D78\u5728\u8046\u542C\u6559\u8BF2\u7684\u5FEB\u4E50\u4E2D\u3002</p><p>\u201C\u662F\u6EF4\uFF0C\u8FD9\u6B21\u6211\u4EEC\u7CFB\u7EDF\u5316\u7684\u5B66\u4E60\u4E86\u62BD\u8C61\u7C7B\uFF0C\u53EF\u4EE5\u8BF4\u9762\u9762\u4FF1\u5230\u4E86\u3002\u4E09\u59B9\u4F60\u53EF\u4EE5\u628A\u4EE3\u7801\u6572\u4E00\u904D\uFF0C\u52A0\u5F3A\u4E86\u4E00\u4E9B\u5370\u8C61\uFF0C\u7535\u8111\u4EA4\u7ED9\u4F60\u4E86\u3002\u201D\u8BF4\u5B8C\uFF0C\u6211\u5C31\u8DD1\u5230\u9633\u53F0\u53BB\u62BD\u70DF\u4E86\u3002</p><p>\u201C\u547C\u3002\u3002\u3002\u3002\u3002\u201D\u4E00\u4E2A\u5927\u5927\u7684\u773C\u5708\u98D8\u6563\u5F00\u6765\uFF0C\u53C8\u662F\u6109\u5FEB\u7684\u4E00\u5929~</p><hr>`,70),r=s("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),d=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),k=s(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),v={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),b=n("p",null,[s("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),s("\uFF0C\u56DE\u590D"),n("strong",null,"111"),s(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),y=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function g(h,w){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[r,d,k,n("a",v,[m,l(a)])]),b,y])}var P=e(i,[["render",g],["__file","abstract.html.vue"]]);export{P as default};
