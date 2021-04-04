const express = require('express');
const router = express.Router();


router.get('/reg', (req, res) => {
    res.send('Cторінка реєстрації');
});
router.get('/auth', (req, res) => {
    res.send('Сторінка авторизації');
});
router.get('/dashboard', (req, res) => {
    res.send('Слежбова сторінка сайту');
});

module.exports = router
