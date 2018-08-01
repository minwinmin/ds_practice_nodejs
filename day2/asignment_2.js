//curl -H 'Content-Type:application/json' -d "{\"name\":\"ささき\",\"score$//curl -H :リクエストヘッダを追加する。
//POSTのフォーマットがJSONの場合は -H$//pack$//-d はPOSTする本体を指定するオプションで、その後がデータになる。
//データをファイルで指定したい場合はファイル名の先頭に @ を付けて、
//@foo.txt のように指定する。
//ファイルではなく標準入力を指定するには @- とする。
//https://hydrocul.github.io/wiki/commands/curl.html
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

app.listen(3000);
//↓がmain()みたいな感じ
app.post('/', function(req, res){
//res.setHeader('Content-Type','application/json');
console.log(req.body);
if(req.body.score >= 80){
res.json({"message":req.body.name + "は合格です。"});
//console.log('合格');
}else{
res.json({"message":req.body.name + "は不合格です。"})
}
});
