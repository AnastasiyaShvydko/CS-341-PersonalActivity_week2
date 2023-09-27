const route = require('express').Router();

const getContacts = require ('../controller/contacts');



route.get('/database', getContacts.db );

route.get('/all_contacts', getContacts.allContacts );

route.get('/one_contact', getContacts.oneContact );

route.post('/post_contact', getContacts.postContact );

module.exports = route;