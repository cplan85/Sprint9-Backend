const { Router } = require('express');

const router = Router();

//create a new user
router.post('/new', (req, res) => {

    return res.json({
        ok: true,
        msg: 'Create User /new'
    })
})

//Login User
router.post('/', (req, res) => {

    return res.json({
        ok: true,
        msg: 'User login /'
    })
})

//Validate and re-evaluate token
router.get('/renew', (req, res) => {

    return res.json({
        ok: true,
        msg: 'Renew/'
    })
})


module.exports = router;

