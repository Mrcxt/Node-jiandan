#煎蛋网 api

##首页

get：`http://i.jandan.net/?oxwlxojflwblxbsapi=jandan&page=1`

## 专题

## 问答

## 段子

get：`http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_duan_comments&page=1`

## 随手拍（妹图）

get：`http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=1`

## 无聊图

get：`http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_pic_comments&page=1`
返回：

## 热榜

## 点 OO

<!--
post：`http://i.jandan.net/index.php?acv_ajax=true&option=1`

body：

```json
{ "ID": "{comment_post_ID}" }
``` -->

post：`http://jandan.net/jandan-vote.php`

body：

```js
{
  comment_id: 4499783;
  like_type: pos; // 点OO
  data_type: tucao;
}
```

## 点 XX

<!-- post：`http://i.jandan.net/index.php?acv_ajax=true&option=0 body: {ID: "{comment_post_ID}"}`

body：

```json
{ "ID": "{comment_post_ID}" }
``` -->

post：`http://jandan.net/jandan-vote.php`

body：

```js
{
  comment_id: 4499346;
  like_type: neg; // 点XX
  data_type: tucao;
}
```

## 获取评论

get：`http://i.jandan.net/tucao/{id}`

## 发表评论

post：`http://jandan.net/jandan-tucao.php`

body：

```js
{
  author: "xxx";
  email: "xxx@xxx.com";
  content: "是是是";
  comment_id: "21312312";
  comment_post_ID: "312312"; // 可选，问答区二级评论
}
```
