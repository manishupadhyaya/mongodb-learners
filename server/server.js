var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {users} = require('./models/users')
var {Todo} = require('./models/todo')

var app = express()

app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc)=>{
        res.send(doc)
    },(error)=>{
        res.status(400).send(error)
    })
})

app.listen('3000', ()=>{
    console.log("Server is running in PORT 3000")
})