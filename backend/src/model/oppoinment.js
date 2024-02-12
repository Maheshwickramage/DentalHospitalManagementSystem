const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oppoinmentSchema = new Schema({
 // {
  //   patient: '652b36ffa2b0fedd6aabd352',
  //   doctor: '65301903f62a032619657116',
  //   date: '2023-10-23T14:00:00.000Z',
  //   oppoinmentstatus: 'scheduled',
  //   description: 'Follow-up checkup',
  //   address: '123 Main Street, City, Country'
  // }
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    }, 
    
    date: {
        type: Date,
        required: true,
    },
    oppoinmentstatus: {
        type: String,
        required: true,

    },
   
    description: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },

});

const Oppoinment = mongoose.model('Oppoinment', oppoinmentSchema);

module.exports = Oppoinment;