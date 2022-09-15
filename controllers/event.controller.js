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
        console.log(email, "check email")
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


module.exports = {
    allEvents,
    findAll,
    insertEvent
}