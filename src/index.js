const express = require('express');
const app =  express();

const users = [];

app.get('/',function(req,res){
	res.send('Hello World!');
})

app.get('/users', function(req, res){
	//console.log(req.params.id)
	res.send(users);
})



app.listen(3000,function(){
	console.log("server is running");
})