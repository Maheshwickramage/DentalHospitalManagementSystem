const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospitalSchema = new Schema(
{
    name :{
        type : 'string',
        required : true
    },

    email:{
        type : 'string',
        required : true
    },
    password :{
        type : 'string',
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

const Hospital = mongoose.model('Hospital',hospitalSchema);


module.exports = Hospital;