console.log("Starting app.js");


const fs = require('fs');
const note = require('./note.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const input = argv._[0];

if (input === 'add') {
  let result = note.addNote(argv.title, argv.body);
  if(result)
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
  const intendedNote = note.getNote(argv.title);
  if(intendedNote)
    console.log(`${intendedNote.title}: ${intendedNote.body}`);
  else
    console.log('Not such note found');
}
else if (input === 'remove') {
  if(note.removeNote(argv.title))
    console.log('Note removed');
  else 
    console.log('Note was not removed');
}
else {
  console.log('Please insert a correct flag!');
}