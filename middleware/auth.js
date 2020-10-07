
const jwt = require('jsonwebtoken');
const keys = require('../config/keys/keys')
const auth = async(req,res,next)=>{

    try {
        const token = req.header('access-token');
        if(!token){
            res.status(400).send({error:'no token provided'})
        }else{
            const decodedToken=jwt.verify(token,keys.JwtSecret);
            req.body.user=decodedToken;
            next();
        }
        
    } catch (error) {
        res.status(500).send(`auth error: ${error.message}`)
    }

}


module.exports=auth;