var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var path = require('path')
var routes = require('./routes')

var app = express()

app.use(bodyParser.urlencoded())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname + '/views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', routes.getAll)
app.get('/outfit', routes.getOutfits)
app.get('/trash', routes.getDuties)
app.post('/newWomble', routes.newWomble)
app.get('/delete', routes.delWomble)
app.post('/update', routes.updateWom)

var PORT = 3000

app.listen(PORT, function () {
  console.log('CLEANING UP ALL OF THE THINGS THAT WE FIND... ON PORT', PORT)
})
