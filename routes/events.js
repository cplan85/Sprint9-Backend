const { Router } = require('express');
const { findAll, insertEvent, allEvents, deleteEvent, updateEvent} = require('../controllers/event.controller');


const router = Router();

// GET ALL EVENTS REGARDLESS OF USER
router.get('/', allEvents);

// GET ALL EVENTS BY USER'S EMAIL
router.get('/user-events', findAll);

//ADD EVENT TO USER'S "MY EVENTS"
router.post('/add', insertEvent);

//DELETE EVENT 
router.post('/delete', deleteEvent);

//UPDATE EVENT
router.post('/update', updateEvent);


module.exports = router;

