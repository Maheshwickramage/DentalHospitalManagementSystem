const createHttpError = require('http-errors')
const DoctorModel = require('../model/doctor')
const mongoose = require('mongoose')

exports.create = async (req, res, next) => {
    const {
        name,
        description,
        email,
        hospital
    } = req.body;
    try {

        if (!name || !description || !email || !hospital) {
            throw createHttpError(400, "Please provide all the required fields");
          }


            const doctor = new DoctorModel({
            name,
            description,
            email,
            hospital,
          
        });

        const result = await doctor.save();

        res.status(201).send(result);



    } catch (error) {
        next(error)
    }

}

exports.update = async (req, res, next) => {

    const doctorId = req.params.id;

    const {
        name,
        description,
        email,
        hospital

    } = req.body;


    try {

        if (!mongoose.isValidObjectId(doctorId)) {
            throw createHttpError(400, "Invalid Id")
        }


        if (!name || !description || !email|| !hospital) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

      
        const doctor = await DoctorModel.findById(doctorId).exec();

        if (!doctor) {
            throw createHttpError(404, 'doctor not found');
        }

        doctor.name = name;
        doctor.description = description;
        doctor.email = email;
        doctor.hospital=hospital;
        

        const result = await doctor.save();

        res.status(200).send(result);


    } catch (error) {
        next(error)
    }
}

exports.delete = async (req, res, next) => {

    const doctorId = req.params.id;
    //params localhost:3000/api/v1/Doctors/1234
    //query localhost:3000/api/v1/Doctors?id=1234

    try {
        if (!mongoose.isValidObjectId(doctorId)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await DoctorModel.findByIdAndDelete(doctorId).exec();

        if (!result) {
            throw createHttpError(404, 'Doctor not found');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}
exports.getAll = async (req, res, next) => {

    try {
        const result = await DoctorModel.find().exec();
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

exports.getOne = async (req, res, next) => {
    const Id = req.params.id;

    try {

        if (!mongoose.isValidObjectId(Id)) {
            throw createHttpError(400, "Invalid Id")
        }

        const result = await DoctorModel.findById(Id).exec();

        if (!result) {
            throw createHttpError(404, 'Doctor not found');
        }

        res.status(200).send(result);


    } catch (error) {
        next(error)
    }

}

exports.search = async (req, res, next) => {
    const query = req.query.q;

    try {

        if (!query) {
            throw createHttpError(400, "Please provide a search query")
        }

        const result = await DoctorModel.find({ name: { $regex: query, $options: 'i' } }).exec();

        if (!result) {
            throw createHttpError(404, 'Doctor not found');
        }

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}