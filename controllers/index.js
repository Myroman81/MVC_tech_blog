const router = require('express').Router();
//const apiRoutes = require('./api/index');

//router.use('/api', apiRoutes);


router.get('/login', (req, res) => {
    console.log("Hit Homepage Route");
    
    res.render('login');
})

router.get('/', (req, res) => {
    console.log("Hit Homepage Route");

    res.render('homepage');
})

module.exports = router;