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


// Custom Middleware: Let's log message on the console on every request
app.use((req, res, next) => {
  console.log('NEW REQUEST MADE');
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('host', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('In the next middleware !!!');
  next();
})

// Handling routes using ejs  || Now comes the amazing part. Sending Dynamic data to our ejs

app.get('/', (req, res) => {
  // Passing blogs to Home page
  const blogs = [
    { title: "Yoshi Find Eggs", snippet: "Eggs are healthy source of protein and vitamins" },
    { title: "People Roam around", snippet: "Most of the people roam here and there" },
    { title: "How to defeat laziness", snippet: "Believe in yourself and face the challenges" },
  ];

  res.render('index', { title: "Home", blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: "About" });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: "Contact" });
});

// Middleware
app.use((req, res) => {
  res.status(404).render('404', { title: "ERROR" });
});