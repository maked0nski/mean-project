const express = require('express');
const router = express.Router();
const User = require('../models/user')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config/db')



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



router.post('/auth', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    User.getUserByLogin(login, (err, user)=>{
        if (err) throw err;
        if (!user)
            return res.json({success:false, msg:'Користувач не знайдений'});

        User.comparePass(password, user.password, (err, isMatch)=>{
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    // одна година * 24 = 1 доба
                    expiresIn: 3600 * 24
                });

                res.json({
                    success:true,
                    token: 'JWT' + token,
                    user: {
                        id:user._id,
                        firstName:user.firstName,
                        secondName:user.secondName,
                        phone:user.phone,
                        email:user.email,
                        login:user.login
                    }
                });
            } else
                return res.json({success:false, msg:'Не вірний пароль'});
        });
    });
});



router.get('/dashboard', passport.authenticate('jwt', {session:false}), (req, res) => {
    res.send('Слежбова сторінка сайту');
});

module.exports = router;
