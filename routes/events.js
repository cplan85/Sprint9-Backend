const { Router } = require('express');
const { findAll, insertEvent, allEvents} = require('../controllers/event.controller');


const router = Router();


router.get('/all', allEvents);

//  == This route will give us back all events: ==  //
router.get('/', findAll);


//Validate and re-evaluate token
router.post('/add', insertEvent);


module.exports = router;

