console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];
console.log(`command: ${command}`);

if (command === 'add') {    
    console.log('adding new note');
} else if (command === 'remove') {
    console.log('removing note');
} else if (command === 'list') {
    console.log('listing all notes');
} else if (command === 'read') {
    console.log('reading note');
} else {
    console.log('command not recognized');
}

