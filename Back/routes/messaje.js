const express = require('express')
const router = express.Router();
const { crearmessage } = require('../controllers/messaje');

router.post('/newMessage', crearmessage)


module.exports = router;