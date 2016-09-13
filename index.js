var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var app = express()

app.use(bodyParser.urlencoded())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', __dirname + 'views')


// List all wombles
app.get('/', function (req, res) {
  knex('wombles')
  .select('name')
  .then(function (data) {
    console.log(data.map(function (womble) {
      return womble.name
    }))
  })
  .catch(console.error)
})



// List rubbish duties
app.get('/rubbishDuties', function (req, res) {
  knex('wombles')
  .join('rubbish', 'wombles.rubbish_id', '=', 'rubbish.id')
  .select('wombles.name', 'rubbish.name as trash')
  .then( function (data) {
    console.log(data)
    })
  })





var PORT = 3000

app.listen(PORT, function () {
  console.log('CLEANING UP ALL OF THE THINGS THAT WE FIND... ON PORT', PORT)
})
