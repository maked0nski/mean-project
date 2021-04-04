const express = require('express');
const router = express.Router();
const User = require('../models/user')

// router.get('/reg', (req, res) => {
//     res.send('Cторінка реєстрації');
// });

router.post('/reg', (req, res) => {
    let newUser = new User({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        phone: req.body.phone,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    });
    User.addUser(newUser, (err,user)=>{
        if(err)
            res.json({succes: false, msg:"Користувач не був доданий"});
        else
            res.json({succes: true, msg:"Користувач був доданий"});
    });
});



router.get('/auth', (req, res) => {
    res.send('Сторінка авторизації');
});



router.get('/dashboard', (req, res) => {
    res.send('Слежбова сторінка сайту');
});

module.exports = router;
