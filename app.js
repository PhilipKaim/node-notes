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
    var added = notes.addNote(argv.title, argv.body);

    if (added) {
        console.log('NOTE ADDED!');
    } else {
        console.log('NOTE ALREADY EXISTS!');
    }

} else if (command === 'remove') {
    var removed = notes.removeNote(argv.title);
    var message = removed ? 'NOTE REMOVED!' : 'NOTE DOES NOT EXIST!';
    console.log(message);
} else if (command === 'list') {
    notes.getAll(argv.title, argv.body);
} else if (command === 'read') {
    notes.getNote(argv.title, argv.body);
} else {
    console.log('command not recognized');
}

