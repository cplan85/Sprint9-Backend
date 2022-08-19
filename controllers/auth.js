const { response, request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const createUser = async (req = request, res = response) => {

    const {email, name, password} = req.body;

    try {
           //verify that email doesn't exist
        const user = await User.findOne({email});

        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'The user already exists'
            })
        }

    //create user with the model 
    
    const dbUser = new User( req.body)

    //Encrypt/hash the password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync( password, salt)

    //Generate the JWT Token

    const token = await generateJWT(dbUser.id, dbUser.name)

    //create user in the DB
    await dbUser.save();

    //Generate success response
    return res.status(201).json({
        ok: true,
        uid: dbUser.id,
        name: name,
        token: token
    })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'Please contact administrator'
        })
    }
    //console.log(email, name, password)

    return res.json({
        ok: true,
        msg: 'Create User /new'
    })
}

const loginUser = (req, res) => {

    const {email, password} = req.body;
    console.log(email, password)
    
    return res.json({
        ok: true,
        msg: 'User login /'
    })
}

const renewToken = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Renew/'
    })
}


module.exports = {
    createUser,
    loginUser,
    renewToken
}