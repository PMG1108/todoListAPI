const mongoose = require("mongoose")
const URL = "mongodb+srv://giang110802006_db_user:TV9bN32iSydU7VKI@cluster0.pq240yd.mongodb.net/?appName=Cluster0"

const connectionDB = async() =>{
    await mongoose.connect(URL,
        {
        maxPoolSize: 5,
        serverSelectionTimeoutMS: 5000,
    }
).then(()=>{
    console.log("Connected DB")
}).catch(err =>{
    console.log("Error to connect DB "+ err)
})
}

 module.exports = connectionDB