const { Router } = require('express');
const { createUser, loginUser, renewToken} = require('../controllers/auth');

const router = Router();

//create a new user
router.post('/new', createUser)

//Login User
router.post('/', loginUser)

//Validate and re-evaluate token
router.get('/renew', renewToken)


module.exports = router;

