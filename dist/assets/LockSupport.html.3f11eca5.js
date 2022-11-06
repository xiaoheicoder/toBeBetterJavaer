import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o,c,a as n,b as t,e as l,d as a}from"./app.36bfa2ec.js";const i={},u=l(`<h1 id="\u6DF1\u5165\u7406\u89E3java\u5E76\u53D1\u7EBF\u7A0B\u963B\u585E\u5524\u9192\u7C7Blocksupport" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3java\u5E76\u53D1\u7EBF\u7A0B\u963B\u585E\u5524\u9192\u7C7Blocksupport" aria-hidden="true">#</a> \u6DF1\u5165\u7406\u89E3Java\u5E76\u53D1\u7EBF\u7A0B\u963B\u585E\u5524\u9192\u7C7BLockSupport</h1><p>LockSupport\u4F4D\u4E8Ejava.util.concurrent.locks\u5305\u4E0B\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u76F4\u63A5\u53BB\u770B\u6E90\u7801\uFF0C\u8BE5\u7C7B\u7684\u65B9\u6CD5\u5E76\u4E0D\u662F\u5F88\u591A\u3002LockSupprot\u662F\u7EBF\u7A0B\u7684\u963B\u585E\u539F\u8BED\uFF0C\u7528\u6765\u963B\u585E\u7EBF\u7A0B\u548C\u5524\u9192\u7EBF\u7A0B\u3002\u6BCF\u4E2A\u4F7F\u7528LockSupport\u7684\u7EBF\u7A0B\u90FD\u4F1A\u4E0E\u4E00\u4E2A\u8BB8\u53EF\u5173\u8054\uFF0C\u5982\u679C\u8BE5\u8BB8\u53EF\u53EF\u7528\uFF0C\u5E76\u4E14\u53EF\u5728\u7EBF\u7A0B\u4E2D\u4F7F\u7528\uFF0C\u5219\u8C03\u7528park()\u5C06\u4F1A\u7ACB\u5373\u8FD4\u56DE\uFF0C\u5426\u5219\u53EF\u80FD\u963B\u585E\u3002\u5982\u679C\u8BB8\u53EF\u5C1A\u4E0D\u53EF\u7528\uFF0C\u5219\u53EF\u4EE5\u8C03\u7528 unpark \u4F7F\u5176\u53EF\u7528\u3002\u4F46\u662F\u6CE8\u610F\u8BB8\u53EF<strong>\u4E0D\u53EF\u91CD\u5165</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EA\u80FD\u8C03\u7528\u4E00\u6B21park()\u65B9\u6CD5\uFF0C\u5426\u5219\u4F1A\u4E00\u76F4\u963B\u585E\u3002</p><p>LockSupport\u4E2D\u7684\u65B9\u6CD5\u4E0D\u591A\uFF0C\u8FD9\u91CC\u5C06\u8FD9\u4E9B\u65B9\u6CD5\u505A\u4E00\u4E2A\u603B\u7ED3\uFF1A</p><h2 id="\u963B\u585E\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u963B\u585E\u7EBF\u7A0B" aria-hidden="true">#</a> <strong>\u963B\u585E\u7EBF\u7A0B</strong></h2><ol><li><code>void park()</code>\uFF1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\uFF0C\u5982\u679C\u8C03\u7528unpark\u65B9\u6CD5\u6216\u8005\u5F53\u524D\u7EBF\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u4ECE\u80FD\u4ECEpark()\u65B9\u6CD5\u4E2D\u8FD4\u56DE</li><li><code>void park(Object blocker)</code>\uFF1A\u529F\u80FD\u540C\u65B9\u6CD51\uFF0C\u5165\u53C2\u589E\u52A0\u4E00\u4E2AObject\u5BF9\u8C61\uFF0C\u7528\u6765\u8BB0\u5F55\u5BFC\u81F4\u7EBF\u7A0B\u963B\u585E\u7684\u963B\u585E\u5BF9\u8C61\uFF0C\u65B9\u4FBF\u8FDB\u884C\u95EE\u9898\u6392\u67E5\uFF1B</li><li><code>void parkNanos(long nanos)</code>\uFF1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\uFF0C\u6700\u957F\u4E0D\u8D85\u8FC7nanos\u7EB3\u79D2\uFF0C\u589E\u52A0\u4E86\u8D85\u65F6\u8FD4\u56DE\u7684\u7279\u6027\uFF1B</li><li><code>void parkNanos(Object blocker, long nanos)</code>\uFF1A\u529F\u80FD\u540C\u65B9\u6CD53\uFF0C\u5165\u53C2\u589E\u52A0\u4E00\u4E2AObject\u5BF9\u8C61\uFF0C\u7528\u6765\u8BB0\u5F55\u5BFC\u81F4\u7EBF\u7A0B\u963B\u585E\u7684\u963B\u585E\u5BF9\u8C61\uFF0C\u65B9\u4FBF\u8FDB\u884C\u95EE\u9898\u6392\u67E5\uFF1B</li><li><code>void parkUntil(long deadline)</code>\uFF1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\uFF0C\u77E5\u9053deadline\uFF1B</li><li><code>void parkUntil(Object blocker, long deadline)</code>\uFF1A\u529F\u80FD\u540C\u65B9\u6CD55\uFF0C\u5165\u53C2\u589E\u52A0\u4E00\u4E2AObject\u5BF9\u8C61\uFF0C\u7528\u6765\u8BB0\u5F55\u5BFC\u81F4\u7EBF\u7A0B\u963B\u585E\u7684\u963B\u585E\u5BF9\u8C61\uFF0C\u65B9\u4FBF\u8FDB\u884C\u95EE\u9898\u6392\u67E5\uFF1B</li></ol><h2 id="\u5524\u9192\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5524\u9192\u7EBF\u7A0B" aria-hidden="true">#</a> <strong>\u5524\u9192\u7EBF\u7A0B</strong></h2><p><code>void unpark(Thread thread)</code>:\u5524\u9192\u5904\u4E8E\u963B\u585E\u72B6\u6001\u7684\u6307\u5B9A\u7EBF\u7A0B</p><p>\u5B9E\u9645\u4E0ALockSupport\u963B\u585E\u548C\u5524\u9192\u7EBF\u7A0B\u7684\u529F\u80FD\u662F\u4F9D\u8D56\u4E8Esun.misc.Unsafe\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F88\u5E95\u5C42\u7684\u7C7B\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u53BB\u67E5\u9605\u8D44\u6599\uFF0C\u6BD4\u5982park()\u65B9\u6CD5\u7684\u529F\u80FD\u5B9E\u73B0\u5219\u662F\u9760unsafe.park()\u65B9\u6CD5\u3002</p><p>\u53E6\u5916\u5728\u963B\u585E\u7EBF\u7A0B\u8FD9\u4E00\u7CFB\u5217\u65B9\u6CD5\u4E2D\u8FD8\u6709\u4E00\u4E2A\u5F88\u6709\u610F\u601D\u7684\u73B0\u8C61\u5C31\u662F\uFF0C\u6BCF\u4E2A\u65B9\u6CD5\u90FD\u4F1A\u65B0\u589E\u4E00\u4E2A\u5E26\u6709Object\u7684\u963B\u585E\u5BF9\u8C61\u7684\u91CD\u8F7D\u65B9\u6CD5\u3002\u90A3\u4E48\u589E\u52A0\u4E86\u4E00\u4E2AObject\u5BF9\u8C61\u7684\u5165\u53C2\u4F1A\u6709\u4EC0\u4E48\u4E0D\u540C\u7684\u5730\u65B9\u4E86\uFF1F\u793A\u4F8B\u4EE3\u7801\u5F88\u7B80\u5355\u5C31\u4E0D\u8BF4\u4E86\uFF0C\u76F4\u63A5\u770Bdump\u7EBF\u7A0B\u7684\u4FE1\u606F\u3002</p><p><strong>\u8C03\u7528park()\u65B9\u6CD5dump\u7EBF\u7A0B</strong>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token string">&quot;main&quot;</span> #<span class="token number">1</span> prio<span class="token operator">=</span><span class="token number">5</span> os_prio<span class="token operator">=</span><span class="token number">0</span> tid<span class="token operator">=</span><span class="token number">0x02cdcc00</span> nid<span class="token operator">=</span><span class="token number">0x2b48</span> waiting on condition <span class="token punctuation">[</span><span class="token number">0x00d6f000</span><span class="token punctuation">]</span>
   <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Thread<span class="token punctuation">.</span>State</span><span class="token operator">:</span> WAITING <span class="token punctuation">(</span>parking<span class="token punctuation">)</span>
        at <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Unsafe</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token class-name">Native</span> <span class="token class-name">Method</span><span class="token punctuation">)</span>
        at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span>LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token class-name">LockSupport</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">304</span><span class="token punctuation">)</span>
        at <span class="token class-name"><span class="token namespace">learn<span class="token punctuation">.</span></span>LockSupportDemo</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">LockSupportDemo</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8C03\u7528park(Object blocker)\u65B9\u6CD5dump\u7EBF\u7A0B</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;main&quot; #1 prio=5 os_prio=0 tid=0x0069cc00 nid=0x6c0 waiting on condition [0x00dcf000]
   java.lang.Thread.State: WAITING (parking)
        at sun.misc.Unsafe.park(Native Method)
        - parking to wait for  &lt;0x048c2d18&gt; (a java.lang.String)
        at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)
        at learn.LockSupportDemo.main(LockSupportDemo.java:7)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u5206\u522B\u8C03\u7528\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7136\u540Edump\u7EBF\u7A0B\u4FE1\u606F\u53EF\u4EE5\u770B\u51FA\uFF0C\u5E26Object\u7684park\u65B9\u6CD5\u76F8\u8F83\u4E8E\u65E0\u53C2\u7684park\u65B9\u6CD5\u4F1A\u589E\u52A0 <code>parking to wait for &lt;0x048c2d18&gt; (a java.lang.String\uFF09</code>\u7684\u4FE1\u606F\uFF0C\u8FD9\u79CD\u4FE1\u606F\u5C31\u7C7B\u4F3C\u4E8E\u8BB0\u5F55\u201C\u6848\u53D1\u73B0\u573A\u201D\uFF0C\u6709\u52A9\u4E8E\u5DE5\u7A0B\u4EBA\u5458\u80FD\u591F\u8FC5\u901F\u53D1\u73B0\u95EE\u9898\u89E3\u51B3\u95EE\u9898\u3002</p><p>\u6709\u4E2A\u6709\u610F\u601D\u7684\u4E8B\u60C5\u662F\uFF0C\u6211\u4EEC\u90FD\u77E5\u9053\u5982\u679C\u4F7F\u7528synchronzed\u963B\u585E\u4E86\u7EBF\u7A0Bdump\u7EBF\u7A0B\u65F6\u90FD\u4F1A\u6709\u963B\u585E\u5BF9\u8C61\u7684\u63CF\u8FF0\uFF0C\u5728java 5\u63A8\u51FALockSupport\u65F6\u9057\u6F0F\u4E86\u8FD9\u4E00\u70B9\uFF0C\u5728java 6\u65F6\u8FDB\u884C\u4E86\u8865\u5145\u3002</p><p>\u8FD8\u6709\u4E00\u70B9\u9700\u8981\u9700\u8981\u7684\u662F\uFF1A<strong>synchronzed\u81F4\u4F7F\u7EBF\u7A0B\u963B\u585E\uFF0C\u7EBF\u7A0B\u4F1A\u8FDB\u5165\u5230BLOCKED\u72B6\u6001\uFF0C\u800C\u8C03\u7528LockSupprt\u65B9\u6CD5\u963B\u585E\u7EBF\u7A0B\u4F1A\u81F4\u4F7F\u7EBF\u7A0B\u8FDB\u5165\u5230WAITING\u72B6\u6001\u3002</strong></p><p>\u7528\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u4F8B\u5B50\u8BF4\u8BF4\u8FD9\u4E9B\u65B9\u6CD5\u600E\u4E48\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LockSupportDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u88AB\u5524\u9192&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>thread\u7EBF\u7A0B\u8C03\u7528LockSupport.park()\u81F4\u4F7Fthread\u963B\u585E\uFF0C\u5F53mian\u7EBF\u7A0B\u7761\u77203\u79D2\u7ED3\u675F\u540E\u901A\u8FC7LockSupport.unpark(thread)\u65B9\u6CD5\u5524\u9192thread\u7EBF\u7A0B,thread\u7EBF\u7A0B\u88AB\u5524\u9192\u6267\u884C\u540E\u7EED\u64CD\u4F5C\u3002\u53E6\u5916\uFF0C\u8FD8\u6709\u4E00\u70B9\u503C\u5F97\u5173\u6CE8\u7684\u662F\uFF0C<strong><code>LockSupport.unpark(thread)</code>\u53EF\u4EE5\u6307\u5B9A\u7EBF\u7A0B\u5BF9\u8C61\u5524\u9192\u6307\u5B9A\u7684\u7EBF\u7A0B</strong>\u3002</p><hr>`,20),r=n("p",null,"\u7F16\u8F91\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u5185\u5BB9\u5927\u90E8\u5206\u6765\u6E90\u4EE5\u4E0B\u4E09\u4E2A\u5F00\u6E90\u4ED3\u5E93\uFF1A",-1),k={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},d=a("\u6DF1\u5165\u6D45\u51FA Java \u591A\u7EBF\u7A0B"),v={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},m=a("\u5E76\u53D1\u7F16\u7A0B\u77E5\u8BC6\u603B\u7ED3"),h={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},b=a("Java\u516B\u80A1\u6587"),g=n("hr",null,null,-1),_=a("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),f=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),j=a(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),S={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},L=a("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),x=n("p",null,[a("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),a("\uFF0C\u56DE\u590D"),n("strong",null,"111"),a(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),y=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function w(N,T){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[r,n("ul",null,[n("li",null,[n("a",k,[d,t(s)])]),n("li",null,[n("a",v,[m,t(s)])]),n("li",null,[n("a",h,[b,t(s)])])])]),g,n("p",null,[_,f,j,n("a",S,[L,t(s)])]),x,y])}var D=p(i,[["render",w],["__file","LockSupport.html.vue"]]);export{D as default};
