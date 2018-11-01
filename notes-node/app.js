console.log("Starting app.js");

const fs = require('fs');
const note = require('./note.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.uniq([2,3,4,5,4,32,2]));

let argument = process.argv[2];
console.log(argument);