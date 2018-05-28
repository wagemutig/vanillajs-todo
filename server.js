var express = require('express')
var mongoose = require('mongoose')
var assert = require('assert')
var bodyParser = require('body-parser')
var expressHbs = require('express-handlebars')
var app = express()
var Todo = require('./models/todo')

var index = require('./views/index')

// connection uri
//var uri = 'mongodb+srv://admin:Daddy-Anode-39@vanillajs-todo-jq2sk.mongodb.net/test'
var uri = 'mongodb://localhost/todo'
mongoose.connect(uri)

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({
     extended: false
}))

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs', partialsDir: 'server/views/partials'}))
app.set('view engine', '.hbs')

app.use(bodyParser.json())
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// app.get('/', (req, res) => res.sendFile('index.html', { root: './public/html' }))

app.get('/', function(req, res) {
  Todo.find({}, function(err, todos) {
    console.log(todos)
    res.render('index', { title: 'VanillaJS Todo', todos: todos})
    if (err) throw err
  })
//  res.sendFile('index.html', { root: './public/html' })
})

app.post('/', function(req, res) {
  todo = new Todo
  todo.text = req.body.todoText
  todo.save(function(err) {})

  res.redirect('/')
})

// app.get('/update', function(req, res) {
// })
//
// app.get('/delete', function(req, res) {
// })

app.listen(3000, () => console.log('app listening on port 3000'))
