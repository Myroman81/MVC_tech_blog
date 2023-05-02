const router = require('express').Router();


router.get('/', (req, res) => {
    console.log("Hit Homepage Route");

    res.render('homepage');
})

router.get('/dashboard', (req, res) => {
    console.log("Hit Dashboard Route");

    res.render('dashboard');
})

module.exports = router;