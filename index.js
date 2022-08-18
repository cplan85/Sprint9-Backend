const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log(process.env);

//CREATE THE APPLICATION/SERVER OF EXPRESS

const app = express();

//CORS
app.use(cors());

//Reader and Body Parser
app.use( express.json());

//Routes
//use is the middleware and require syntax is similar to import statement in front end.
app.use(  '/api/auth', require('./routes/auth'))


app.listen(process.env.PORT, () => {
    console.log(`Server is working in port ${process.env.PORT}`)
})