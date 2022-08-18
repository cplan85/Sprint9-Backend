const { response, request } = require('express');

const createUser = (req = request, res = response) => {

    console.log(req.body);
    const {email, name, password} = req.body;
    console.log(email, name, password)

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