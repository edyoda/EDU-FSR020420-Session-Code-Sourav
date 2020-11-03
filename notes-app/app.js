const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Title to remove note for.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function () {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()