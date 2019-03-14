var express=require('express');
var app =express();
var path = require('path');
app.use(express.json());
app.use(express.urlencoded());
let fs = require('fs')
let concatFile = require('./readFile.js')
console.log(concatFile)

app.use(express.static(path.join(__dirname,'./')))
//通过访问http://localhost:3000/data看到红色div块
app.get('/data',function(req,res){
    res.status(200)
   concatFile().then((data)=>{
    res.send(data)
   })
})

app.listen(3000, function () {
    console.log('服务器开启成功：端口号为3000！')
})