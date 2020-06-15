const mongodb = require('mongodb')
//const assert = require('assert');

const dbUrl = 'mongodb://localhost:27017/'
const dbName = 'Test'
// Connection URL
const url = dbUrl + dbName;

async function sendTestToBdd () {
    const {client, db} = await connect ()
    try {
        await test(db)
    }
    catch (err){
        console.log(err.message)
    }
    finally {
        if (client)
            await client.close()
    }
}

async function connect () {
    const {client, db} = await new Promise((resolve,reject) => {
        const client = new mongodb.MongoClient(dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        client.connect(err => {
            if(err) return reject (err)
            else {
                const db = client.db(dbName)
                return resolve({client,db})
            }
        })
    })
    return {client, db}
}

async function test (db) {
    const collection = db.collection('test1')
    const data = [
        {id: 'test1'},
        {id: 'test2'},
        {id: 'test3'},
        {id: 'test4'}
    ]

    for (let i= 0; i< data.length; i++){
        let insert = await collection.insertOne(data[i])
        console.log(insert.result)
    }
}

async function count () {
    const {client, db} = await connect ()
    const collection = db.collection('test1')
    return collection.countDocuments()
}

async function find (query,options){
    const {client, db} = await connect ()
    const collection = db.collection('test1')
    return collection.find(query,options)
}

async function findOne (query,options){
    const {client, db} = await connect ()
    const collection = db.collection('test1')
    return collection.findOne(query,options)
}

async function insertOne (data){
    const {client, db} = await connect ()
    const collection = db.collection('test1')
    return collection.insertOne(data)
}

async function updateOne (data){
    const {client, db} = await connect ()
    const collection = db.collection('test1')
    const {_id, ...values} = data
    return collection.updateOne({_id:data.id},{$set: values})
}

async function removeOne (data){
    const {client, db} = await connect ()
    const collection = db.collection('test1')
    const {_id, ...values} = data
    return collection.updateOne({_id:data.id})
}

exports.sendTestToBdd = sendTestToBdd
exports.count = count
exports.find = find
exports.find = findOne
exports.insertOne = insertOne
exports.updateOne = updateOne
exports.removeOne = removeOne





