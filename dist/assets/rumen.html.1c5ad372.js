import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o,c,a as n,b as e,e as t,d as s}from"./app.36bfa2ec.js";const l={},r=t('<h1 id="redis\u5165\u95E8-\u9002\u5408\u65B0\u624B" tabindex="-1"><a class="header-anchor" href="#redis\u5165\u95E8-\u9002\u5408\u65B0\u624B" aria-hidden="true">#</a> Redis\u5165\u95E8(\u9002\u5408\u65B0\u624B)</h1><p>\u8BF4\u8D77\u6765\uFF0C\u53EF\u80FD\u6709\u4E9B\u5C0F\u4F19\u4F34\u4F1A\u4E0D\u76F8\u4FE1\uFF0C\u6211\u662F\u7B2C\u4E00\u6B21\u7528 Redis\uFF0C\u771F\u7684\u3002\u56E0\u4E3A\u516C\u53F8\u5C0F\uFF0C\u4E1A\u52A1\u91CF\u5C0F\uFF0CRedis \u6839\u672C\u6D3E\u4E0D\u4E0A\u7528\u573A\u3002\u4E0D\u8FC7\uFF0C\u6700\u8FD1\u6253\u7B97\u628A\u7CFB\u7EDF\u5347\u7EA7\u4E00\u4E0B\uFF0C\u987A\u5E26\u628A\u5F53\u4E0B\u65F6\u9AE6\u7684\u6280\u672F\u5165\u4E2A\u95E8\uFF0C\u201C\u4E0E\u65F6\u4FF1\u8FDB\u201D\u561B\uFF0C\u867D\u7136\u8FDB\u7684\u6709\u201C\u4E00\u70B9\u70B9\u201D\u665A\uFF08\u6CE8\u610F\u53CC\u5F15\u53F7\uFF09\u3002</p><p>\u4F5C\u4E3A\u4E00\u540D\u5BCC\u6709\u8D23\u4EFB\u5FC3\u7684\u6280\u672F\u535A\u4E3B\uFF0C\u6211\u89C9\u5F97\u6709\u5FC5\u8981\u628A\u6211\u5165\u95E8 Redis \u7684\u8FC7\u7A0B\u5206\u4EAB\u51FA\u6765\uFF0C\u4F9B\u4E00\u4E9B\u5C0F\u4F19\u4F34\u4F5C\u4E3A\u53C2\u8003\u3002\u8981\u662F\u6211\u54EA\u91CC\u5199\u9519\u4E86\uFF0C\u522B\u5BA2\u6C14\uFF0C\u8FC7\u6765\u7ED9\u6211\u4E00\u5DF4\u638C\uFF0C\u5C31\u884C\u4E86\uFF08\u6E29\u67D4\u70B9\uFF0C\u522B\u6253\u80BF\uFF0C\u5F71\u54CD\u989C\u503C\u5C31\u4E0D\u597D\u4E86\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-fe7d042b-efed-469c-9460-fb3bc1d4c041.jpg" alt=""></p><h3 id="_01\u3001redis-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_01\u3001redis-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 01\u3001Redis \u662F\u4EC0\u4E48</h3><p>Redis \u662F\u4E92\u8054\u7F51\u6280\u672F\u9886\u57DF\u4E2D\u4F7F\u7528\u6700\u5E7F\u6CDB\u7684\u5B58\u50A8\u4E2D\u95F4\u4EF6\uFF0C\u5B83\u662F <strong>Re</strong>mote <strong>Di</strong>ctionary <strong>S</strong>ervice \u4E09\u4E2A\u5355\u8BCD\u4E2D\u52A0\u7C97\u5B57\u6BCD\u7684\u7EC4\u5408\u3002\u4F60\u522B\u8BF4\uFF0C\u7EC4\u5408\u8D77\u6765\u540E\u5FF5\u7740\u633A\u81EA\u7136\u7684\u3002</p><p>Redis \u4EE5\u8D85\u9AD8\u7684\u6027\u80FD\u3001\u5B8C\u7F8E\u7684\u6587\u6863\u3001\u7B80\u6D01\u7684\u6E90\u7801\u8457\u79F0\uFF0C\u56FD\u5185\u5916\u5F88\u591A\u5927\u578B\u4E92\u8054\u7F51\u516C\u53F8\u90FD\u5728\u7528\uFF0C\u6BD4\u5982\u8BF4\u963F\u91CC\u3001\u817E\u8BAF\u3001GitHub\u3001Stack Overflow \u7B49\u7B49\u3002\u5B83\u7684\u7248\u672C\u66F4\u65B0\u975E\u5E38\u7684\u5FEB\uFF0C\u529F\u80FD\u4E5F\u8D8A\u6765\u8D8A\u5F3A\u5927\uFF0C\u6700\u521D\u53EA\u662F\u7528\u6765\u4F5C\u4E3A\u7F13\u5B58\u6570\u636E\u5E93\uFF0C\u73B0\u5728\u5DF2\u7ECF\u53EF\u4EE5\u7528\u5B83\u6765\u5B9E\u73B0\u6D88\u606F\u961F\u5217\u4E86\u3002</p><p>\u53EF\u4EE5\u8FD9\u4E48\u8BF4\u5427\uFF0C\u638C\u63E1 Redis \u5DF2\u7ECF\u53D8\u6210\u4E86\u4E00\u9879\u540E\u7AEF\u5DE5\u7A0B\u5E08\u5FC5\u987B\u5177\u5907\u7684\u57FA\u7840\u6280\u80FD\u3002</p><p>Redis \u7684\u4F5C\u8005\u662F\u4E00\u540D\u610F\u5927\u5229\u4EBA\uFF0C\u7F51\u540D Antirez\uFF0C\u957F\u76F8\u8FD8\u662F\u8FC7\u5F97\u53BB\u7684\uFF0C\u611F\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5 Google \u4E00\u4E0B\u3002\u77E5\u9053\u4E3A\u4EC0\u4E48 Redis \u7684\u9ED8\u8BA4\u7AEF\u53E3\u662F 6379 \u5417\uFF1F</p><p>\u636E\u8BF4\u662F\u624B\u673A\u952E\u76D8\u4E0A\u201CMERZ\u201D\u7684\u4F4D\u7F6E\u51B3\u5B9A\u7684\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u6253\u5F00\u81EA\u5DF1\u624B\u673A\u4E0A\u4E5D\u5BAB\u683C\u952E\u76D8\u611F\u53D7\u4E00\u4E0B\u3002\u201CMERZ\u201D\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u636E\u8BF4\u662F\u201C\u611A\u8822\u201D\u7684\u610F\u601D\u3002\u8FD9\uFF1F\u662F\u4E0D\u662F\u611F\u89C9\u7A0B\u5E8F\u5458\u7684\u751F\u6D3B\u4E2D\u8FD8\u662F\u6709\u86EE\u591A\u795E\u79D8\u8272\u5F69\u7684\uFF1F</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-ced599df-4791-4777-970f-20ceeeb39e68.jpg" alt=""></p><h3 id="_02\u3001\u5B89\u88C5-redis" tabindex="-1"><a class="header-anchor" href="#_02\u3001\u5B89\u88C5-redis" aria-hidden="true">#</a> 02\u3001\u5B89\u88C5 Redis</h3><p>Redis \u9488\u5BF9\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u6709\u4E0D\u540C\u7684\u5B89\u88C5\u65B9\u5F0F\uFF0C\u6211\u4EEC\u8FD9\u7BC7\u5165\u95E8\u7684\u6587\u7AE0\u5C31\u4EE5 Windows \u4E3A\u4F8B\u5427\u3002</p><p>\u4E0B\u8F7D\u5730\u5740\u5982\u4E0B\uFF1A</p>',14),d={href:"https://github.com/MicrosoftArchive/redis/releases",target:"_blank",rel:"noopener noreferrer"},u=s("https://github.com/MicrosoftArchive/redis/releases"),v=t(`<p>Windows \u6700\u65B0\u7684\u7248\u672C\u662F 3.2.100\u3002\u4ECE\u4E0B\u56FE\u4E2D\u53EF\u4EE5\u770B\u5F97\u51FA\uFF0CRedis \u7684\u4F53\u79EF\u975E\u5E38\u7684\u8F7B\u91CF\u7EA7\uFF0C\u8FD8\u4E0D\u5230 6 M\u3002\u4F53\u79EF\u8D8A\u5C0F\uFF0C\u8BA9\u6211\u611F\u89C9 Redis \u8D8A\u725B\u903C\uFF0C\u4F60\u662F\u4E0D\u662F\u4E5F\u6709\u8FD9\u79CD\u611F\u89C9\uFF1F</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-a6709cca-d3a3-4381-b110-0ff37d384f27.jpg" alt=""></p><p>\u6709\u4E24\u79CD\u5B89\u88C5\u65B9\u5F0F\uFF0C\u7B2C\u4E00\u79CD\u662F msi \u7684\u65B9\u5F0F\uFF0C\u53CC\u51FB\u8FD0\u884C\u540E\u5B89\u88C5\uFF1B\u7B2C\u4E8C\u79CD\u662F\u514D\u5B89\u88C5\uFF0C\u7EFF\u8272\u7248\uFF0C\u53EA\u9700\u8981\u628A zip \u5305\u89E3\u538B\u5C31\u53EF\u4EE5\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-f3fc9852-7505-45ed-8ce2-d16f1d888251.jpg" alt=""></p><p>\u91CC\u9762\u6709\u4E00\u4EFD\u82F1\u6587\u7248\u7684\u6587\u6863\u2014\u2014Windows Service Documentation.docx\uFF0C\u6559\u6211\u4EEC\u5982\u4F55\u5B89\u88C5 Redis \u670D\u52A1\u3001\u5982\u4F55\u542F\u52A8\u3001\u5982\u4F55\u5173\u95ED\uFF0C\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u7AEF\u53E3\u542F\u52A8\u670D\u52A1\u3002</p><p>\u6253\u5F00\u547D\u4EE4\u884C\uFF0C\u8FDB\u5165\u5230\u5F53\u524D\u89E3\u538B\u540E\u7684\u76EE\u5F55\uFF0C\u8F93\u5165\u542F\u52A8\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-server redis.windows.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u4F60\u5C31\u4F1A\u770B\u5230 Redis \u542F\u52A8\u540E\u7684\u6B22\u8FCE\u753B\u9762\uFF0C\u5DE6\u8FB9\u8FD9\u4E2A\u76D2\u5B50\u611F\u89C9\u597D\u6709\u827A\u672F\u611F\u554A\uFF01\u6709\u5C0F\u4F19\u4F34\u77E5\u9053\u662F\u600E\u4E48\u751F\u6210\u7684\u5417\uFF1F</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-69b11133-7aac-4f8a-aa1e-9e8af576ad32.jpg" alt=""></p><p>\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u63D0\u793A\u4FE1\u606F\uFF1A</p><ul><li>Redis \u5F53\u524D\u7684\u7248\u672C\u53F7\u4E3A 3.2.100</li><li>\u7AEF\u53E3\u662F 6379</li><li>\u8FDB\u7A0B ID\uFF0C\u4E5F\u5C31\u662F PID \u4E3A 12636</li><li>Redis \u5B98\u65B9\u5730\u5740\u4E3A\uFF1Ahttp://redis.io</li></ul><p>\u90A3\u5982\u4F55\u505C\u6B62\u670D\u52A1\u5462\uFF1F\u53EF\u4EE5\u76F4\u63A5\u6309\u4E0B <code>Ctrl+C</code> \u7EC4\u5408\u952E\u2014\u2014\u7C97\u66B4\u3001\u58C1\u549A\uFF08\u5F53\u7136\u53EF\u4EE5\u76F4\u63A5\u70B9\u53F3\u4E0A\u89D2\u7684\u53C9\u53F7\uFF09\u3002</p><p>PS\uFF1A\u672C\u6765\u60F3\u7528 Linux \u7248\u6216\u8005 OSX \u7248\u7684\uFF0C\u6015\u5165\u95E8\u7684\u5C0F\u4F19\u4F34\u6CA1\u6709\u73AF\u5883\u3002\u540E\u9762\u53EF\u4EE5\u6574\u4E00\u4E2A\u3002</p><h3 id="_03\u3001redis-\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_03\u3001redis-\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 03\u3001Redis \u7684\u6570\u636E\u7ED3\u6784</h3><p>Redis \u6709 5 \u79CD\u57FA\u7840\u6570\u636E\u7ED3\u6784\uFF0CString\u3001Hash\u3001List\u3001Set\u3001SortedSet\uFF0C\u4E5F\u662F\u5B66 Redis \u5FC5\u987B\u638C\u63E1\u7684\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u6709 HyperLogLog\u3001Geo\u3001Pub/Sub\uFF0C\u7B97\u662F\u9AD8\u7EA7\u6570\u636E\u7ED3\u6784\u4E86\u3002\u6211\u4EEC\u8FD9\u7BC7\u5165\u95E8\u7684\u6587\u7AE0\u5C31\u4EE5 String \u4E3A\u4F8B\u5427\u3002</p><p>String \u7ED3\u6784\u4F7F\u7528\u975E\u5E38\u5E7F\u6CDB\uFF0C\u6BD4\u5982\u8BF4\u628A\u7528\u6237\u7684\u767B\u9646\u4FE1\u606F\u8F6C\u6210 JSON \u5B57\u7B26\u4E32\u540E\u7F13\u5B58\u8D77\u6765\uFF0C\u7B49\u9700\u8981\u53D6\u51FA\u7684\u65F6\u5019\u518D\u53CD\u5E8F\u5217\u5316\u4E00\u6B21\u3002</p><p>\u5C0F\u4F19\u4F34\u4EEC\u5E94\u8BE5\u90FD\u77E5\u9053\uFF0CJava \u7684 String \u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u65E0\u6CD5\u4FEE\u6539\u3002Redis \u7684 String \u662F\u52A8\u6001\u7684\uFF0C\u53EF\u4EE5\u4FEE\u6539\u7684\uFF0C\u4E24\u8005\u4E0D\u540C\u54E6\u3002\u5173\u4E8E Redis \u7684 String \u7ED3\u6784\uFF0C\u6211\u89C9\u5F97\u8001\u94B1\u7684 Redis \u6559\u7A0B\u4E0A\u8BB2\u5F97\u975E\u5E38\u660E\u767D\uFF0C\u5927\u5BB6\u4E00\u8D77\u62DC\u8BFB\u4E0B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-d9aca13e-053e-4aea-a8cb-d77b01e5035a.jpg" alt=""></p><blockquote><p>Redis \u7684 String \u5728\u5185\u90E8\u7ED3\u6784\u5B9E\u73B0\u4E0A\u7C7B\u4F3C\u4E8E Java \u7684 ArrayList\uFF0C\u91C7\u7528\u9884\u5206\u914D\u5197\u4F59\u7A7A\u95F4\u7684\u65B9\u5F0F\u6765\u51CF\u5C11\u5185\u5B58\u7684\u9891\u7E41\u5206\u914D\u3002\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5F53\u524D\u5B57\u7B26\u4E32\u5B9E\u9645\u5206\u914D\u7684\u7A7A\u95F4\u4E3A capacity\uFF0C\u4E00\u822C\u9AD8\u4E8E\u5B9E\u9645\u7684\u5B57\u7B26\u4E32\u957F\u5EA6 len\u3002\u5F53\u5B57\u7B26\u4E32\u957F\u5EA6\u5C0F\u4E8E 1M \u65F6\uFF0C\u6269\u5BB9\u662F\u5BF9\u73B0\u6709\u7A7A\u95F4\u7684\u6210\u500D\u589E\u957F\uFF1B\u5982\u679C\u957F\u5EA6\u8D85\u8FC7 1M \u65F6\uFF0C\u6269\u5BB9\u4E00\u6B21\u53EA\u4F1A\u591A\u589E\u52A0 1M \u7684\u7A7A\u95F4\u3002\u6700\u5927\u957F\u5EA6\u4E3A 512M\u3002</p></blockquote><h3 id="_04\u3001\u5B9E\u64CD-redis" tabindex="-1"><a class="header-anchor" href="#_04\u3001\u5B9E\u64CD-redis" aria-hidden="true">#</a> 04\u3001\u5B9E\u64CD Redis</h3><p>\u597D\u4E86\u597D\u4E86\uFF0C\u6211\u4F30\u8BA1\u5F88\u591A\u5C0F\u4F19\u4F34\u4EEC\u5DF2\u7ECF\u6574\u88C5\u5F85\u53D1\uFF0C\u51C6\u5907\u5B9E\u64CD\u4E00\u628A\u4E86\u3002\u8FD9\u5C31\u6765\u3002</p><p>Redis \u7684\u89E3\u538B\u76EE\u5F55\u4E0B\u6709\u4E00\u4E2A\u540D\u53EB redis-cli.exe \u7684\u6587\u4EF6\uFF0C\u8FD9\u662F Redis \u81EA\u5E26\u7684\u4E00\u4E2A\u5BA2\u6237\u7AEF\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7528\u6765\u8FDE\u63A5\u4E4B\u524D\u6211\u4EEC\u542F\u52A8\u597D\u7684 Redis \u670D\u52A1\u3002\u53CC\u51FB\u542F\u52A8\u5B83\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-4fd63521-b07e-41c6-bcbd-b7acb2a81344.jpg" alt=""></p><p>\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u8FD8\u662F\u975E\u5E38\u667A\u80FD\u7684\uFF0C\u5F53\u952E\u5165\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F1A\u8DF3\u51FA\u5BF9\u5E94\u7684\u63D0\u793A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-6ca5d00d-4b5d-4475-a49c-9937e22f97af.jpg" alt=""></p><p>\u5F53\u6309\u4E0B\u7A7A\u683C\u8DDF\u8FDB\u5173\u952E\u5B57\u7684\u65F6\u5019\uFF0C\u5BF9\u5E94\u4F4D\u7F6E\u4E0A\u7684\u63D0\u793A\u4F1A\u81EA\u52A8\u6D88\u5931\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-656ec70a-c053-44ab-b078-a5c77386bee6.jpg" alt=""></p><p>\u4EE5\u4E0B\u662F\u5B8C\u6574\u7684\u952E\u503C\u5BF9\u6D4B\u8BD5\u547D\u4EE4\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u6309\u7167\u683C\u5F0F\u52A8\u624B\u5B9E\u64CD\u4E00\u628A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; set name cmower
OK
&gt; get name
&quot;cmower&quot;
&gt; exists name
(integer) 1
&gt; del name
(integer) 1
&gt; get name
(nil)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1\uFF09set \u547D\u4EE4\u7528\u6765\u5B58\u50A8\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C\u5728\u672C\u4F8B\u4E2D\uFF0Cname \u4E3A key\uFF0Ccmower \u4E3A \u503C\u3002</p><p>2\uFF09get \u547D\u4EE4\u7528\u6765\u83B7\u53D6\u4E00\u4E2A\u952E\u503C\u5BF9\u3002</p><p>3\uFF09exists \u547D\u4EE4\u7528\u6765\u6D4B\u8BD5\u4E00\u4E2A\u952E\u503C\u5BF9\u662F\u5426\u5B58\u5728\uFF0C<code>(integer) 1</code> \u8868\u793A\u5B58\u5728\uFF0C<code>(integer) 0</code> \u8868\u793A\u4E0D\u5B58\u5728\u3002</p><p>4\uFF09del \u547D\u4EE4\u7528\u6765\u5220\u9664\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C<code>(integer) 1</code> \u8868\u793A\u6267\u884C\u6210\u529F\uFF0C<code>(integer) 0</code> \u8868\u793A\u6267\u884C\u5931\u8D25\u3002</p><p>5\uFF09\u5F53\u952E\u503C\u5BF9\u5220\u9664\u540E\uFF0C\u518D\u901A\u8FC7 get \u547D\u4EE4\u83B7\u53D6\u65F6\uFF0C\u7ED3\u679C\u5C31\u4E3A <code>(nil)</code> \u3002</p><p>\u53EF\u80FD\u6709\u5C0F\u4F19\u4F34\u4F1A\u597D\u5947\uFF0C<code>nil</code> \u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u5B83\u662F Objective-C\u3001Swift\u3001Ruby\u3001Lua \u7B49\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u4E00\u4E2A\u5173\u952E\u5B57\uFF0C\u66F4\u8BE6\u7EC6\u7684\u89E3\u91CA\u53EF\u4EE5\u770B\u4E00\u4E0B\u300AProgramming in Lua \u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u4E8C\u7248\u300B\uFF1A</p><blockquote><p>nil \u662F\u4E00\u79CD\u7C7B\u578B\uFF0C\u5B83\u53EA\u6709\u4E00\u4E2A\u503C nil\uFF0C\u5B83\u7684\u4E3B\u8981\u529F\u80FD\u662F\u7528\u4E8E\u533A\u522B\u5176\u4ED6\u4EFB\u4F55\u503C\uFF0C\u5C31\u50CF\u4E4B\u524D\u6240\u8BF4\u7684\uFF0C\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u5728\u7B2C\u4E00\u6B21\u8D4B\u503C\u524D\u7684\u9ED8\u8BA4\u503C\u5C31\u662F nil\uFF0C\u5C06 nil \u8D4B\u4E88\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u7B49\u540C\u4E8E\u5220\u9664\u5B83\uFF0CLua \u5C06 nil \u7528\u4E8E\u8868\u793A\u4E00\u79CD\u201C\u65E0\u6548\u503C(non-value)\u201D\u7684\u60C5\u51B5\uFF0C\u5373\u6CA1\u6709\u4EFB\u4F55\u6709\u6548\u503C\u7684\u60C5\u51B5\u3002</p></blockquote><p>\u60F3\u4E86\u89E3 Redis \u547D\u4EE4\u7684\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u94FE\u63A5\uFF1A</p>`,37),k={href:"http://redisdoc.com/index.html",target:"_blank",rel:"noopener noreferrer"},m=s("http://redisdoc.com/index.html"),b=s("\u662F "),g={href:"http://redis.io/commands",target:"_blank",rel:"noopener noreferrer"},h=s("Redis Command Reference"),f=s(" \u548C "),_={href:"http://redis.io/documentation",target:"_blank",rel:"noopener noreferrer"},R=s("Redis Documentation"),j=s(" \u7684\u4E2D\u6587\u7FFB\u8BD1\u7248\uFF0C\u826F\u5FC3\u5427\uFF1F"),x=t(`<h3 id="_05\u3001\u5728-java-\u4E2D\u4F7F\u7528-redis" tabindex="-1"><a class="header-anchor" href="#_05\u3001\u5728-java-\u4E2D\u4F7F\u7528-redis" aria-hidden="true">#</a> 05\u3001\u5728 Java \u4E2D\u4F7F\u7528 Redis</h3><p>\u6709\u4E9B\u5C0F\u4F19\u4F34\u53EF\u80FD\u4F1A\u95EE\uFF0C\u201C\u4E8C\u54E5\uFF0C\u6211\u662F\u4E00\u540D Java \u7A0B\u5E8F\u5458\uFF0C\u6211\u8BE5\u5982\u4F55\u5728 Java \u4E2D\u4F7F\u7528 Redis \u5462\uFF1F\u201D\u8FD9\u4E2A\u95EE\u9898\u95EE\u5F97\u597D\uFF0C\u8FD9\u5C31\u6765\uFF0C\u8FD9\u5C31\u6765\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u5728\u9879\u76EE\u4E2D\u6DFB\u52A0 Jedis\uFF08Java \u548C Redis \u7684\u6DF7\u62FC\uFF09 \u4F9D\u8D56\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;redis.clients&lt;/groupId&gt;
    &lt;artifactId&gt;jedis&lt;/artifactId&gt;
    &lt;version&gt;3.2.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u65B0\u5EFA UserInfo\uFF08\u7528\u6237\u4FE1\u606F\uFF09\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;UserInfo{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// getter / setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u6B65\uFF0C\u5728\u9879\u76EE\u4E2D\u6DFB\u52A0 Gson\uFF08\u7528\u4E8E\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u7528\u6237\u4FE1\u606F\uFF09 \u4F9D\u8D56\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.google.code.gson&lt;/groupId&gt;
    &lt;artifactId&gt;gson&lt;/artifactId&gt;
    &lt;version&gt;2.8.6&lt;/version&gt;
    &lt;scope&gt;compile&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u56DB\u6B65\uFF0C\u65B0\u5EFA\u6D4B\u8BD5\u7C7B RedisTest\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> REDIS_KEY <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Gson</span> gson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserInfo</span> userInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        jedis<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>REDIS_KEY<span class="token punctuation">,</span> gson<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserInfo</span> getUserInfoFromRedis <span class="token operator">=</span> gson<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>REDIS_KEY<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;get\uFF1A&quot;</span> <span class="token operator">+</span> getUserInfoFromRedis<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;exists\uFF1A&quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>REDIS_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;del\uFF1A&quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span>REDIS_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;get\uFF1A&quot;</span> <span class="token operator">+</span> jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>REDIS_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1\uFF09REDIS_KEY \u5E38\u91CF\u4E3A\u5B58\u50A8\u7528\u6237\u4FE1\u606F\u5230 Redis \u7684 key\u3002</p><p>2\uFF09\u5728 Jedis \u7684\u5E2E\u52A9\u4E0B\uFF0CJava \u8FDE\u63A5 Redis \u670D\u52A1\u53D8\u5F97\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u4E00\u884C\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u5206\u522B\u662F\u4E3B\u673A\u540D\uFF0C\u7AEF\u53E3\u53F7\u3002</p><p>\u5B58\u50A8\u952E\u503C\u5BF9\u7528 <code>set()</code> \u65B9\u6CD5\uFF0C\u83B7\u53D6\u952E\u503C\u5BF9\u7528 <code>get()</code> \u65B9\u6CD5\uFF0C\u5224\u65AD\u952E\u503C\u5BF9\u662F\u5426\u5B58\u5728\u7528 <code>exists()</code> \u65B9\u6CD5\uFF0C\u5220\u9664\u952E\u503C\u5BF9\u7528 <code>del()</code> \u65B9\u6CD5\u3002</p><p>3\uFF09Gson \u662F\u8C37\u6B4C\u63D0\u4F9B\u7684\u4E00\u4E2A\u5F00\u6E90\u5E93\uFF0C\u53EF\u4EE5\u5C06 Java \u5BF9\u8C61\u5E8F\u5217\u5316\u4E3A JSON \u5B57\u7B26\u4E32\uFF0C\u540C\u6837\u53EF\u4EE5\u5C06 JSON \u5B57\u7B26\u4E32\u53CD\u5E8F\u5217\u5316\uFF08\u89E3\u6790\uFF09\u4E3A\u5339\u914D\u7684 Java \u5BF9\u8C61\u3002</p><p>\u4F7F\u7528\u8D77\u6765\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C<code>toJson()</code> \u65B9\u6CD5\u5C06\u5BF9\u8C61\u8F6C\u6210 JSON \u5B57\u7B26\u4E32\uFF0C<code>fromJson()</code> \u65B9\u6CD5\u5C06 JSON \u5B57\u7B26\u4E32\u53CD\u5E8F\u5217\u5316\u5BF9\u8C61\u3002</p><p>\u597D\u4E86\uFF0C\u6765\u770B\u4E00\u4E0B\u7A0B\u5E8F\u7684\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>get\uFF1AUserInfo{name=&#39;\u6C89\u9ED8\u738B\u4E8C&#39;, age=18}
exists\uFF1Atrue
del\uFF1A1
get\uFF1Anull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B8C\u5168\u7B26\u5408\u6211\u4EEC\u7684\u9884\u671F\uFF0Cperfect\uFF01</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-7135d995-f563-4021-b364-411b1be07b5a.jpg" alt=""></p><h3 id="_06\u3001\u9E23\u8C22" tabindex="-1"><a class="header-anchor" href="#_06\u3001\u9E23\u8C22" aria-hidden="true">#</a> 06\u3001\u9E23\u8C22</h3><p>\u597D\u4E86\uFF0C\u6211\u4EB2\u7231\u7684\u5C0F\u4F19\u4F34\u4EEC\uFF0C\u4EE5\u4E0A\u5C31\u662F\u672C\u6587\u7684\u5168\u90E8\u5185\u5BB9\u4E86\uFF0C\u662F\u4E0D\u662F\u770B\u5B8C\u540E\u5F88\u60F3\u5B9E\u64CD\u4E00\u628A Redis\uFF0C\u8D76\u5FEB\u884C\u52A8\u5427\uFF01\u5982\u679C\u4F60\u5728\u5B66\u4E60\u7684\u8FC7\u7A0B\u4E2D\u9047\u5230\u4E86\u95EE\u9898\uFF0C\u6B22\u8FCE\u968F\u65F6\u548C\u6211\u4EA4\u6D41\uFF0C\u867D\u7136\u6211\u4E5F\u662F\u4E2A\u83DC\u9E1F\uFF0C\u4F46\u6211\u6709\u70ED\u60C5\u554A\u3002</p><p>\u53E6\u5916\uFF0C\u5982\u679C\u4F60\u60F3\u5199\u5165\u95E8\u7EA7\u522B\u7684\u6587\u7AE0\uFF0C\u8FD9\u7BC7\u5C31\u662F\u6700\u597D\u7684\u8303\u4F8B\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,25);function S(y,w){const a=i("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[n("a",d,[u,e(a)])]),v,n("p",null,[n("a",k,[m,e(a)])]),n("p",null,[b,n("a",g,[h,e(a)]),f,n("a",_,[R,e(a)]),j]),x])}var J=p(l,[["render",S],["__file","rumen.html.vue"]]);export{J as default};
