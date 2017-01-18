///////////////////////////////////////////////////
// 官方示例                                      //
// var express = require('express')              //
// var app = express()                           //
// app.set                                       //
// app.get('/', function (req, res) {            //
//   res.send('Hello World')                     //
// })                                            //
// app.listen(3000)                              //
// console.log("succsessful")                    //
//                                               //
//                                               //
///////////////////////////////////////////////////



var express = require('express')
var path = require("path")
////////////////////////////////////////////////////////////////////////////
//tips:                                                                   //
//The process object is a global that provides information about,         //
//and control over, the current Node.js process. As a global,             //
//it is always available to Node.js applications without using require(). //
////////////////////////////////////////////////////////////////////////////
var port = process.env.PORT || 3000

var app = express()

//解析jade时 默认会用app.engine('jade', require('jade').__express);
app.set('view engine','jade')  //后缀省略时默认为 .jade
app.set('views','./views/pages')
app.use(express.static(path.join(__dirname,"")))
// 设置路由 route
// 向host的根路径请求时响应请求 解析index.jade 
app.get('/',function(req, res){
	res.render('index',{title:'MorassMovie 首页'})
	
})
// 向host的/movie/detail路径请求时响应请求 解析detail.jade 
app.get('/movie/detail',function(req, res){
	res.render('detail',{title:'MorassMovie 详情'})
	
})
// 向host的/admin/list路径请求时响应请求 解析list.jade 
app.get('/admin/list',function(req, res){
	res.render('list',{title:'MorassMovie 电影列表'})
	
})
// 向host的/admin/record路径请求时响应请求 解析record.jade 
app.get('/admin/record',function(req, res){
	res.render('record',{title:'MorassMovie 电影录入'})
	
})
app.listen(port)
console.log("server started on port:"+port);