require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const PatientModel = require('./model/patient');
const HospitalModel = require('./model/hospital');
const DoctorModel = require('./model/doctor');
const PatientRouter = require('./routes/patient');
const HospitalRouter = require('./routes/hospital');
const DoctorRouter = require('./routes/doctor');
const OppoinmentRouter = require('./routes/oppoinment');

app.use('/uploads/doctor', express.static('public/doctor'));
const cors = require('cors');
app.use(cors());
const port = process.env.PORT;
app.use(express.json());

app.use('/api/v1/patients', PatientRouter);
app.use('/api/v1/hospitals', HospitalRouter);
app.use('/api/v1/doctors', DoctorRouter);
app.use('/api/v1/oppoinments', OppoinmentRouter);

app.use((err, req, res, next) => {
  if (createHttpError.isHttpError(err)) {
    res.status(err.status).send({ message: err.message });
  } else {
    res.status(500).send({ message: 'Error unknown' });
  }
});

module.exports = app;