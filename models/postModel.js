const mongoose = require('mongoose')

const PostModel = mongoose.model(
    "node-api",
    {
        author:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        created_at:{
            type:Date,
            default:Date.now  
        }
    },
    "posts"
)

module.exports={PostModel}