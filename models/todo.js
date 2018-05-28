var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema ({
  text: String
})

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
