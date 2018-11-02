console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
}

const getAll = () => {
  console.log('Getting all lists');
}

const getNote = (title) => {
  console.log('Reading Note', title);
}

const removeNote = (title) => {
  console.log('Removing', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
