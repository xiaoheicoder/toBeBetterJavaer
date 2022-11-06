import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as n,c as o,a as e,b as p,e as a,d as t}from"./app.36bfa2ec.js";const d={},g=a('<h1 id="redis-12\u9053\u7CBE\u9009\u9AD8\u9891\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#redis-12\u9053\u7CBE\u9009\u9AD8\u9891\u9762\u8BD5\u9898" aria-hidden="true">#</a> Redis\uFF1A12\u9053\u7CBE\u9009\u9AD8\u9891\u9762\u8BD5\u9898</h1><p>\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E8C\u54E5\u5440\u3002</p><p>Redis \u662F\u9762\u8BD5\u4E2D\u7ED5\u4E0D\u8FC7\u7684\u69DB\uFF0C\u53EA\u8981\u5728\u7B80\u5386\u4E2D\u5199\u4E86\u7528\u8FC7 Redis\uFF0C\u80AF\u5B9A\u9003\u4E0D\u8FC7\u3002\u4ECA\u5929\u6211\u4EEC\u5C31\u6765\u6A21\u62DF\u4E00\u4E0B\u9762\u8BD5\u5B98\u5728 Redis \u8FD9\u4E2A\u8BDD\u9898\u4E0A\u662F\u5982\u4F55\u4E00\u6B65\u4E00\u6B65\u6DF1\u5165\uFF0C\u5168\u9762\u8003\u5BDF\u5019\u9009\u4EBA\u5BF9\u4E8E Redis \u7684\u638C\u63E1\u60C5\u51B5\u3002</p><p>\u5C0F\u4E8C\uFF1A\u9762\u8BD5\u5B98\uFF0C\u4F60\u597D\u3002\u6211\u662F\u6765\u53C2\u52A0\u9762\u8BD5\u7684\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A\u4F60\u597D\uFF0C\u5C0F\u4E8C\u3002\u6211\u770B\u4E86\u4F60\u7684\u7B80\u5386\uFF0C\u719F\u7EC3\u638C\u63E1 Redis\uFF0C\u90A3\u4E48\u6211\u5C31\u968F\u4FBF\u95EE\u4F60\u51E0\u4E2A Redis \u76F8\u5173\u7684\u95EE\u9898\u5427\u3002\u9996\u5148\u6211\u7684\u95EE\u9898\u662F\uFF0C<strong>Redis \u662F\u5355\u7EBF\u7A0B\u8FD8\u662F\u591A\u7EBF\u7A0B\u5462</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A</p><p>Redis \u4E0D\u540C\u7248\u672C\u4E4B\u95F4\u91C7\u7528\u7684\u7EBF\u7A0B\u6A21\u578B\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u5728 Redis4.0 \u7248\u672C\u4E4B\u524D\u4F7F\u7528\u7684\u662F\u5355\u7EBF\u7A0B\u6A21\u578B\uFF0C\u5728 4.0 \u7248\u672C\u4E4B\u540E\u589E\u52A0\u4E86\u591A\u7EBF\u7A0B\u7684\u652F\u6301\u3002</p><p>\u5728 4.0 \u4E4B\u524D\u867D\u7136\u6211\u4EEC\u8BF4 Redis \u662F\u5355\u7EBF\u7A0B\uFF0C\u4E5F\u53EA\u662F\u8BF4\u5B83\u7684\u7F51\u7EDC I/O \u7EBF\u7A0B\u4EE5\u53CA Set \u548C Get \u64CD\u4F5C\u662F\u7531\u4E00\u4E2A\u7EBF\u7A0B\u5B8C\u6210\u7684\u3002\u4F46\u662F Redis \u7684\u6301\u4E45\u5316\u3001\u96C6\u7FA4\u540C\u6B65\u8FD8\u662F\u4F7F\u7528\u5176\u4ED6\u7EBF\u7A0B\u6765\u5B8C\u6210\u3002</p><p>4.0 \u4E4B\u540E\u6DFB\u52A0\u4E86\u591A\u7EBF\u7A0B\u7684\u652F\u6301\uFF0C\u4E3B\u8981\u662F\u4F53\u73B0\u5728\u5927\u6570\u636E\u7684\u5F02\u6B65\u5220\u9664\u529F\u80FD\u4E0A\uFF0C\u4F8B\u5982 unlink key\u3001flushdb async\u3001flushall async \u7B49</p><p>\u9762\u8BD5\u5B98\uFF1A\u56DE\u7B54\u7684\u5F88\u597D\uFF0C<strong>\u90A3\u4E3A\u4EC0\u4E48 Redis \u5728 4.0 \u4E4B\u524D\u4F1A\u9009\u62E9\u4F7F\u7528\u5355\u7EBF\u7A0B\uFF1F\u800C\u4E14\u4F7F\u7528\u5355\u7EBF\u7A0B\u8FD8\u90A3\u4E48\u5FEB</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A</p><p>\u9009\u62E9\u5355\u7EBF\u7A0B\u4E2A\u4EBA\u89C9\u5F97\u4E3B\u8981\u662F\u4F7F\u7528\u7B80\u5355\uFF0C\u4E0D\u5B58\u5728\u9501\u7ADE\u4E89\uFF0C\u53EF\u4EE5\u5728\u65E0\u9501\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u6240\u6709\u64CD\u4F5C\uFF0C\u4E0D\u5B58\u5728\u6B7B\u9501\u548C\u7EBF\u7A0B\u5207\u6362\u5E26\u6765\u7684\u6027\u80FD\u548C\u65F6\u95F4\u4E0A\u7684\u5F00\u9500\uFF0C\u4F46\u540C\u65F6\u5355\u7EBF\u7A0B\u4E5F\u4E0D\u80FD\u5B8C\u5168\u53D1\u6325\u51FA\u591A\u6838 CPU \u7684\u6027\u80FD\u3002</p><p>\u81F3\u4E8E\u4E3A\u4EC0\u4E48\u5355\u7EBF\u7A0B\u90A3\u4E48\u5FEB\u6211\u89C9\u5F97\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u4E2A\u539F\u56E0\uFF1A</p><ul><li>Redis \u7684\u5927\u90E8\u5206\u64CD\u4F5C\u90FD\u5728\u5185\u5B58\u4E2D\u5B8C\u6210\uFF0C\u5185\u5B58\u4E2D\u7684\u6267\u884C\u6548\u7387\u672C\u8EAB\u5C31\u5F88\u5FEB\uFF0C\u5E76\u4E14\u91C7\u7528\u4E86\u9AD8\u6548\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6BD4\u5982\u54C8\u5E0C\u8868\u548C\u8DF3\u8868\u3002</li><li>\u4F7F\u7528\u5355\u7EBF\u7A0B\u907F\u514D\u4E86\u591A\u7EBF\u7A0B\u7684\u7ADE\u4E89\uFF0C\u7701\u53BB\u4E86\u591A\u7EBF\u7A0B\u5207\u6362\u5E26\u6765\u7684\u65F6\u95F4\u548C\u6027\u80FD\u5F00\u9500\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u51FA\u73B0\u6B7B\u9501\u3002</li><li>\u91C7\u7528 I/O \u591A\u8DEF\u590D\u7528\u673A\u5236\u5904\u7406\u5927\u91CF\u5BA2\u6237\u7AEF\u7684 Socket \u8BF7\u6C42\uFF0C\u56E0\u4E3A\u8FD9\u662F\u57FA\u4E8E\u975E\u963B\u585E\u7684 I/O \u6A21\u578B\uFF0C\u8FD9\u5C31\u8BA9 Redis \u53EF\u4EE5\u9AD8\u6548\u5730\u8FDB\u884C\u7F51\u7EDC\u901A\u4FE1\uFF0CI/O \u7684\u8BFB\u5199\u6D41\u7A0B\u4E5F\u4E0D\u518D\u963B\u585E\u3002</li></ul><p>\u9762\u8BD5\u5B98\uFF1A\u4E0D\u9519\uFF0C\u90A3 <strong>Redis \u662F\u5982\u4F55\u5B9E\u73B0\u6570\u636E\u4E0D\u4E22\u5931\u7684\u5462</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A</p><p>Redis \u6570\u636E\u662F\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u7684\uFF0C\u4E3A\u4E86\u4FDD\u8BC1 Redis \u6570\u636E\u4E0D\u4E22\u5931\uFF0C\u90A3\u5C31\u8981\u628A\u6570\u636E\u4ECE\u5185\u5B58\u5B58\u50A8\u5230\u78C1\u76D8\u4E0A\uFF0C\u4EE5\u4FBF\u5728\u670D\u52A1\u5668\u91CD\u542F\u540E\u8FD8\u80FD\u591F\u4ECE\u78C1\u76D8\u4E2D\u6062\u590D\u539F\u6709\u6570\u636E\uFF0C\u8FD9\u5C31\u662F Redis \u7684\u6570\u636E\u6301\u4E45\u5316\u3002Redis \u6570\u636E\u6301\u4E45\u5316\u6709\u4E09\u79CD\u65B9\u5F0F\u3002</p><p><strong>1\uFF09AOF \u65E5\u5FD7\uFF08Append Only File\uFF0C\u6587\u4EF6\u8FFD\u52A0\u65B9\u5F0F\uFF09</strong>\uFF1A\u8BB0\u5F55\u6240\u6709\u7684\u64CD\u4F5C\u547D\u4EE4\uFF0C\u5E76\u4EE5\u6587\u672C\u7684\u5F62\u5F0F\u8FFD\u52A0\u5230\u6587\u4EF6\u4E2D\u3002</p><p><strong>2\uFF09RDB \u5FEB\u7167\uFF08Redis DataBase\uFF09</strong>\uFF1A\u5C06\u67D0\u4E00\u4E2A\u65F6\u523B\u7684\u5185\u5B58\u6570\u636E\uFF0C\u4EE5\u4E8C\u8FDB\u5236\u7684\u65B9\u5F0F\u5199\u5165\u78C1\u76D8\u3002</p><p><strong>3\uFF09\u6DF7\u5408\u6301\u4E45\u5316\u65B9\u5F0F</strong>\uFF1ARedis 4.0 \u65B0\u589E\u4E86\u6DF7\u5408\u6301\u4E45\u5316\u7684\u65B9\u5F0F\uFF0C\u96C6\u6210\u4E86 RDB \u548C AOF \u7684\u4F18\u70B9\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A\u90A3\u4F60\u5206\u522B\u8BF4\u8BF4 <strong>AOF \u548C RDB \u7684\u5B9E\u73B0\u539F\u7406</strong>\u5427\u3002</p><p>\u5C0F\u4E8C\uFF1A</p><p>AOF \u91C7\u7528\u7684\u662F\u5199\u540E\u65E5\u5FD7\u7684\u65B9\u5F0F\uFF0CRedis \u5148\u6267\u884C\u547D\u4EE4\u628A\u6570\u636E\u5199\u5165\u5185\u5B58\uFF0C\u7136\u540E\u518D\u8BB0\u5F55\u65E5\u5FD7\u5230\u6587\u4EF6\u4E2D\u3002AOF \u65E5\u5FD7\u8BB0\u5F55\u7684\u662F\u64CD\u4F5C\u547D\u4EE4\uFF0C\u4E0D\u662F\u5B9E\u9645\u7684\u6570\u636E\uFF0C\u5982\u679C\u91C7\u7528 AOF \u65B9\u6CD5\u505A\u6545\u969C\u6062\u590D\u65F6\u9700\u8981\u5C06\u5168\u91CF\u65E5\u5FD7\u90FD\u6267\u884C\u4E00\u904D\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mianjing/redis12question-1.png" alt=""></p><p>RDB \u91C7\u7528\u7684\u662F\u5185\u5B58\u5FEB\u7167\u7684\u65B9\u5F0F\uFF0C\u5B83\u8BB0\u5F55\u7684\u662F\u67D0\u4E00\u65F6\u523B\u7684\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u64CD\u4F5C\uFF0C\u6240\u4EE5\u91C7\u7528 RDB \u65B9\u6CD5\u505A\u6545\u969C\u6062\u590D\u65F6\u53EA\u9700\u8981\u76F4\u63A5\u628A RDB \u6587\u4EF6\u8BFB\u5165\u5185\u5B58\u5373\u53EF\uFF0C\u5B9E\u73B0\u5FEB\u901F\u6062\u590D\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A\u4F60\u521A\u63D0\u5230\u4E86 AOF \u91C7\u7528\u7684\u662F \u201C\u5199\u540E\u65E5\u5FD7\u201D \u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u5E73\u65F6\u7528\u7684 MySQL \u5219\u91C7\u7528\u7684\u662F \u201C\u5199\u524D\u65E5\u5FD7\u201D\uFF0C\u90A3 <strong>Redis \u4E3A\u4EC0\u4E48\u8981\u5148\u6267\u884C\u547D\u4EE4\uFF0C\u518D\u628A\u6570\u636E\u5199\u5165\u65E5\u5FD7\u5462</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A\u8FD9\u4E2A\u4E3B\u8981\u662F\u7531\u4E8E Redis \u5728\u5199\u5165\u65E5\u5FD7\u4E4B\u524D\uFF0C\u4E0D\u5BF9\u547D\u4EE4\u8FDB\u884C\u8BED\u6CD5\u68C0\u67E5\uFF0C\u6240\u4EE5\u53EA\u8BB0\u5F55\u6267\u884C\u6210\u529F\u7684\u547D\u4EE4\uFF0C\u907F\u514D\u51FA\u73B0\u8BB0\u5F55\u9519\u8BEF\u547D\u4EE4\u7684\u60C5\u51B5\uFF0C\u800C\u4E14\u5728\u547D\u4EE4\u6267\u884C\u540E\u518D\u5199\u65E5\u5FD7\u4E0D\u4F1A\u963B\u585E\u5F53\u524D\u7684\u5199\u64CD\u4F5C\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A<strong>\u90A3\u540E\u5199\u65E5\u5FD7\u53C8\u6709\u4EC0\u4E48\u98CE\u9669\u5462</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A\u6211... \u8FD9\u4E2A\u6211\u4E0D\u4F1A\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A</p><p>\u597D\u5427\uFF0C\u540E\u5199\u65E5\u5FD7\u4E3B\u8981\u6709\u4E24\u4E2A\u98CE\u9669\u53EF\u80FD\u4F1A\u53D1\u751F\uFF1A</p><ul><li><strong>\u6570\u636E\u53EF\u80FD\u4F1A\u4E22\u5931</strong>\uFF1A\u5982\u679C Redis \u521A\u6267\u884C\u5B8C\u547D\u4EE4\uFF0C\u6B64\u65F6\u53D1\u751F\u6545\u969C\u5B95\u673A\uFF0C\u4F1A\u5BFC\u81F4\u8FD9\u6761\u547D\u4EE4\u5B58\u5728\u4E22\u5931\u7684\u98CE\u9669\u3002</li><li><strong>\u53EF\u80FD\u963B\u585E\u5176\u4ED6\u64CD\u4F5C</strong>\uFF1AAOF \u65E5\u5FD7\u5176\u5B9E\u4E5F\u662F\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C\uFF0C\u6240\u4EE5\u5F53 Redis \u628A\u65E5\u5FD7\u6587\u4EF6\u5199\u5165\u78C1\u76D8\u7684\u65F6\u5019\uFF0C\u8FD8\u662F\u4F1A\u963B\u585E\u540E\u7EED\u7684\u64CD\u4F5C\u65E0\u6CD5\u6267\u884C\u3002</li></ul><p>\u6211\u8FD8\u6709\u4E2A\u95EE\u9898\u662F <strong>RDB \u505A\u5FEB\u7167\u65F6\u4F1A\u963B\u585E\u7EBF\u7A0B\u5417</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1ARedis \u63D0\u4F9B\u4E86\u4E24\u4E2A\u547D\u4EE4\u6765\u751F\u6210 RDB \u5FEB\u7167\u6587\u4EF6\uFF0C\u5206\u522B\u662F save \u548C bgsave\u3002save \u547D\u4EE4\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C\uFF0C\u4F1A\u5BFC\u81F4\u963B\u585E\u3002\u800C bgsave \u547D\u4EE4\u5219\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u7528\u4E8E\u5199\u5165 RDB \u6587\u4EF6\u7684\u64CD\u4F5C\uFF0C\u907F\u514D\u4E86\u5BF9\u4E3B\u7EBF\u7A0B\u7684\u963B\u585E\uFF0C\u8FD9\u4E5F\u662F Redis RDB \u7684\u9ED8\u8BA4\u914D\u7F6E\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A<strong>RDB \u505A\u5FEB\u7167\u7684\u65F6\u5019\u6570\u636E\u80FD\u4FEE\u6539\u5417</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1Asave \u662F\u540C\u6B65\u7684\u4F1A\u963B\u585E\u5BA2\u6237\u7AEF\u547D\u4EE4\uFF0Cbgsave \u7684\u65F6\u5019\u662F\u53EF\u4EE5\u4FEE\u6539\u7684\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A\u90A3 Redis \u662F<strong>\u600E\u4E48\u89E3\u51B3\u5728 bgsave \u505A\u5FEB\u7167\u7684\u65F6\u5019\u5141\u8BB8\u6570\u636E\u4FEE\u6539\u5462</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A\u989D\uFF0C\u8FD9\u4E2A\u6211\u4E0D\u592A\u6E05\u695A...</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mianjing/redis12question-2.png" alt=""></p><p>\u9762\u8BD5\u5B98\uFF1A</p><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u5229\u7528 bgsave \u7684\u5B50\u7EBF\u7A0B\u5B9E\u73B0\u7684\uFF0C\u5177\u4F53\u64CD\u4F5C\u5982\u4E0B\uFF1A</p><ul><li>\u5982\u679C\u4E3B\u7EBF\u7A0B\u6267\u884C\u8BFB\u64CD\u4F5C\uFF0C\u5219\u4E3B\u7EBF\u7A0B\u548C bgsave \u5B50\u8FDB\u7A0B\u4E92\u76F8\u4E0D\u5F71\u54CD\uFF1B</li><li>\u5982\u679C\u4E3B\u7EBF\u7A0B\u6267\u884C\u5199\u64CD\u4F5C\uFF0C\u5219\u88AB\u4FEE\u6539\u7684\u6570\u636E\u4F1A\u590D\u5236\u4E00\u4EFD\u526F\u672C\uFF0C\u7136\u540E bgsave \u5B50\u8FDB\u7A0B\u4F1A\u628A\u8BE5\u526F\u672C\u6570\u636E\u5199\u5165 RDB \u6587\u4EF6\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u4E3B\u7EBF\u7A0B\u4ECD\u7136\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u539F\u6765\u7684\u6570\u636E\u3002</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mianjing/redis12question-3.png" alt=""></p><p>\u8981\u6CE8\u610F\uFF0CRedis \u5BF9 RDB \u7684\u6267\u884C\u9891\u7387\u975E\u5E38\u91CD\u8981\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u5F71\u54CD\u5FEB\u7167\u6570\u636E\u7684\u5B8C\u6574\u6027\u4EE5\u53CA Redis \u7684\u7A33\u5B9A\u6027\uFF0C\u6240\u4EE5\u5728 Redis 4.0 \u540E\uFF0C\u589E\u52A0\u4E86 AOF \u548C RDB \u6DF7\u5408\u7684\u6570\u636E\u6301\u4E45\u5316\u673A\u5236\uFF1A \u628A\u6570\u636E\u4EE5 RDB \u7684\u65B9\u5F0F\u5199\u5165\u6587\u4EF6\uFF0C\u518D\u5C06\u540E\u7EED\u7684\u64CD\u4F5C\u547D\u4EE4\u4EE5 AOF \u7684\u683C\u5F0F\u5B58\u5165\u6587\u4EF6\uFF0C\u65E2\u4FDD\u8BC1\u4E86 Redis \u91CD\u542F\u901F\u5EA6\uFF0C\u53C8\u964D\u4F4E\u6570\u636E\u4E22\u5931\u98CE\u9669\u3002</p><p>\u5C0F\u4E8C\uFF1A\u5B66\u5230\u4E86\u5B66\u5230\u4E86\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A\u90A3\u4F60\u518D\u8DDF\u6211\u8BF4\u8BF4 <strong>Redis \u5982\u4F55\u5B9E\u73B0\u9AD8\u53EF\u7528</strong>\u5427\uFF1F</p><p>\u5C0F\u4E8C\uFF1ARedis \u5B9E\u73B0\u9AD8\u53EF\u7528\u4E3B\u8981\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A\u4E3B\u4ECE\u590D\u5236\u3001\u54E8\u5175\u6A21\u5F0F\uFF0C\u4EE5\u53CA Redis \u96C6\u7FA4\u3002</p><p><strong>1\uFF09\u4E3B\u4ECE\u590D\u5236</strong></p><p>\u5C06\u4ECE\u524D\u7684\u4E00\u53F0 Redis \u670D\u52A1\u5668\uFF0C\u540C\u6B65\u6570\u636E\u5230\u591A\u53F0\u4ECE Redis \u670D\u52A1\u5668\u4E0A\uFF0C\u5373\u4E00\u4E3B\u591A\u4ECE\u7684\u6A21\u5F0F\uFF0C\u8FD9\u4E2A\u8DDF MySQL \u4E3B\u4ECE\u590D\u5236\u7684\u539F\u7406\u4E00\u6837\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mianjing/redis12question-4.png" alt=""></p><p><strong>2\uFF09\u54E8\u5175\u6A21\u5F0F</strong></p><p>\u4F7F\u7528 Redis \u4E3B\u4ECE\u670D\u52A1\u7684\u65F6\u5019\uFF0C\u4F1A\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F\u5F53 Redis \u7684\u4E3B\u4ECE\u670D\u52A1\u5668\u51FA\u73B0\u6545\u969C\u5B95\u673A\u65F6\uFF0C\u9700\u8981\u624B\u52A8\u8FDB\u884C\u6062\u590D\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CRedis \u589E\u52A0\u4E86\u54E8\u5175\u6A21\u5F0F\uFF08\u56E0\u4E3A\u54E8\u5175\u6A21\u5F0F\u505A\u5230\u4E86\u53EF\u4EE5\u76D1\u63A7\u4E3B\u4ECE\u670D\u52A1\u5668\uFF0C\u5E76\u4E14\u63D0\u4F9B\u81EA\u52A8\u5BB9\u707E\u6062\u590D\u7684\u529F\u80FD\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mianjing/redis12question-5.png" alt=""></p><p><strong>3\uFF09Redis Cluster\uFF08\u96C6\u7FA4\uFF09</strong></p><p>Redis Cluster \u662F\u4E00\u79CD\u5206\u5E03\u5F0F\u53BB\u4E2D\u5FC3\u5316\u7684\u8FD0\u884C\u6A21\u5F0F\uFF0C\u662F\u5728 Redis 3.0 \u7248\u672C\u4E2D\u63A8\u51FA\u7684 Redis \u96C6\u7FA4\u65B9\u6848\uFF0C\u5B83\u5C06\u6570\u636E\u5206\u5E03\u5728\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u4EE5\u6B64\u6765\u964D\u4F4E\u7CFB\u7EDF\u5BF9\u5355\u4E3B\u8282\u70B9\u7684\u4F9D\u8D56\uFF0C\u4ECE\u800C\u63D0\u9AD8 Redis \u670D\u52A1\u7684\u8BFB\u5199\u6027\u80FD\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mianjing/redis12question-6.png" alt=""></p><p>\u9762\u8BD5\u5B98\uFF1A\u4F7F\u7528\u54E8\u5175\u6A21\u5F0F\u5728\u6570\u636E\u4E0A\u6709\u526F\u672C\u6570\u636E\u505A\u4FDD\u8BC1\uFF0C\u5728\u53EF\u7528\u6027\u4E0A\u53C8\u6709\u54E8\u5175\u76D1\u63A7\uFF0C\u4E00\u65E6 master \u5B95\u673A\u4F1A\u9009\u4E3E salve \u8282\u70B9\u4E3A master \u8282\u70B9\uFF0C\u8FD9\u79CD\u5DF2\u7ECF\u6EE1\u8DB3\u4E86\u6211\u4EEC\u7684\u751F\u4EA7\u73AF\u5883\u9700\u8981\uFF0C<strong>\u90A3\u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981\u4F7F\u7528\u96C6\u7FA4\u6A21\u5F0F\u5462</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A\u54E8\u5175\u6A21\u5F0F\u5F52\u6839\u8282\u70B9\u8FD8\u662F\u4E3B\u4ECE\u6A21\u5F0F\uFF0C\u5728\u4E3B\u4ECE\u6A21\u5F0F\u4E0B\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u589E\u52A0 salve \u8282\u70B9\u6765\u6269\u5C55\u8BFB\u5E76\u53D1\u80FD\u529B\uFF0C\u4F46\u662F\u6CA1\u529E\u6CD5\u6269\u5C55\u5199\u80FD\u529B\u548C\u5B58\u50A8\u80FD\u529B\uFF0C\u5B58\u50A8\u80FD\u529B\u53EA\u80FD\u662F master \u8282\u70B9\u80FD\u591F\u627F\u8F7D\u7684\u4E0A\u9650\u3002\u6240\u4EE5\u4E3A\u4E86\u6269\u5C55\u5199\u80FD\u529B\u548C\u5B58\u50A8\u80FD\u529B\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5F15\u5165\u96C6\u7FA4\u6A21\u5F0F\u3002</p><p>\u9762\u8BD5\u5B98\uFF1A\u96C6\u7FA4\u4E2D\u90A3\u4E48\u591A Master \u8282\u70B9\uFF0C<strong>Redis Cluster \u5728\u5B58\u50A8\u7684\u65F6\u5019\u5982\u4F55\u786E\u5B9A\u9009\u62E9\u54EA\u4E2A\u8282\u70B9\u5462</strong>\uFF1F</p><p>\u5C0F\u4E8C\uFF1A\u8FD9\u5E94\u8BE5\u662F\u4F7F\u7528\u4E86\u67D0\u79CD hash \u7B97\u6CD5\uFF0C\u4F46\u662F\u6211\u4E0D\u592A\u6E05\u695A\u3002\u3002\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/mianjing/redis12question-7.png" alt=""></p><p>\u9762\u8BD5\u5B98\uFF1A\u90A3\u597D\uFF0C\u4ECA\u5929\u7684\u9762\u8BD5\u5C31\u5230\u8FD9\u91CC\u5427\uFF0C\u4F60\u5148\u56DE\u53BB\u7B49\u6211\u4EEC\u7684\u9762\u8BD5\u901A\u77E5\u3002</p><p>\u5C0F\u4E8C\uFF1A\u597D\u7684\uFF0C\u8C22\u8C22\u9762\u8BD5\u5B98\uFF0C\u4F60\u80FD\u544A\u8BC9\u6211 Redis Cluster \u600E\u4E48\u5B9E\u73B0\u8282\u70B9\u9009\u62E9\u7684\u5417\uFF1F</p><p>\u9762\u8BD5\u5B98\uFF1A</p><p>Redis Cluster \u91C7\u7528\u7684\u662F\u7C7B\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5\u5B9E\u73B0\u8282\u70B9\u9009\u62E9\u7684\uFF0C\u81F3\u4E8E\u4EC0\u4E48\u662F\u4E00\u81F4\u6027\u54C8\u5E0C\u7B97\u6CD5\u4F60\u81EA\u5DF1\u56DE\u53BB\u770B\u770B\u3002</p><p>Redis Cluster \u5C06\u81EA\u5DF1\u5206\u6210\u4E86 16384 \u4E2A Slot\uFF08\u69FD\u4F4D\uFF09\uFF0C\u54C8\u5E0C\u69FD\u7C7B\u4F3C\u4E8E\u6570\u636E\u5206\u533A\uFF0C\u6BCF\u4E2A\u952E\u503C\u5BF9\u90FD\u4F1A\u6839\u636E\u5B83\u7684 key\uFF0C\u88AB\u6620\u5C04\u5230\u4E00\u4E2A\u54C8\u5E0C\u69FD\u4E2D\uFF0C\u5177\u4F53\u6267\u884C\u8FC7\u7A0B\u5206\u4E3A\u4E24\u5927\u6B65\u3002</p><p>1\uFF09\u6839\u636E\u952E\u503C\u5BF9\u7684 key\uFF0C\u6309\u7167 CRC16 \u7B97\u6CD5\u8BA1\u7B97\u4E00\u4E2A 16 bit \u7684\u503C\u3002</p><p>2\uFF09\u518D\u7528 16bit \u503C\u5BF9 16384 \u53D6\u6A21\uFF0C\u5F97\u5230 0~16383 \u8303\u56F4\u5185\u7684\u6A21\u6570\uFF0C\u6BCF\u4E2A\u6A21\u6570\u4EE3\u8868\u4E00\u4E2A\u76F8\u5E94\u7F16\u53F7\u7684\u54C8\u5E0C\u69FD\u3002</p><p>\u6BCF\u4E2A Redis \u8282\u70B9\u8D1F\u8D23\u5904\u7406\u4E00\u90E8\u5206\u69FD\u4F4D\uFF0C\u5047\u5982\u4F60\u6709\u4E09\u4E2A master \u8282\u70B9 ABC\uFF0C\u6BCF\u4E2A\u8282\u70B9\u8D1F\u8D23\u7684\u69FD\u4F4D\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u8282\u70B9</th><th>\u5904\u7406\u69FD\u4F4D</th></tr></thead><tbody><tr><td>A</td><td>0-5000</td></tr><tr><td>B</td><td>5001 - 10000</td></tr><tr><td>C</td><td>10001 - 16383</td></tr></tbody></table><p>\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86 cluster \u8282\u70B9\u7684\u9009\u62E9\u3002</p><hr>',72),l=t("\u6587\u7AE0\u6765\u6E90\u4E8EJAVA\u65E5\u77E5\u5F55 \uFF0C\u4F5C\u8005\u98D8\u6E3AJam \u8F6C\u8F7D\u94FE\u63A5\uFF1A"),R={href:"https://mp.weixin.qq.com/s/GFUHslsSm96fJbhsCkFe_w",target:"_blank",rel:"noopener noreferrer"},c=t("https://mp.weixin.qq.com/s/GFUHslsSm96fJbhsCkFe_w"),b=e("hr",null,null,-1),m=t("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),h=e("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),_=t(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),u={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},v=t("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),j=e("p",null,[t("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),e("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),t("\uFF0C\u56DE\u590D"),e("strong",null,"111"),t(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),B=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function f(D,F){const s=i("ExternalLinkIcon");return n(),o("div",null,[g,e("p",null,[l,e("a",R,[c,p(s)])]),b,e("p",null,[m,h,_,e("a",u,[v,p(s)])]),j,B])}var C=r(d,[["render",f],["__file","redis-12.html.vue"]]);export{C as default};
