console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var argv = yargs.argv;
var command = argv._[0];
console.log(`command: ${command}`);
console.log(argv);


if (command === 'add') {    
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('NOTE ADDED!');
    } else {
        console.log('NOTE ALREADY EXISTS!');
    }

    notes.logNotes(note);

} else if (command === 'remove') {
    var note = notes.removeNote(argv.title);
    var message = note ? 'NOTE REMOVED!' : 'NOTE DOES NOT EXIST!';
    console.log(message);
    notes.logNotes(note);

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(allNotes);

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    
    if (note) {
        console.log('NOTE FOUND!');
    } else {
        console.log('NOTE NOT FOUND!');
    }

    notes.logNotes(note);

} else {
    console.log('command not recognized');
}

