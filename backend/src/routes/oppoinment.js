const express = require('express');

const router = express.Router();
const OppoinmentController = require('../controller/oppoinment');


router.post('/', OppoinmentController.create)

router.get('/',OppoinmentController.getAll)

module.exports = router;