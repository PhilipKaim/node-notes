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
    notes.addNote(argv.title, argv.body);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'list') {
    notes.getAll(argv.title, argv.body);
} else if (command === 'read') {
    notes.getNote(argv.title, argv.body);
} else {
    console.log('command not recognized');
}

