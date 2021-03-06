const express = require('express');
const app =  express();

const users = [];

app.get('/',function(req,res){
	res.send('Hello World!');
})

app.get('/users', function(req, res){
	//console.log(req.params.id)
	res.send(users);
});

app.post('/user', function(req,res){
	users.push({id:0});
	res.json(users);
});

app.get('/user/:id', function(req, res){
	const user = users.find(user => user.id == req.params.id);
	res.json(user);	
});

app.delete('/user/:id', function(req, res){
	const user = users.find(user => user.id == req.params.id);
	if(!user){
		return res.sendStatus(204);
	} 
	users.splice(users.indexOf(user), 1);
	res.status(202).send(user);
});

app.listen(3000,function(){
	console.log("server is running");
})