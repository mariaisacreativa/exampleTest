const env = require('dotenv').config();
const express = require('express');
const app = express();

const example = require('./routes/example');

app.use('/exampleAPI',example);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`listening on port:  ${process.env.PORT || 3000}`)
})

module.exports = app;