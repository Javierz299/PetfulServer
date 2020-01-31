const express = require('express');
const catsRouter = require('./cats/cats-router');
const dogsRouter = require('./dogs/dogs-router');
const humansRouter = require('./humans/humans-router');
const cors = require('cors');
const morgan = require('morgan');
const { CLIENT_ORIGIN } = require('./config');


const app = express();
const jsonParser = express.json();

app.use(cors({
  origin: (CLIENT_ORIGIN)
}));

const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting));


app.get('/', (req, res) => {
  res.send('hey hey');
});

app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter);
app.use('/api/humans', humansRouter);

module.exports = app;