 var express = require('express');
 var bodyParser =  require('body-parser');
 var fs = require('fs');
 var app = express();
 app.use(express.static('www'));
 app.use(bodyParser.urlencoded({extended:false}));
 //读取
 app.get('/load',function(req,res){

     fs.readFile('file.txt',function(err,data){
         console.log("读到了");
         var messages = data.toString().trim();
         res.status(200).send(messages);
     })

 });

 app.get('/save',function(req,res){
     //var msg = req.query.toString().trim();
     var title =req.query.title;
     var content = req.query.content;
     var time = new Date();
     var sendTime=time.toLocaleDateString()+' '+time.toLocaleTimeString();
     var ip = req.ip;
  
     var obj = {
         title:title,
         time:sendTime,
         ip:ip,
         content:content
     }
     var objstr = JSON.stringify(obj);
     fs.readFile('file.txt',function(err,data){
         var douhao = (data.toString().trim().length > 0) ? ',' : '';
         fs.appendFile('file.txt',douhao+objstr,function(err){
             console.log('添加了'+douhao);
             if(! err){
                 res.status(200).send('ok');//这句话必须有
             }
         })
     })
 })
 app.listen(3000,function(){
    console.log('服务器正常启动');
    
 })
