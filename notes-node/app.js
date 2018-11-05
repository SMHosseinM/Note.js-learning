// Importing built-in modules + npm
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Importing a module from a directory
const note = require('./note.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  description: 'Body of note',
  demand: true,
  alias: 'b'
};

// filtering the inputs.
/*
 * Writting properties one after another called chaining property.
 *
 * Here command gets three arguments.
 * 1st argument describe the argument needs to be entered by the user.
 * 2nd argument is the description for the user to figure out what the first argument is.
 * 3rd argument is an objects containing the flags.
 * 
 * Each flag property has body of object.
 * The body of object contains 3 properties.
 * 1st is "descibe" providing some description about the flag for the user.
 * 2nd is "demand" wether is flag is optiona or compulsory. demand is false by default.
 * 3rd is "alias" which its name describes what it does.
*/
const argv = yargs
 .command('add', 'Add a new note',{
   title: titleOptions,
   body: bodyOptions
 })
 .command('list', 'Listing the notes')
 .command('remove', 'Remove', {
   title: titleOptions
 })
 .command('read', 'Reading the body of a node', {
   title: titleOptions
 })
 .help()
 .argv;

 // input is the argument provided by the user
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
  const allNotes = note.getAll();
  allNotes.forEach( (noteItem) => note.display(noteItem.title, noteItem.body))
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