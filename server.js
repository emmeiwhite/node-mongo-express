const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/index') {
    console.log(_.random(1, 8000));
    // console.log(_.map([1, 2, 3], index, num => num * 2));
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        console.log('err');
        res.end();
      } else {
        res.setHeader('Content-type', 'text/html');
        res.statusCode = 200;
        res.write(data);

        res.end();
      }
    });
  } else if (pathName === '/about') {
    fs.readFile('./views/about.html', (err, data) => {
      if (err) {
        console.log('err');
        res.end();
      } else {
        res.setHeader('Content-type', 'text/html');
        res.statusCode = 200;
        res.write(data);

        res.end();
      }
    });
  } else if (pathName === "/about-me") {
    res.statusCode = 301;// for redirects   
    res.setHeader('Location', '/about');
    res.end();
  } else {
    fs.readFile('./views/404.html', (err, data) => {
      if (err) {
        console.log('err');
        res.end();
      } else {
        res.setHeader('Content-type', 'text/html');
        res.statusCode = 404;
        res.write(data);

        res.end();
      }
    });
  }
});

server.listen(8000, 'localhost', () => {
  console.log('Listening to the requests on port 8000');
});