var http = require("http");//从NodeJS原生API中通过require引入http这个模块,http对象就被赋值到http变量中
http.createServer(function(req,res){
     //定义HTTP头
     res.writeHead(200,{'Content-Type':'text/plan'});
     //发送响应的数据
     res.end('hello world!\n');
}).listen(8000);

//服务运行后输出一行数据 以正视服务启动成功
console.log('server is running....');