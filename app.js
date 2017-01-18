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
var bodyParser = require('body-parser')
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
//挂载静态资源中间件 相当于设置了给每个匹配的路径都设置了处理函数
app.use(express.static(path.join(__dirname,"")))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// 设置路由 route
// 向host的根路径请求时响应请求 解析index.jade 
app.get('/',function(req, res){
	res.render('index',{
		title:'MorassMovie'
		,movies:[{
			title:""
			,_id:233
			,poster_src:"/views/images/这个杀手不太冷.jpg"
		}
		,{
		 title:""
		 ,_id:234
		 ,poster_src:"/views/images/闻香识女人.jpg"
		}
		,{
		 title:""
		 ,_id:235
		 ,poster_src:"/views/images/机械师.jpg"
		}
		]

	})
	
})

// 向host的/movie/detail路径请求时响应请求 解析detail.jade 
app.get('/movie/detail/:id',function(req, res){
	res.render('detail',{
		title:'MorassMovie'
		,movie:movies[0]
	})
	
})
// 向host的/admin/list路径请求时响应请求 解析list.jade 
app.get('/admin/list',function(req, res){
	res.render('list',{
		title:'MorassMovie 电影列表'
		,movies:[{
			_id:233,
			title:"这个杀手不太冷",
			poster_src:"/views/images/这个杀手不太冷.jpg",
			flash_src:"",
			director:"吕克·贝松",
			country:"法国",
			language:"英语、意大利语",
			year:"1994",
			summary:"里昂（让·雷诺饰）是意大利裔的顶尖职业杀手，一直孤独的住在纽约小意大利，只有一株盆栽是他最好的朋友。他形容：“他比人友善多了。他跟我一样沉默，从来不会问问题，也不会想杀我。他也跟我一样，没有根。”他虽然身怀绝技，但内心非常缺乏安全感。他甚至从不敢睡在床上，而是坐在椅子上睡，并把枪放在手边。" 
		},{
			_id:234,
			title:"这个杀手不太冷",
			poster_src:"/views/images/这个杀手不太冷.jpg",
			flash_src:"",
			director:"吕克·贝松",
			country:"法国",
			language:"英语、意大利语",
			year:"1994",
			summary:"里昂（让·雷诺饰）是意大利裔的顶尖职业杀手，一直孤独的住在纽约小意大利，只有一株盆栽是他最好的朋友。他形容：“他比人友善多了。他跟我一样沉默，从来不会问问题，也不会想杀我。他也跟我一样，没有根。”他虽然身怀绝技，但内心非常缺乏安全感。他甚至从不敢睡在床上，而是坐在椅子上睡，并把枪放在手边。" 
		}]
	})
	
})
// 向host的/admin/record路径请求时响应请求 解析record.jade 
app.get('/admin/record',function(req, res){
	res.render('record',{
		title:'MorassMovie 电影录入'
		,movie:{
			title:""
			,poster_src:""
			,flash_src:""
			,director:""
			,country:""
			,language:""
			,year:""
			,summary:""
		}
	})
	
})
app.use('/admin/movie/new',function (req, res) {
	 res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
 consloe.log("you post: "+JSON.stringify(req.body, null, 2))
})
app.listen(port)
console.log("server started on port:"+port);
// 实验用代码
var movies=[{
			_id:233,
			title:"这个杀手不太冷",
			poster_src:"/views/images/这个杀手不太冷.jpg",
			flash_src:"http://static.youku.com/v20170117.1/v/swf/loader.swf",
			director:"吕克·贝松",
			country:"法国",
			language:"英语、意大利语",
			year:"1994",
			flashvars:"VideoIDS=XMjQ3MTEyNjcxNg==",
			summary:"里昂（让·雷诺饰）是意大利裔的顶尖职业杀手，一直孤独的住在纽约小意大利，只有一株盆栽是他最好的朋友。他形容：“他比人友善多了。他跟我一样沉默，从来不会问问题，也不会想杀我。他也跟我一样，没有根。”他虽然身怀绝技，但内心非常缺乏安全感。他甚至从不敢睡在床上，而是坐在椅子上睡，并把枪放在手边。" 
		},{
			_id:234,
			title:"闻香识女人",
			poster_src:"/views/images/闻香识女人.jpg",
			flash_src:"http://www.iqiyi.com/common/flashplayer/20170116/1445f98c2359.swf",
			director:"马丁·布莱斯特",
			country:"美国",
			language:"英语",
			year:"1992",
			flashvars:"VideoIDS=19rr9ui9k0&list=19rrkp6evq",
			summary:"闻香识女人是1992年公映的美国电影。由阿尔·帕西诺、克里斯·奥唐纳等主演。电影讲述了一名预备学校的学生，为一位脾气暴躁的眼盲退休军官担任助手期间发生的故事。" 

		}]
var i
// 向详情页传入含有与路径的id相匹配的_id属性的movie
app.get('/movie/detail/:id',function(req, res){
	movies.forEach(function(item,index){
		if(item._id==req.params.id)
			i=index
	})
	res.render('detail',{
		title:'MorassMovie'
		,movie:movies[i]
	})
	
})