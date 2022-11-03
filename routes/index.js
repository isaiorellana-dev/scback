const express = require('express');
const dataRouter = require('./data.router');
// const usersRouter = require('./users.router');

const routerApi = (app) => {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/data', dataRouter);
};

module.exports = routerApi;
