const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error)
    {
        console.log("Unable to connect to MongoDB Server")
    }
    else
    {
        console.log("Connected to MongoDB Server")
    }
    db.collection('Todos').find({
        _id: new ObjectID('5bc87e0b4d56503a904d2eaf')
    }).toArray().then((docs)=>{
        console.log('Todos:')
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('Unable to fetch Todos')
    })

    db.collection('Todos').count().then((count)=>{
        console.log(`Todos Count ${count}`)
    })

    db.collection('Users').find({name: "Manish"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2))
    })

    db.close()
})