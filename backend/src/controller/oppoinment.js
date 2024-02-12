const createHttpError = require('http-errors');
const mongoose = require('mongoose');
const OppoinmentModel = require('../model/oppoinment');
const DoctorModel = require('../model/doctor'); // Import the Doctor model
const PatientModel = require('../model/hospital'); // Import the Patient model
exports.create = async (req, res, next) => {
   
  const { patient, doctor, description, address } = req.body;
  console.log(req.body)
  try {
    if (!patient || !doctor) {
      throw createHttpError(400, 'Please provide all the required fields');
    }

    // const patientId = mongoose.Types.ObjectId(patient);
    // const doctorId = mongoose.Types.ObjectId(doctor);

    // Fetch the doctor information based on the provided doctorId
    const doctorInfo = await DoctorModel.findById(doctor);
    const doctorInfo2 = await PatientModel.findById(patient);

    if (!doctorInfo) {
      throw createHttpError(404, 'Doctor not found');
    }
    if (!doctorInfo2) {
      throw createHttpError(404, 'User not found');
    }
 

    const oppoinment = new OppoinmentModel({
      patient: patient,
      doctor: doctor,
      date: new Date(),
      oppoinmentstatus: 'pending',
      description : doctorInfo.name,
      address: doctorInfo2.name
    });

    const result = await oppoinment.save();

    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getAll = async (req, res, next) => {

 

  try {

      const orders = await OppoinmentModel.find().exec();
      res.send(orders);


  } catch (error) {
      next(error)
  }

}
