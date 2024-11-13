const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserModel = require('./models/Users')
const app = express();
const port = 5000; 

app.use(cors()); 
app.use(express.json());
app.use(bodyParser.json()); 

mongoose.connect("mongodb://127.0.0.1:27017/crud");
app.get('/',(req,res)=>{
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
  const id = req.params.id;
  UserModel.findById({id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
app.post('/createUser',(req,res)=>{
  UserModel.create(req.body)
  .then(users=> res.json(users))
  .catch(err => res.json(err))
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/',(req,res)=>{
  res.send("Hare Krishna!")
})


