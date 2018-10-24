var mongoose = require('mongoose')
mongoose.Promise = global.Promise
try{
mongoose.connect('mongodb://localhost:27017/TodoApp')
}
catch (e) { 
    console.log(e)
}
module.exports = {mongoose}