// var development = require('./knexfile').development
// var knex = require('knex')(development)
var db = require('./data/db')

module.exports = {
  getOutfits: getOutfits,
  getDuties: getDuties,
  newWomble: newWomble,
  getAll: getAll
}

// function getWombles (req, res) {
//   db.getWombles()
//   .then(sendWombles)
//   .catch(sendError)
//
//   function sendWombles (data) {
//     res.render('home', {data:data})
//   }
//
//   function sendError (err) {
//     console.error(err.message)
//     res.status(500).send("Couldn't show you the users!")
//   }
// }

function sendError (err) {
  console.error(err.message)
  res.status(500).send("NO")
}

function getOutfits (req, res) {
  db.getOutfits()
  .then(sendOutfits)
  .catch(sendError)

  function sendOutfits(data) {
    res.render('outfit', {data: data})
  }

  // function sendError (err) {
  //   console.error(err.message)
  //   res.status(500).send("NO")
  // }
}

function getDuties (req, res) {
  db.getDuties()
    .then(sendDuties)
    .catch(sendError)

    function sendDuties(data) {
      res.render('trash', {data:data})
    }

    // function sendError (err) {
    //   console.error(err.message)
    //   res.status(500).send("NO")
    // }
}


function newWomble (req, res) {
  var wombleDetails = {
    name: req.body.name,
    characteristic: req.body.characteristic,
    rubbish: req.body.rubbish
  }
  db.newWomble(wombleDetails)
  .then(function (data) {
    res.redirect('/')
  })
  .catch(console.error)
}

function getAll (req, res) {
  db.getAll()
  .then(sendAll)
  .catch(sendError)

  function sendAll(data) {
    res.render('home', {data:data})
  }

  // function sendError (err) {
  //   console.error(err.message)
  //   res.status(500).send("NO")
  // }
}
