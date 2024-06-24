//server eka on kranna one tika witharai meke danne


require('dotenv').config();
//const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT;
const app = require('./app'); 


// Connect to MongoDB
mongoose
  .connect(process.env.CONN_STR, {})
  .then(result => {
    console.log('db connected');
    
    // Start the Express app
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    })
  })
  .catch(err => console.log(err));
