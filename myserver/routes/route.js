const express = require('express');
const { createContact, getContacts, updateContact, deleteContact } = require('../controller/controllers');

const router = express.Router();

router.post('/contacts', createContact);  
router.get('/contacts', getContacts);      
router.put('/contacts/:id', updateContact); 
router.delete('/contacts/:id', deleteContact); 

module.exports = router;

    