const jwt = require('jsonwebtoken');
const generateJWT = (uid, name) => {

    const payload = {uid, name};
    {
        uid: '123223',
        name: 'Carlos'
    }
    jwt.sign(payload)
}