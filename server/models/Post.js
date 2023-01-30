const mongoose = require('mongoose')
const postSchema =  new mongoose.Schema({
    username : String ,
    titre : String ,
    des : String ,
    pic : String 
})
const Post= mongoose.model("posts" , postSchema)
module.exports = Post