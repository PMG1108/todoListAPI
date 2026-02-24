const mongoose = require("mongoose")

const connectionDB = async() =>{
    await mongoose.connect(process.env.URL,
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