const jwt = require('jsonwebtoken')

module.exports.verif_get = async (req , res ) =>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, 'messi' , (err , decodedToken)=>{
            if(err){
                res.send(err.message)
            }else{
                res.send(decodedToken.id)
            }
        })
    }else{
        res.send(false)
    }
}