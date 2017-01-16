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
// app.set('views','/')
// 向host的根路径请求时响应请求 
app.get('/',function(req, res){
	res.render('index',{title:'MorassMovie'})
	
})
app.listen(port)
console.log("server started on port:"+port);