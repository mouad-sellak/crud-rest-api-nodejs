const mongoose=require('mongoose')
mongoose.connect(
    "mongodb://localhost:27017/node-api",
    (err) => {
        if(!err){
            console.log("connected to mongodb")
        }else{
            console.log("faliled"+err)
        } 
    }
)