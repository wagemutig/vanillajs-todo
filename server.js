var express = require('express')
var app = express()
var mongo = require('mongodb')

var url = 'mongodb+srv://vanillajs-todo-jq2sk.mongodb.net:27017/test'

app.use(express.static(__dirname + '/public'));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', (req, res) => res.sendFile('index.html', { root: './public/html' }))

app.listen(3000, () => console.log('app listening on port 3000'))
