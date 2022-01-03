const express = require('express');
require ("dotenv").config()
const {mainErrorHandler} = require('./middleware/errorHandler');


const app = express();

app.use(express.json());
app.use(express.urlencoded());

/** Routes */
app.get('/', ()=>{req, res, next});

/** Main error handler */
app.use(mainErrorHandler());


const port = process.env.PORT || 5000;
app.listen(port, ()=> {console.log('Server is running on port: ' + port);});