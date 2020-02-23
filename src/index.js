const express = require('express');
const bodyParser = require('body-parser');
const app =  express();
app.use(bodyParser.json);

const users = [];

app.get('/',function(req,res){
	res.send('Hello World!');
})

app.get('/users', function(req, res){
	//console.log(req.params.id)
	res.send(users);
});

app.post('/users', function(req,res){
	users.push({id:0});
	res.json(users);
});

app.get('/users/:id', function(req, res){
	//console.log(req.params.id)
	const user = users.find(user => user.id == req.param.id);
	res.json(users);
});

app.listen(3000,function(){
	console.log("server is running");
})