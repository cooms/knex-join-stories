var db = require('./data/db')

module.exports = {
  getOutfits: getOutfits,
  getDuties: getDuties,
  newWomble: newWomble,
  getAll: getAll,
  delWomble: delWomble,
  updateWom: updateWom
}

function getAll (req, res) {
  db.getAll()
  .then(sendAll)
  .catch(sendError)

  function sendAll(data) {
    res.render('home', {data:data})
  }
}

function getOutfits (req, res) {
  db.getOutfits()
  .then(sendOutfits)
  .catch(sendError)

  function sendOutfits(data) {
    res.render('outfit', {data: data})
  }
}

function getDuties (req, res) {
  db.getDuties()
    .then(sendDuties)
    .catch(sendError)

    function sendDuties(data) {
      res.render('trash', {data:data})
    }
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

function delWomble (req, res) {
  var womId = req.query.wom_id
  db.delWomble(womId)
  .then(function (wombles) {
    res.redirect('/')
  })
  .catch(sendError)
}

function updateWom (req, res) {
  var wombleDetails = {
    id: req.body.id,
    characteristic: req.body.characteristic
  }
  db.updateWom(wombleDetails)
  .then(function (data) {
    res.redirect('/')
  })
  .catch(sendError)
}

function sendError (err) {
  console.error(err.message)
  res.status(500).send("NO")
}
