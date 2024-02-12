const express = require('express');
const router = express.Router();
const PatientController = require('../controller/patient');



router.post('/', PatientController.register)
router.post('/login', PatientController.login)


module.exports = router;