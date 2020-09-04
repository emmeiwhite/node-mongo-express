const express = require('express');

const app = express();

// Register View Engine. We'll use ejs
app.set('view engine', 'ejs');

app.listen(3000);

/*  -----
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

---- */

// Handling routes using ejs 

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Middleware
app.use((req, res) => {
  res.status(404).render('404');
});