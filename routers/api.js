const express = require('express');
const apiRouter = express.Router();

// Import Routers
const employeesRouter = require('./employees.js');
const menusRouter = require('./menus.js');

// Routers mounting
apiRouter.use('/employees', employeesRouter);
apiRouter.use('/menus', menusRouter);

module.exports = apiRouter;
