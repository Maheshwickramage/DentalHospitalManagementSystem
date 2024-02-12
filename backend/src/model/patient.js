const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema(
{
    name :{
        type : 'string',
        required : true
    },


    email:{
        type : 'string',
        required : true
    },

    password:{

        type:'string',
        required : true
    },

    phone:{
        type : 'string',
        required : true
    },

    token :{
        type: 'string',
        required : false

    }

}

);

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;