const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConfig = require('./config/mongodb.config');
const mongoose = require('mongoose');

const dogRoutes = require('./routes/dog.route');
const api = require('./routes/auth.route');

// Connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion MongoDB !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Remvoe MongoDB warning error
mongoose.set('useCreateIndex', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// Serve static resources
app.use('/public', express.static('public'));

app.use('/api/dogs', dogRoutes);
app.use('/api', api)

module.exports = app;