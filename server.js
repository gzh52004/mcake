
let express = require("express");
let fs = require("fs");
let path = require("path");

//实例化
let app = express();
//开启静态资源服务器
app.use(express.static("./"));

//哈希 hash模式:带#号,history模式:不带#号(上线之后,刷新页面就会丢失主页)
//下面的代码是解决history模式刷新页面就会丢失主页问题的
app.use((req, res) => {
  // 任何的请求返回index.html的内容
  fs.readFile(path.resolve(__dirname, "index.html"), (err, data) => {
    res.set("Content-Type", "text/html; charset=utf-8");
    res.send(data);
  });
});

//开启服务 端口号：1000-60000
app.listen(60000, () => {
  console.log("服务器已开启，请访问：http://localhost:60000");
});
