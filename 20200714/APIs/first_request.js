const axios = require('axios');

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

// try {
// const response = await axios.get(
//   'https://jsonplaceholder.typicode.com/todos')
  
// }catch(err){
//   console.log(err);
// }
// axios.all([axios.get('https://jsonplaceholder.typicode.com/todos/1')])
// .then(responseArr => {
//   console.log(userId);
// })

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

  fetch('https://openexchangerates.org/api/historical/2012-07-10.json?app_id=YOUR_APP_ID')
  .then(response => response.json())
  .then(json => console.log(json))