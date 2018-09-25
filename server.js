const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const morgan = require('morgan');

// Import Routers
const apiRouter = require('./routers/api.js');

// PORT config
const PORT = process.env.port || 4000;
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Routers mounting
app.use('/api', apiRouter);

// Error middleware used to handle errors
app.use(errorhandler());

// PORT initialization
app.listen(PORT, () => { console.log(`Server is listening on PORT ${PORT}`)});

module.exports = app;
