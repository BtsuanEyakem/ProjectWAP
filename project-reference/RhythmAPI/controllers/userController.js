
const User = require('../models/user')
exports.login = (req,res)=>{
const {username,password} = req.body;
const  user = User.findUser(username,password);
 if(user){
    const token = `${username}-${Date.now()}`;;
    User.addSession(token,username);
    res.status(200).json({token});
 }
 else{
    res.status(401).json({error:'Invalid Credentials'});
 }

};

exports.logout = (req,res)=>{
    const token = req.headers['authorization'];
    User.removeSession(token);
}