var express = require('express')
var app = express()

app.use(require('./server/routes/routes'))

app.listen(3000, () => console.log('app listening on port 300'))
