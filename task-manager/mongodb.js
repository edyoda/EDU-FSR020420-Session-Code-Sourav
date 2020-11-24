// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to eonnect to the database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Sourav',
    //     place: 'Bangalore'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('There was an error inserting the document.')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('users').insertMany([
        {
            name: "Ram",
            age: 28
        },
        {
            name: "Shyam",
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert multiple documents. ')
        }
        console.log(result.ops)
    })



} )
