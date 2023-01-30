const jwt = require('jsonwebtoken')

const requireAuth= (req , res , next )=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, 'messi' , (err , decodedToken)=>{
            if(err){
                res.send(err)
            }else{
                next()
            }
        })
    }else{
        res.send('login is required')
    }
    
}
module.exports = requireAuth;