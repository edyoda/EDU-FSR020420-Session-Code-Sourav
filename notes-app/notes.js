const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) =>  {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('Note added successfully!'))
    } else {
        console.log(chalk.red.inverse.bold('Note was already present!'))
    }
    
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notesToKeep.length < notes.length){
        console.log(chalk.inverse.green.bold('Removed the note = ', title))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.inverse.red.bold('No note with this title found. '))
    }
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes...'))
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(chalk.inverse(note.title))
    });
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch(e){
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.inverse.red('No note found. '))
    }
} 

const saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}