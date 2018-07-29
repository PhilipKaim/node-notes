const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const TITLE_OPTIONS = {
    describe: 'title of new note',
    alias: 't',
    demand: true
};
const BODY_OPTIONS = {
    describe: 'body of new note',
    alias: 'b',
    demand: true
};

var argv = yargs
    .command('add', 'add new note', {
        title: TITLE_OPTIONS,
        body: BODY_OPTIONS
    })
    .command('list', 'lists all notes')
    .command('read', 'read a note', {
        TITLE_OPTIONS
    })
    .command('remove', 'remove a note', {
        TITLE_OPTIONS
    })
    .help()
    .argv;
var command = argv._[0];

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
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        console.log(note);
    });

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

