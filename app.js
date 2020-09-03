const express = require('express');

const app = express();

// Register View Engine. We'll use ejs
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects

app.get('/aboutus', (req, res) => {
  res.redirect('./about');
});

// Middleware 
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname });
});