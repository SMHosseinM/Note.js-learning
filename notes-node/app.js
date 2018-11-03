console.log("Starting app.js");


const fs = require('fs');
const note = require('./note.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const input = argv._[0];

if (input === 'add') {
  let result = note.addNote(argv.title, argv.body);
  if(result !== undefined)
  { 
    console.log('note get added.');
  }
  else
    console.log(argv.title + 'Note did not get added.')
}
else if (input === 'list') {
  note.getAll();
}
else if (input === 'read') {
  note.getNote(argv.title);
}
else if (input === 'remove') {
  note.removeNote(argv.title);
}
else {
  console.log('Please insert a correct flag!');
}