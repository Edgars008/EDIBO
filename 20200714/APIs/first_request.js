const axios = require('axios');


// Get HTML from Google
// We passs tree things in function error response body
request('https://api.ratesapi.io/api/2020-01-12', function(error, response, body){
if(!error && esponse.statusCode == 200){
    var parseData = JSON.parse(body);
    console.log(parseData);
}

});

