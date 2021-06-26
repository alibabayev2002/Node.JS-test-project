const express = require('express')
const controller = require('../controllers/userController')

const router = express.Router()

router.get('/login', (req,res,next)=>{
    res.render('pages/login')
})
router.post('/register',(req,res,next)=>{
    controller.postRegister(req,res,next)
})
router.get('/register', (req,res,next)=>{
    controller.getRegister(req,res,next)
})


module.exports = router