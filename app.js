const express = require('express')
const app = express()
const bodyparser= require('body-parser')
require('./connection.js')
const routes_etudiant = require('./routes/étudiant_routes')// importer les routes étudiant
const routes_auth = require('./routes/auth')// importer les routes étudiant
const routes_mat = require('./routes/matiere_routes')// importer les routes matier
const routes_absc = require('./routes/abscent_routes')// importer les routes abscent
const routes_modules = require('./routes/modules_routes')// importer les routes abscent

app.use(bodyparser.json())


app.use('/',routes_auth)

app.use('/',routes_etudiant)

app.use('/',routes_mat)

app.use('/',routes_modules)
app.use('/',routes_absc)


app.get('/', (req, res) => {
    res.send('Hello world!')
  })


  // serveur
 app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})