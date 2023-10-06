const route = require('express').Router();

const getContacts = require ('../controller/contacts');



route.get('/database', getContacts.db );

route.get('/contacts', getContacts.allContacts );

route.get('/contacts/:id', getContacts.oneContact );

route.post('/contacts', getContacts.postContact );

route.put('/contacts/:id', getContacts.putContact);

route.delete('/contacts/:id', getContacts.deleteContact );

module.exports = route;