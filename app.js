var http = require('http');
var express = require('express');
var app = express();
// 指定映射目录
app.use("/", express.static(__dirname + '/'));

// 创建服务端
http.createServer(app).listen('80', function() {
	console.log('启动服务器完成,查看效果请输入http://localhost/mesMall.html');
});