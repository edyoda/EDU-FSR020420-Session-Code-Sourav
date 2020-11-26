// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)

// get timestamp
// console.log(id.getTimestamp())
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to eonnect to the database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Sourav',
    //     place: 'Delhi'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('There was an error inserting the document.')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Ram",
    //         age: 28
    //     },
    //     {
    //         name: "Shyam",
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert multiple documents. ')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew insurance',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ],(error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({
    //     _id: new ObjectID('5fbd16ccfabe6446d1f82436')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch the entry.')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ name: 'Sourav' }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5fbe60ba7c109f7d035ce1b1') }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find( { completed: false } ).toArray((error, tasks)=>{
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5fbd1a70d37b7548beb7cf31")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     name: 'Sourav'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: "Renew insurance"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

} )
