const router = require('express').Router();
const apiRoutes = require('./api/index.js')
const homeRoutes = require('./home-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);

/*
router.get('/login', (req, res) => {
    console.log("Hit Homepage Route");
    
    res.render('login');
})

router.get('/all', (req, res) => {

    const users = [ 
        {
            id: 1,
            username: "chuck"
        },
        {
            id: 2,
            username: "bill"
        },
        {
            id: 3,
            username: "amy"
        },
    ]

    res.render('dashboard', { data: users, title: "Portfolio", ifTrue: false })
})

router.post('/new', (req, res) => {
    console.log("Body: ", req.body);

    // run some logic to create a NEW USER (or add to our dataset)
    res.redirect('/all')
})

router.get('/', (req, res) => {
    console.log("Hit Homepage Route");

    res.render('homepage');
})
*/

module.exports = router;