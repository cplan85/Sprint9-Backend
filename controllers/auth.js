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

    const token = await generateJWT(dbUser.id, name)

    //create user in the DB
    await dbUser.save();

    //Generate success response
    return res.status(201).json({
        ok: true,
        uid: dbUser.id,
        name: name,
        email: email,
        token: token
    })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'Please contact administrator'
        })
    }

}

const loginUser = async(req, res) => {

    const {email, password} = req.body;

    try {

        const dbUser = await User.findOne({email});

        //there is no email
        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: `The email doesn't exist`
            });
        }

        //Confirm that the password matches
        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Invalid password'
            })
        }
        //GENERATE JSON WEB TOKEN
        const token = await generateJWT(dbUser.id, dbUser.name)

        //Service Reponse
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token: token
        })
    }
catch (error) {
    console.log(error);
    return res.status(500).json({
        ok: false,
        msg: 'Speak with the administrator'
    })
 }
    
    return res.json({
        ok: true,
        msg: 'User login /'
    })
}

const renewToken = async (req, res) => {

    const { uid, name } = req;

    const dbUser = await User.findById({uid});

    //generate new token
    const token = await generateJWT(uid, name)

    return res.json({
        ok: true,
        uid,
        name,
        email: dbUser.email,
        token
    })
}


module.exports = {
    createUser,
    loginUser,
    renewToken
}