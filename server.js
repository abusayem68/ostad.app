const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is home page</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is About Page</h1>');
    res.end();
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is Contact Page</h1>');
    res.end();
  } else if (req.url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.write('There is an error to create file !');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('File was created successfully');
        res.end();
      }
    });
  }
});

server.listen(3000, () => {
  console.log('The server is running on port 3000');
});
