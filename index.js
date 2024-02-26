const express = require('express');
const transactRouter = require('./routes/transactRouter');
const statsRouter = require('./routes/statsRouter');
const pieRouter = require('./routes/pieRouter');
const comboRouter = require('./routes/comboRouter');
const initializeService = require('./services/initializeService');
const barRouter = require('./routes/barRouter');
require('dotenv').config();


const connection = require('./config/db');

const app = express();
const port = 3000;

// Initialize the database when the connection is established
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  console.log('Connected to database');
  initializeService.initializeDatabase()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error initializing database:', error);
    });
});

app.use('/api', transactRouter);
app.use('/api', statsRouter);
app.use('/api', barRouter);
app.use('/api', pieRouter);
app.use('/api', comboRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
