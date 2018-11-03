console.log('Starting notes.js');
 
const fs = require('fs');

let loadFile = () => {
  try{
    const stringData = fs.readFileSync('note-data.json', 'utf8');
    return JSON.parse(stringData);
  } catch (e) {
    return [];
  }
};

const writeFile = (notes) => {
  fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = loadFile();
  console.log(notes)
  
  const note = {
    title,
    body
  }

  const duplicateArray = notes.filter((note) => note.title === title);

  if(duplicateArray.length === 0){
    notes.push(note);
    writeFile(notes);
    return note;
  }
  
};

const getAll = () => {
  console.log('Getting all lists');
};

const getNote = (title) => {
  const currentNotes = loadFile();
  const lookingNote = currentNotes.filter((note) => note.title === title);
  if(lookingNote.length > 0)
    return lookingNote[0];
}

const removeNote = (title) => {
  const arrOfJSON = loadFile();
  let filterArrayOfJSON = arrOfJSON.filter((note) => note.title !== title);
  writeFile(filterArrayOfJSON);
  return arrOfJSON.length !== filterArrayOfJSON.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
