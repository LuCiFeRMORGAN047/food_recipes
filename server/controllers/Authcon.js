const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createToken = (id) =>{
    return jwt.sign({id}, 'messi')
}

module.exports.signup_post=  async (req , res) =>{
   const {username ,email , password  } = req.body
   try{
    const salt = await  bcrypt.genSalt()
    const hashed =  await bcrypt.hash(password,salt)
    const user = await  User.create({
        email ,
        password : hashed , 
        username
    })
    const token = createToken(user._id)
    res.cookie('jwt',token , {
        httpOnly : true 
       
    })

    res.send({id :user._id , username : user.username})
   }catch(e){
    res.send(e.message)
   }
}
module.exports.login_post= async (req , res)=>{
    const {email , password  } = req.body
    try{
        const user = await User.findOne({email})
        if(!user){
            res.send('user not found')

        }else{
            const auth = await bcrypt.compare(password , user.password)

            if(auth){
                const token = createToken(user._id)
        res.cookie('jwt',token , {
            httpOnly : true 
        
             })
                res.send({id :user._id , username : user.username})
            } else{
                res.send('password is incorect')
            }
        }
    }catch(e){
            res.send(e.message)
    }
}
module.exports.logout_get= (req , res )=>{
    res.clearCookie('jwt');
    res.send('logout succ');
}