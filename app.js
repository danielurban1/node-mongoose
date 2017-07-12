var express = require('express');
var bodyParser = require('body-parser');

// var {mongoose} = require('./db/mongoose');
// var {Todo} = require('./models/todo');
// var {Userslist} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.get('/asad', (req, res) =>{
  res.send('ok');
});

// app.post('/todo', (req, res) =>{
//   console.log("body", req.body);
//   var todo = new Todo({
//     text: req.body.text
//   });
//   todo.save().then((doc) =>{
//     console.log('Saved', req.body.text);
//     res.status(400).send(doc);
//   }, (err) =>{

//     console.log(err);
//   })
// });

app.listen(3000, ()=> {
  console.log('Started at');
});
