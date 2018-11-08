const request = require('request');

request({
  // The format of URL: http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=address of ur location
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=S898pMmdOfyxL1A39aYem73Gtbi0Q0oD&location=m1%207bd',
  json: true  // It tells request that the data comming back is json string and you need 
              // to convert it to object for us
}, (err, response, body) => {
  console.log(JSON.stringify(body.results[0].locations[0].latLng, undefined, 2));
})