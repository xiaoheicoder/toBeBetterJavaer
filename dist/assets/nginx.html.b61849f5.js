import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as s,c as l,a as n,b as d,e as i,d as e}from"./app.36bfa2ec.js";const o={},c=i('<h1 id="_5\u5206\u949F\u5E26\u4F60\u6DF1\u5165\u6D45\u51FA\u641E\u61C2-nginx" tabindex="-1"><a class="header-anchor" href="#_5\u5206\u949F\u5E26\u4F60\u6DF1\u5165\u6D45\u51FA\u641E\u61C2-nginx" aria-hidden="true">#</a> 5\u5206\u949F\u5E26\u4F60\u6DF1\u5165\u6D45\u51FA\u641E\u61C2 Nginx</h1><p>\u6700\u8FD1\u5728\u642D\u5EFA\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u5C31\u4E0D\u53EF\u907F\u514D\u5730\u8981\u7528\u5230 Nginx\uFF0C\u7D22\u6027\u5C31\u51FA\u4E00\u671F Nginx \u7684\u5165\u95E8\u6559\u7A0B\uFF0C\u5E0C\u671B\u4E5F\u53EF\u4EE5\u5E2E\u52A9\u5230\u5927\u5BB6~\u{1F601}</p><p>\u4F5C\u4E3A\u5F00\u53D1\u8005\uFF0C\u76F8\u4FE1\u5927\u5BB6\u90FD\u77E5\u9053 Nginx \u7684\u91CD\u8981\u6027\u3002Nginx \u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684 HTTP \u548C\u53CD\u5411\u4EE3\u7406 Web \u670D\u52A1\u5668\uFF0C\u7531\u4FC4\u7F57\u65AF\u7684\u4F0A\u6208\u5C14\xB7\u8D5B\u7D22\u8036\u592B\u5F00\u53D1\uFF0C\u7B2C\u4E00\u4E2A\u7248\u672C\u53D1\u5E03\u4E8E 2004 \u5E74 10 \u6708 4 \u65E5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-01.png" alt=""></p><p>Nginx \u7684\u7279\u70B9\u662F\uFF1A</p><ul><li>\u5185\u5B58\u5360\u7528\u5C11</li><li>\u5E76\u53D1\u80FD\u529B\u5F3A\uFF08\u53EF\u652F\u6301\u5927\u7EA6 50000 \u4E2A\u5E76\u53D1\u8FDE\u63A5\uFF09</li><li>\u914D\u7F6E\u8D85\u7B80\u6D01</li><li>bug \u975E\u5E38\u5C11</li><li>\u5B89\u88C5\u8D85\u7B80\u5355</li><li>\u670D\u52A1\u7279\u522B\u7A33\uFF08\u51E0\u4E2A\u6708\u4E5F\u4E0D\u9700\u8981\u91CD\u542F\uFF09</li></ul><p>\u57FA\u4E8E\u8FD9\u4E9B\u7279\u70B9\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u7F51\u7AD9\u5F00\u59CB\u4F7F\u7528 Nginx\u3002\u4E8E\u662F\uFF0C\u638C\u63E1 Nginx \u5C31\u53D8\u6210\u4E86\u5F00\u53D1\u8005\u7684\u4E00\u9879\u5FC5\u4E0D\u53EF\u5C11\u7684\u6280\u80FD\u3002</p><h3 id="\u4E00\u3001nginx-\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001nginx-\u7684\u4F5C\u7528" aria-hidden="true">#</a> \u4E00\u3001Nginx \u7684\u4F5C\u7528</h3><p><strong>\u53CD\u5411\u4EE3\u7406</strong>\u662F Nginx \u4F5C\u4E3A Web \u670D\u52A1\u5668\u6700\u5E38\u7528\u7684\u529F\u80FD\u4E4B\u4E00\u3002\u4EC0\u4E48\u662F\u53CD\u5411\u4EE3\u7406\u5462\uFF1F\u5F88\u591A\u521D\u5B66\u8005\u5728\u7B2C\u4E00\u6B21\u9047\u5230\u8FD9\u4E2A\u540D\u8BCD\u7684\u65F6\u5019\u603B\u514D\u4E0D\u4E86\u51FA\u73B0\u5F88\u591A\u95EE\u53F7\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-02.png" alt=""></p><p>\u90A3\u8981\u60F3\u641E\u660E\u767D\u4EC0\u4E48\u662F\u53CD\u5411\u4EE3\u7406\uFF0C\u5C31\u5FC5\u987B\u5F97\u641E\u660E\u767D\u4EC0\u4E48\u662F\u6B63\u5411\u4EE3\u7406\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5C0F\u4E8C\u7684\u6D4F\u89C8\u5668\u662F\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u8C37\u54E5\u7684\uFF0C\u4F46\u9999\u6E2F\u7684\u4EE3\u7406\u670D\u52A1\u5668\u662F\u53EF\u4EE5\u8BBF\u95EE\u8C37\u54E5\u7684\uFF0C\u4E8E\u662F\u5C0F\u4E8C\u8BBF\u95EE\u4E86\u9999\u6E2F\u7684\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4E5F\u5C31\u95F4\u63A5\u5730\u8BBF\u95EE\u4E86\u8C37\u54E5\u3002\u90A3\u8FD9\u53F0\u4EE3\u7406\u670D\u52A1\u5668\u4E5F\u5C31\u662F<strong>\u6B63\u5411\u4EE3\u7406</strong>\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-03.png" alt=""></p><p>\u603B\u7ED3\u4E00\u53E5\u5C31\u662F\uFF0C<strong>\u6B63\u5411\u4EE3\u7406\u662F\u4EE3\u7406\u5BA2\u6237\u7AEF\u7684</strong>\uFF0C\u8BA9\u4F60\u80FD\u6B63\u5E38\u8BBF\u95EE\u76EE\u7684\u670D\u52A1\u5668\u3002</p><p>\u4E0E\u4E4B\u76F8\u53CD\uFF0C<strong>\u53CD\u5411\u4EE3\u7406\u662F\u4EE3\u7406\u670D\u52A1\u5668\u7684</strong>\uFF0C\u8BA9\u5927\u91CF\u7684\u8BF7\u6C42\u5747\u8861\u5730\u8BBF\u95EE\u5230\u67D0\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C10 \u4E07\u4E2A\u5C0F\u4E8C\u540C\u65F6\u5728\u8BBF\u95EE itwanger.com\uFF0C \u5982\u679C\u53EA\u6709\u4E00\u53F0\u670D\u52A1\u5668\u7684\u8BDD\uFF0C\u5F88\u5BB9\u6613\u5C31\u762B\u75EA\u4E86\uFF0C\u4E8E\u662F\u9AD8\u5E76\u53D1\u7684\u60C5\u51B5\u4E0B\u4F1A\u6709\u5F88\u591A\u53F0\u670D\u52A1\u5668\uFF08\u5047\u5982 10 \u53F0\u5427\uFF09\u6765\u63A5\u8FD9\u4E2A\u6D3B\uFF0C\u90A3\u600E\u4E48\u8BA9 10 \u4E07\u4E2A\u5C0F\u4E8C\u8BBF\u95EE\u5230\u8FD9 10 \u53F0\u670D\u52A1\u5668\u5462\uFF1F</p><p>\u8FD9\u5C31\u9700\u8981\u4E00\u4E2A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u4E86\uFF0C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u8BA9 1 \u4E07\u4E2A\u5C0F\u4E8C\u8BBF\u95EE\u670D\u52A1\u5668 A\uFF0C1 \u4E07\u4E2A\u5C0F\u4E8C\u8BBF\u95EE\u670D\u52A1\u5668 B\uFF0C1 \u4E2A\u5C0F\u4E8C\u8BBF\u95EE\u670D\u52A1\u5668 C\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u6BCF\u53F0\u670D\u52A1\u5668\u7684\u538B\u529B\u5C31\u76F8\u5E94\u51CF\u5C0F\u4E86\uFF0C\u662F\u4E0D\u662F\u5F88 nice\uFF1F</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-04.png" alt=""></p><p>\u90A3\u95EE\u9898\u6765\u4E86\u3002\u6BCF\u53F0\u670D\u52A1\u5668\u7684\u80FD\u529B\u53EF\u80FD\u4E0D\u540C\uFF0C\u6BD4\u5982\u8BF4\u670D\u52A1\u5668 A \u7684\u5185\u5B58\u6BD4\u8F83\u5927\u4E00\u70B9\uFF0C\u6709 100 \u4E2A G\uFF1B\u670D\u52A1\u5668 B \u7684\u5185\u5B58\u5C0F\u4E00\u70B9\uFF0C\u6709 10 \u4E2A G\uFF1B\u670D\u52A1\u5668 C \u7684\u5185\u5B58\u66F4\u5C0F\u4E00\u70B9\uFF0C\u53EA\u6709 1 \u4E2A G\u3002\u600E\u4E48\u624D\u80FD\u8BA9\u6CA1\u53F0\u670D\u52A1\u5668\u627F\u62C5\u8D77\u5B83\u80FD\u529B\u8303\u56F4\u5185\u7684\u8BBF\u95EE\u5462\uFF1F</p><p><strong>Nginx \u5185\u7F6E\u4E86\u8F6E\u8BE2\u548C\u52A0\u6743\u8F6E\u8BE2\u6765\u8FBE\u5230\u8D1F\u8F7D\u5747\u8861\u7684\u76EE\u7684</strong>\u3002\u670D\u52A1\u5668 A \u725B\u903C\u5C31\u628A\u5B83\u7684\u6743\u91CD\u52A0\u5927\u4E00\u70B9\uFF0C\u8BA9 5 \u4E07\u4E2A\u5C0F\u4E8C\u8BBF\u95EE\u5B83\uFF1B\u670D\u52A1\u5668 B \u5F31\u4E00\u70B9\uFF0C\u6743\u91CD\u5C31\u518D\u5C0F\u4E00\u70B9\uFF0C\u8BA9 2 \u4E07\u4E2A\u5C0F\u4E8C\u8BBF\u95EE\u5B83\uFF1B\u670D\u52A1\u5668 C \u66F4\u5F31\uFF0C\u6743\u91CD\u5C31\u6700\u5C0F\uFF0C\u8BA9 1 \u4E07\u4E2A\u5C0F\u4E8C\u8BBF\u95EE\u5B83\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0CNginx \u8FD8\u6709\u4E00\u4E2A\u5F88\u725B\u903C\u7684\u529F\u80FD\u662F<strong>\u52A8\u9759\u5206\u79BB</strong>\u3002</p><p>\u5728\u6211\u4EEC\u7684\u8F6F\u4EF6\u5F00\u53D1\u4E2D\uFF0C\u6709\u4E9B\u8BF7\u6C42\u662F\u9700\u8981\u540E\u53F0\u5904\u7406\u7684\uFF1B\u6709\u4E9B\u8BF7\u6C42\u662F\u4E0D\u9700\u8981\u540E\u53F0\u5904\u7406\u7684\uFF0C\u6BD4\u5982\u8BF4 css\u3001js \u8FD9\u4E9B\u6587\u4EF6\u8BF7\u6C42\uFF0C\u8FD9\u4E9B\u4E0D\u9700\u8981\u7ECF\u8FC7\u540E\u53F0\u5904\u7406\u7684\u6587\u4EF6\u5C31\u53EB\u9759\u6001\u6587\u4EF6\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u4E00\u4E9B\u89C4\u5219\uFF0C\u628A\u52A8\u6001\u8D44\u6E90\u548C\u9759\u6001\u8D44\u6E90\u5206\u5F00\uFF0C\u7136\u540E\u901A\u8FC7 Nginx \u628A\u8BF7\u6C42\u5206\u5F00\uFF0C\u9759\u6001\u8D44\u6E90\u7684\u8BF7\u6C42\u5C31\u4E0D\u9700\u8981\u7ECF\u8FC7 Web \u670D\u52A1\u5668\u5904\u7406\u4E86\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6574\u4F53\u4E0A\u7684\u8D44\u6E90\u7684\u54CD\u5E94\u901F\u5EA6\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-05.png" alt=""></p><h3 id="\u4E8C\u3001nginx-\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001nginx-\u7684\u5B89\u88C5" aria-hidden="true">#</a> \u4E8C\u3001Nginx \u7684\u5B89\u88C5</h3><p>\u9488\u5BF9\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0CNginx \u7684\u5B89\u88C5\u5404\u4E0D\u76F8\u540C\u3002Windows \u53EF\u4EE5\u76F4\u63A5\u5230\u5B98\u7F51\u4E0B\u8F7D zip \u7EFF\u8272\u5B89\u88C5\u5305\uFF0C\u89E3\u538B\u540E\u5C31\u53EF\u4EE5\u4E86\u3002</p><blockquote><p>http://nginx.org/en/download.html</p></blockquote>',27),g=e("\u4E4B\u524D\u5E26\u5927\u5BB6\u767D\u7968\u8FC7\u963F\u91CC\u4E91\u7684\u670D\u52A1\u5668\uFF0C\u6709 Linux \u670D\u52A1\u5668\u7684\u8BDD\uFF0C\u76F4\u63A5\u901A\u8FC7"),p={href:"https://mp.weixin.qq.com/s/ditN9J80rSWwnYRumwb4ww",target:"_blank",rel:"noopener noreferrer"},v=e("\u5B9D\u5854\u9762\u677F"),b=e("\u8FD9\u4E2A\u795E\u5668\u5C31\u53EF\u4EE5\u5B89\u88C5\u4E86\u3002"),m=i(`<p>\u4E0D\u8FC7\uFF0C\u5982\u679C\u5728\u5B89\u88C5\u5B9D\u5854\u9762\u677F\u5FC5\u5907\u5DE5\u5177\u5305\u7684\u65F6\u5019\uFF0C\u5982\u679C\u9009\u62E9\u4E86 phpmyadmin\uFF08MySQL \u7684\u7BA1\u7406\u5DE5\u5177\uFF09\uFF0C\u4F1A\u8986\u76D6\u6389 80 \u7AEF\u53E3\uFF0C\u5C31\u5BFC\u81F4\u6CA1\u529E\u6CD5\u76F4\u63A5\u901A\u8FC7\u9ED8\u8BA4\u914D\u7F6E\u7684\u65B9\u5F0F\u8BBF\u95EE Nginx \u542F\u52A8\u9875\u9762\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-06.png" alt=""></p><p>\u6211\u8FD9\u91CC\u4EE5 macOS \u73AF\u5883\u4E3A\u4F8B\uFF0C\u6765\u6F14\u793A\u4E00\u4E0B\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u901A\u8FC7 <code>brew info nginx</code> \u547D\u4EE4\u67E5\u770B Nginx \u662F\u5426\u5B89\u88C5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-07.png" alt=""></p><p>\u7B2C\u4E8C\u6B65\uFF0C\u901A\u8FC7 <code>brew install nginx</code> \u547D\u4EE4\u5B89\u88C5 Nginx\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-08.png" alt=""></p><p>\u4ECE\u4EE5\u4E0A\u4FE1\u606F\u53EF\u4EE5\u5F97\u51FA\uFF1A</p><ul><li>\u6839\u76EE\u5F55\u662F <code>/usr/local/var/www</code></li><li>\u914D\u7F6E\u6587\u4EF6\u662F <code>/usr/local/etc/nginx/nginx.conf</code></li><li>\u9ED8\u8BA4\u7AEF\u53E3\u662F 8080</li></ul><p>\u7B2C\u4E09\u6B65\uFF0C\u901A\u8FC7 <code>nginx</code> \u547D\u4EE4\u542F\u52A8 Nginx\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-09.png" alt=""></p><p>\u7B2C\u56DB\u6B65\uFF0C\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u901A\u8FC7 <code>localhost:8080</code> \u8BBF\u95EE\uFF0C\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u6B22\u8FCE\u9875\u9762\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-10.png" alt=""></p><h3 id="\u4E09\u3001nginx-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001nginx-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u4E09\u3001Nginx \u5E38\u7528\u547D\u4EE4</h3><p>\u901A\u5E38\u6765\u8BF4\uFF0CNginx \u4E00\u65E6\u542F\u52A8\u540E\uFF0C\u6211\u4EEC\u662F\u5F88\u5C11\u8BA9\u5B83\u9000\u51FA\u7684\uFF0C\u4F7F\u7528\u6700\u591A\u7684\u5C31\u662F reload \u547D\u4EE4\u3002\u5F53\u6211\u4EEC\u4FEE\u6539\u4E86\u914D\u7F6E\u6587\u4EF6\uFF0C\u662F\u9700\u8981\u6267\u884C\u4E00\u6B21 reload \u547D\u4EE4\u8BA9 Nginx \u751F\u6548\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nginx  \u542F\u52A8
nginx -s stop  \u505C\u6B62
nginx -s quit  \u5B89\u5168\u9000\u51FA
nginx -s reload  \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6
ps aux|grep nginx  \u67E5\u770Bnginx\u8FDB\u7A0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u77E5\u9053\uFF0CNginx \u7684 reload \u5BF9\u7528\u6237\u662F\u65E0\u611F\u7684\uFF0C\u8FD9\u4E00\u70B9\u6211\u89C9\u5F97\u5F88\u725B\u903C~</p><h3 id="\u56DB\u3001nginx-\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001nginx-\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Nginx \u7684\u914D\u7F6E</h3><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B Nginx \u7684\u914D\u7F6E\u7ED3\u6784\u56FE\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>main        # \u5168\u5C40\u914D\u7F6E
\u251C\u2500\u2500 events  # \u914D\u7F6E\u7F51\u7EDC\u8FDE\u63A5
\u251C\u2500\u2500 http    # \u914D\u7F6E\u4EE3\u7406\u3001\u7F13\u5B58\u3001\u65E5\u5FD7\u7B49
\u2502   \u251C\u2500\u2500 upstream # \u914D\u7F6E\u8D1F\u8F7D\u5747\u8861
\u2502   \u251C\u2500\u2500 server   # \u914D\u7F6E\u865A\u62DF\u4E3B\u673A\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A server
\u2502   \u251C\u2500\u2500 server
\u2502   \u2502   \u251C\u2500\u2500 location  # \u7528\u4E8E\u5339\u914D URI\uFF08URL \u662F URI \u7684\u4E00\u79CD\uFF09\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A location
\u2502   \u2502   \u251C\u2500\u2500 location
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u2514\u2500\u2500 ...
\u2514\u2500\u2500 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u628A Nginx \u7684\u9ED8\u8BA4\u914D\u7F6E\u62C9\u51FA\u6765\u770B\u4E00\u4E0B\uFF0C\u6211\u628A\u6CE8\u91CA\u52A0\u4E86\u8FDB\u53BB\uFF0C\u8FD9\u6837\u5927\u5BB6\u5F88\u5BB9\u6613\u5C31\u660E\u767D\u8FD9\u884C\u914D\u7F6E\u662F\u7528\u6765\u5E72\u561B\u7684\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>worker_processes  1; # Nginx \u8FDB\u7A0B\u6570\uFF0C\u4E00\u822C\u8BBE\u7F6E\u4E3A\u548C CPU \u6838\u6570\u4E00\u6837

events {
    worker_connections  1024; # \u6BCF\u4E2A\u8FDB\u7A0B\u5141\u8BB8\u6700\u5927\u5E76\u53D1\u6570
}

http {
    include       mime.types; # \u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u7C7B\u578B\u6620\u5C04\u8868
    default_type  application/octet-stream;

    sendfile        on; # \u5F00\u542F\u9AD8\u6548\u4F20\u8F93\u6A21\u5F0F
    keepalive_timeout  65; # \u4FDD\u6301\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u4E5F\u53EB\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2

    server {
        listen       8080; # \u914D\u7F6E\u76D1\u542C\u7684\u7AEF\u53E3
        server_name  localhost; # \u914D\u7F6E\u7684\u57DF\u540D

        location / {
            root   html; # \u7F51\u7AD9\u6839\u76EE\u5F55
            index  index.html index.htm; # \u9ED8\u8BA4\u9996\u9875\u6587\u4EF6
        }

        error_page   500 502 503 504  /50x.html; # \u9ED8\u8BA450x\u5BF9\u5E94\u7684\u8BBF\u95EE\u9875\u9762
        location = /50x.html {
            root   html;
        }
    }

    include servers/*; # \u52A0\u8F7D\u5B50\u914D\u7F6E\u9879
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u597D\uFF0C\u73B0\u5728\u6211\u4EEC\u767B\u5F55\u5B9D\u5854\u9762\u677F\uFF0C\u5C1D\u8BD5\u628A\u9ED8\u8BA4\u7684 server \u914D\u7F6E\u590D\u5236\u5230 Linux \u670D\u52A1\u5668\u4E2D\u7684 Nginx \u914D\u7F6E\u91CC\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-11.png" alt=""></p><p>\u7B80\u5355\u89E3\u91CA\u4E00\u4E0B\u3002</p><p>\u7531\u4E8E\u6211\u7684\u670D\u52A1\u5668\u4E0A 80 \u7AEF\u53E3\u662F\u9ED8\u8BA4\u6253\u5F00\u7684\uFF0C\u6240\u4EE5\u6211\u5C06\u76D1\u542C\u7AEF\u53E3\u914D\u7F6E\u6210\u4E86 80\uFF0C\u5982\u679C\u4F60\u914D\u7F6E\u6210\u5176\u4ED6\u7AEF\u53E3\u7684\u8BDD\uFF0C\u8BB0\u5F97\u5B9D\u5854\u9762\u677F\u548C\u4E91\u670D\u52A1\u7684\u5B89\u5168\u7EC4\u91CC\u628A\u7AEF\u53E3\u6253\u5F00\u3002</p><p>root \u6211\u6307\u5B9A\u4E86 <code>/home/www</code> \u76EE\u5F55\uFF0C\u9996\u9875\u6587\u4EF6\u4E3A index.html\u3002\u8FD9\u4E2A\u6587\u4EF6\u662F\u6211\u81EA\u5B9A\u4E49\u7684\uFF0C\u6765\u770B\u4E00\u4E0B\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;\u6C89\u9ED8\u738B\u4E8C&lt;/title&gt;
  &lt;body&gt;
    &lt;img src=&quot;niubi.jpeg&quot; /&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F88\u8A00\u7B80\u610F\u8D45\uFF0C\u603B\u4E4B\u5C31\u662F\u4E8C\u54E5\uFF0C\u725B\u903C~</p><p>\u597D\uFF0C\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u4E14 reload Nginx\uFF0C\u6211\u4EEC\u5728\u672C\u5730\u7684\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\u670D\u52A1\u5668\u7684 IP \u5730\u5740\u5C31\u53EF\u4EE5\u770B\u5230\u6548\u679C\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-12.png" alt=""></p><h3 id="\u4E94\u3001nginx-\u7684\u5B66\u4E60\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001nginx-\u7684\u5B66\u4E60\u8D44\u6599" aria-hidden="true">#</a> \u4E94\u3001Nginx \u7684\u5B66\u4E60\u8D44\u6599</h3><p>\u5173\u4E8E Nginx \u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u8FD8\u6709\u52A8\u9759\u5206\u79BB\uFF0C\u7B49\u5230\u4E8C\u54E5\u7684\u7F51\u7AD9\u8DD1\u8D77\u6765\u540E\uFF0C\u53EF\u4EE5\u4E13\u95E8\u641E\u4E2A\u89C6\u9891\u7ED9\u5927\u5BB6\u6F14\u793A\u4E0B\uFF0C\u6BD4\u8F83\u76F4\u89C2\u4E00\u70B9\u3002Nginx \u7684\u5165\u95E8\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u6709\u4E00\u8BF4\u4E00\uFF0C\u5982\u679C\u60F3\u8981\u5728\u5DE5\u4F5C\u4E2D\u7528\u597D Nginx\uFF0C\u8FD8\u662F\u9700\u8981\u82B1\u8D39\u4E00\u756A\u529F\u592B\u7684\u3002</p><p>\u6211\u8FD9\u91CC\u518D\u7ED9\u5927\u5BB6\u63A8\u8350\u4E00\u4E9B\u4E0D\u9519\u7684\u5B66\u4E60\u8D44\u6599\u5427\u3002</p><p><strong>1\uFF09\u72C2\u795E\u8BF4\u7684\u89C6\u9891\u5165\u95E8\u6559\u7A0B</strong>\uFF0C\u6211\u4E2A\u4EBA\u89C9\u5F97\uFF0C\u72C2\u795E\u7684\u5165\u95E8\u6559\u7A0B\u8FD8\u662F\u975E\u5E38\u8212\u9002\u7684\uFF0C\u8BED\u901F\u548C\u5185\u5BB9\u90FD\u521A\u521A\u597D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-13.png" alt=""></p><blockquote><p>https://www.bilibili.com/video/BV1F5411J7vK</p></blockquote><p><strong>2\uFF09\u9ED1\u9A6C\u7A0B\u5E8F\u5458Nginx\u6559\u7A0B</strong>\uFF0C\u603B\u5171 159 \u8BB2\uFF0C\u57FA\u672C\u4E0A\u7B97\u662F\u975E\u5E38\u5168\u9762\u7684 Nginx \u7684\u89C6\u9891\u6559\u7A0B\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-14.png" alt=""></p><blockquote><p>https://www.bilibili.com/video/BV1ov41187bq</p></blockquote><p><strong>3\uFF09\u6781\u5BA2\u65F6\u95F4\u4E0A\u7684 Nginx100 \u8BB2</strong>\uFF0C\u8BB2\u7684\u6BD4\u8F83\u6DF1\u4E00\u70B9\uFF0C\u6D89\u53CA\u5230\u4E0D\u5C11\u539F\u7406\u5C42\u9762\u7684\u4E1C\u897F\u3002\u94B1\u5305\u6BD4\u8F83\u9F13\u7684\u8BDD\uFF0C\u53EF\u4EE5\u53BB\u4ED8\u8D39\u4E0B\u3002\u4E0D\u8FC7\uFF0C\u542C\u8BF4\u5728\u67D0\u4E2A\u5730\u65B9\u4E5F\u53EF\u4EE5\u767D\u7968\u3002</p><p><strong>4\uFF09Nginx \u4ECE\u5165\u95E8\u5230\u5B9E\u8DF5\uFF0C\u4E07\u5B57\u8BE6\u89E3</strong>\uFF0C\u56FE\u6587\u7248\u7684\uFF0C\u53EF\u4EE5\u5230\u6398\u91D1\u4E0A\u770B\u770B\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u5185\u5BB9\u57FA\u672C\u4E0A\u9762\u9762\u4FF1\u5230\u4E86\uFF08\u53EF\u4EE5\u770B\u4E00\u4E0B\u4E0B\u9762\u7684\u76EE\u5F55\uFF09\uFF0C\u914D\u5408\u524D\u9762\u7684\u89C6\u9891\u8BFE\uFF0C\u62FF\u4E0B Nginx \u57FA\u672C\u4E0A\u662F\u7A33\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nginx/nginx-15.png" alt=""></p><blockquote><p>https://juejin.cn/post/6844904144235413512</p></blockquote><p>\u8FD9\u4E9B\u8D44\u6599\u5982\u679C\u80FD\u5168\u90E8\u8FC7\u4E00\u904D\u7684\u8BDD\uFF0C\u6211\u8981\u558A\u4F60 Nginx \u5C0F\u738B\u5B50\u4E86\uFF0C\u4F30\u8BA1\u516C\u53F8\u9047\u5230 Nginx \u95EE\u9898\u7684\u8BDD\uFF0C\u4F60\u80AF\u5B9A\u662F\u89E3\u51B3\u95EE\u9898\u7684\u90A3\u4E00\u4E2A\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,46);function x(u,h){const t=r("ExternalLinkIcon");return s(),l("div",null,[c,n("p",null,[g,n("a",p,[v,d(t)]),b]),m])}var _=a(o,[["render",x],["__file","nginx.html.vue"]]);export{_ as default};
