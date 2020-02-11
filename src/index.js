const express = require('express');
const app =  express();

app.get('/',function(req,res){
	res.send('Hello World!');
})

app.get('/users', function(req, res){
	//console.log(req.params.id)
	res.json({
		user: "juan",
		email: 'j@gmail.com',
	})
})



app.listen(3000,function(){
	console.log("server is running");
})