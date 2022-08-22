const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, renewToken} = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

//create a new user
router.post('/new', [
check('name', "You must introduce a name").not().isEmpty(),
check('email', 'The email is obligatory').isEmail(),
check('password', 'The password is obligatory and must be at least 6 characters long').isLength({min: 6}),
validateFields
], createUser);
//name: .not().isEmpty()

//Login User, first the app will go through all the middlewares before executing loginUser
router.post('/',[
check('email', 'The email is obligatory').isEmail(),
check('password', 'The password is obligatory and must be at least 6 characters long').isLength({min: 6}),
validateFields
] , loginUser);


//Validate and re-evaluate token
router.get('/renew', validateJWT, renewToken)


module.exports = router;

