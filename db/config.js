
require('dotenv').config();
const source = process.env.DB_CNN;

const mongoose = require('mongoose');

const dbConnection = async() => {
    
    try {
       await mongoose.connect(source, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true
       });

       console.log('DB Online')

    } catch(error) {
        console.log(error);
        throw new Error('Error at the start of the DB');
    }


}

module.exports = {
    dbConnection
}