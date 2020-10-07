
const jwt = require('jsonwebtoken');

const auth = async(req,res,next)=>{

    try {
        const token = req.header('access-token');
        if(!token){
            res.status(400).send({error:'no token provided'})
        }else{
            const decodedToken=jwt.verify(token,'temporaryKey');
            req.body.user=decodedToken;
            next()
        }
        
    } catch (error) {
        res.status(500).send(error.message)
    }

}


module.exports=auth;