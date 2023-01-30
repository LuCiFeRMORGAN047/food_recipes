const Post = require("../models/Post")
const User = require("../models/User")
module.exports.addpost_post = async (req , res)=>{
    const {titre , username , pic ,des , id }= req.body
    try{
        const post = await Post.create({
            titre ,
            username ,
            des ,
            pic
        })
        
       
 const user = await User.updateOne(
    { _id: id },
    { $addToSet: { "posts" : post._id } }
 )
 res.send(user)
    }catch(e){
        res.send(e.message)
    }

}
module.exports.getall_get = async (req , res)=>{
    try{
        const posts = await Post.find()
            res.send(posts)
    }catch(e){
        res.send(e.message)
    }
}
module.exports.getSingle_post = async (req , res)=>{
    const id = req.body.id
    try{
        const post = await Post.findById({_id : id })
            res.send(post)
    }catch(e){
        res.send(e.message)
    }
}
module.exports.save_post = async (req , res)=>{
    const id = req.body.id
    const resid = req.body.resid
    try{
        const user = await User.updateOne(
            { _id: id },
            { $addToSet: { "saved" : resid } }
         )
        res.send(user)
    }catch(e){
       res.send(e.message)
    }
}
module.exports.getall_post = async (req , res)=>{
    const id = req.body.id 
   
    
    try{
var saved = []
var myres = []
        const user = await User.findById({_id : id})
        for(let i=0 ; i<user.posts.length ; i++){
            const response = await Post.findById({
                _id : user.posts[i]
            })
            myres.push(response)
        }
        for(let i=0 ; i<user.saved.length ; i++){
            const response = await Post.findById({
                _id : user.saved[i]
            })
            saved.push(response)
        }
        
       res.send({myres , saved})
    }catch(e){
res.send(e.message)
    }
}