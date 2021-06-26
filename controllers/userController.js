const User = require('../models/users')

module.exports.getRegister = (req,res,next)=>{
    res.render('pages/register')
}
module.exports.postRegister = (req,res,next)=>{
    // console.log(req.body.username)
    var newUser= new User({
        username: req.body.username,
        password : req.body.password
    }).save();

    res.redirect('/')
}

