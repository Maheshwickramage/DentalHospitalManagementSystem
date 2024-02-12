const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const doctorSchema = new Schema(
{
    name :{
        type : 'string',
        required : true
    },


    email:{
        type : 'string',
        required : true
    },

    hospital:{
        type : 'string',
        required : true
    },

    description:{
        type : 'string',
        required : true
    },

     
}

);


const Doctor = mongoose.model('Doctor',doctorSchema);


module.exports = Doctor;