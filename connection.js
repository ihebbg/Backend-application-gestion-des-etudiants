
// connect DB
const mongoose = require('mongoose')//chargement mongodb
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION,  
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));