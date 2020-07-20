const fetch = require("node-fetch");
// const axios = require('axios');
const ul = document.getElementById('rates');
var EUR="EUR €";
var USD="USD $";
var POUND="Pound £";

var chooseDate="2013-12-24";

// Get data with fetch function
fetch('http://data.fixer.io/api/2013-12-24?access_key=d1750a6120d947dff0e645a63ca7dc06&base=EUR&symbols=USD,GBP,EUR')
  .then(response => response.json())
  .then(json => console.log(json))



// Get data with axios function
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

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

