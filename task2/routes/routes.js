const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('in /');
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})

router.get('/users',(req,res,next)=>{
    console.log('in /users');
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
})

module.exports = router;