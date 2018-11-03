// const object = {
//   name: 'Hossein',
//   age: 24,
//   webDeveloperLover: true
// }

// console.log(object)
// console.log(typeof(object));
// console.log('---------------------');
// const json = JSON.stringify(object);
// console.log(typeof(json));
// console.log(json);
// console.log('---------------------');
// const jsonReturn = JSON.parse(json);
// console.log(typeof(jsonReturn));
// console.log(jsonReturn);

const fs = require('fs');

const originalNode = {
  title: 'Some title',
  body: 'Some body'
}

const originalNodeString = JSON.stringify(originalNode);
fs.writeFileSync('note.json', originalNodeString);
fs.writeFileSync('note.json', originalNodeString);

const noteString = fs.readFileSync('note.json');
const note = JSON.parse(originalNodeString);

console.log(typeof note);
console.log(note.title);

