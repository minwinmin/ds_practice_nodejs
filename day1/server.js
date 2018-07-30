'use strict';
const express = require('express') ;
const app = express();
var path = require('path');
const PORT = 4000;
app.get('/',  (req, res)  => res.send('Hello World'));
//静的ファイルを読み込むためにexpress.staticを使う
//express.staticミドルウェア関数
//publicフォルダに入ってるindex.htmlを参照しにいっている
//path.join(__dirname,'public')で絶対パスに変更している
//path.joinは文字列を結合して、ディレクトリごとに区切っていく
//__dirnameは常に現在のファイルのディレクトリを示す
app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT);
console.log(`listening on *: ${PORT}`);
