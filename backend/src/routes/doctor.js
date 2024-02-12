const express = require('express');
const DoctorController = require('../controller/doctor');

const router = express.Router();

const verifyToken = require('../middleware/verifyToken')

router.post('/',DoctorController.create);
router.put('/:id',DoctorController.update);
router.delete('/:id',DoctorController.delete);


router.get('/all',DoctorController.getAll);


router.get('/:id',DoctorController.getOne);
router.get('/searchResults',DoctorController.search);


module.exports = router;