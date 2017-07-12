var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Userslist} = require('./models/user');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todo', (req, res) =>{
  console.log("body", req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) =>{
    console.log('Saved', req.body.text);
    res.status(400).send(doc);
  }, (err) =>{

    console.log(err);
  })
});

app.get('/todo', (req, res)=>{
	Todo.find().then((todo)=>{
		res.send({todo});
	}, (err)=>{
		res.status(400).send(err);
	})
});

app.get('/todo/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, ()=> {
  console.log(`Started at ${port}`);
});
