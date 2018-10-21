const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log("Unable to connect to MongoDB Server")
    } else {
        console.log("Connected to MongoDB Server")
    }

    // db.collection('Users').deleteMany({name: "Manish"}).then((result)=>{
    //     console.log(`${result.result.n} such Todos deleted`)
    // })

    db.collection('Users').findOneAndUpdate({
        name: "Manish"
    }, {
        $set: {
            name:"Andrew"
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((res)=>{
        console.log(res)
    })
    
    db.close()
})