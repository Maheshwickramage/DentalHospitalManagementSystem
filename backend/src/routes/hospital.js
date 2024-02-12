const express = require('express');
const router = express.Router();
const HospitalController = require('../controller/hospital');



router.post('/', HospitalController.register)
router.post('/login', HospitalController.login)

module.exports = router;