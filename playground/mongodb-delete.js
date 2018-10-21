const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
    if(error)
    {
        console.log("Unable to connect to MongoDB Server")
    }
    else
    {
        console.log("Connected to MongoDB Server")
    }

    // db.collection('Users').deleteMany({name: "Manish"}).then((result)=>{
    //     console.log(`${result.result.n} such Todos deleted`)
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId("5bccbcf8df18bd82976e58ab")
    }).then((one)=>{
        console.log(`${JSON.stringify(one.value,undefined,2)} deleted`)
    })

    db.close()
})