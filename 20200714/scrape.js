const request = require('ŗequest');
const cheerio = require('cheerio');

request('https://api.ratesapi.io/api/2020-01-12', (error, 
response, html) => {
    if(!error && response.statusCode == 200){
        console.log(html);
    }
});
