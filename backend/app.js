const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/mongodb.config');
const mongoose = require('mongoose');
  
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(dbConfig.url,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion MongoDB !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))

const dogRoutes = require('./routes/dog.route');
app.use('/api/dogs', dogRoutes);

module.exports = app;