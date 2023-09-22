const route = require('express').Router();

const getName = require ('../controller/index');

route.get('/', getName.sendData );

module.exports = route;