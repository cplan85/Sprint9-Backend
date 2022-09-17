const { Router } = require('express');
const { findAll, insertEvent, allEvents, deleteEvent} = require('../controllers/event.controller');


const router = Router();


router.get('/all', allEvents);

//  == This route will give us back all events: ==  //
router.get('/', findAll);


//ADD EVENT TO User's My Events
router.post('/add', insertEvent);

//DELETE EVENT 
router.post('/delete', deleteEvent);


module.exports = router;

