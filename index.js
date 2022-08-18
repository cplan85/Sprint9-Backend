const express = require('express');

//CREATE THE APPLICATION/SERVER OF EXPRESS

const app = express();

//Routes
//use is the middleware and require syntax is similar to import statement in front end.
app.use(  '/api/auth', require('./routes/auth'))




app.listen(4000, () => {
    console.log(`Server is working in port ${4000}`)
})