const { response, request } = require('express');
const User = require('../models/User');
const Event= require('../models/Event');
//const bcrypt = require('bcryptjs');
//const { generateJWT } = require('../helpers/jwt');

//FIND ALL EVENTS
const allEvents = async (req, res = response) =>{
        
    try{
        const all = await Event.find({});
        res.send(all);

    }
    catch(e){
        res.send({e})
    }
}

//FIND ALL EVENTS ASSOCIATED WITH A USER 
const findAll = async (req, res) => {
    let {email} = req.body;
    try{
        const matchingEmails = await User.find({email});
        //console.log(`Matching Email`,matchingEmails.length)
        if(matchingEmails.length>0) {
            let EventArr ={};
            matchingEmails.forEach(obj => EventArr.events = obj.events)
            //const UserPantries = matchingEmails.events
            //console.log(`Array of Pantries`, PantryArr)
        res.send(EventArr);

         }
         else {
             res.send(`User with Email: ${email} doesn't exist!`)
     }
    }
    catch(e){
        res.send({e})
    }
}

 // POST ADD ONE -- COMPLETED 12/18/2012
const insertEvent = async (req, res) => {
    let {email, id, name, url, date, startTime, img, min, max, currency, venue, venueImages, venueUrl, address, promoter, type, lat, long,
        seatmapImg, note} = req.body;
    try{
        const newEvent = await Event.create({
            id: id,
            name: name,
            url: url,
            date: date,
            startTime: startTime,
            img: img,
            min: min,
            max: max,
            currency: currency,
            venue: venue,
            venueImages: venueImages,
            venueUrl: venueUrl,
            address: address, 
            promoter: promoter,
            type: type,
            lat: lat,
            long: long,
            seatmapImg: seatmapImg,
            note: note,
        });
       // const updated = await Category.updateOne({category},{$push: {products:{name: productName,price} } })
        const updated = await User.updateOne({email},{$push: {events:newEvent } })
        const matchingEmails = await User.find({email});
        if(matchingEmails.length>0) {
        res.send(updated);

         }
         else {
             res.send(`User with Email: ${email} doesn't exist!`)
     }
    }
    catch(e){
        res.send({e})
    }
}

  // DELETE EVENT
  const deleteEvent = async (req, res) => {
    let { email, id} = req.body;
    try{
       const matchingEmails = await User.findOne({email});
        if(matchingEmails.events.length>0) {

        const updatedArray = matchingEmails.events
        await Event.deleteOne({id});
        matchingEmails.events.forEach( (event,idx) => {
           // console.log(`Pantry Name from pantry Controller`,obj.pantryName)
            if (event.id === id) {
               updatedArray.splice(idx, 1);
            }

        })

        const updated = await User.updateOne(
            { email },{ events: updatedArray }
         );
        res.send({updated});
    }
    else {
        res.send(`User or event with matching id doesn't exist!`)
    }
    }
    catch(error){
        res.send({error});
    };
}

//

const updateEvent = async (req, res) =>{
    let { email, id, newNote } = req.body;
    try{
        const matchingEmails = await User.find({email});
        if(matchingEmails.length > 0) {
          const updatedArray = matchingEmails[0].events;
          updatedArray.forEach((event) => {
            if(event.id == id) {
                event.note = newNote;
            }
          })
          
        const updated = await User.updateOne(
             { email },{ events: updatedArray }
         );
        res.send({updated});
        }
        else {
            res.send(`Event with matching id doesn't exist!`)
        }
    }
    catch(error){
        res.send({error});
    };
}





module.exports = {
    allEvents,
    deleteEvent,
    findAll,
    insertEvent,
    updateEvent
}