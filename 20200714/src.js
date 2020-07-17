const fetch = require("node-fetch");

// fetch('./xml/books.xml')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('./xml/books.xml')
// .then(function(resp) {
// 	return resp.text();
// })
// .then(function(data) {
// 	console.log(data);
// 	let parser = new DOMParser(),
// 	xmlDoc = parser.parserFromString(data, 'text/xml');
// 		console.log(xmlDoc.getElementsByTagName('author'));
// })

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))





// Node server to start  

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

