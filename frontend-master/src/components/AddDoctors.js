import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css";

const AddDoctors = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [hospital, setHospital] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/api/v1/doctors', {
        name,
        description,
        email,
        hospital,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main" >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter the Doctor's Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            marginBottom: '40px',
            marginLeft: '100px',
            borderRadius: '10px', 
            backgroundColor: '#b2beb5', 
          }}
        />
        <TextField
          label="Short Description About the Doctor"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            marginBottom: '40px',
            marginLeft: '100px',
            borderRadius: '10px', 
            backgroundColor: '#b2beb5', 
          }}// Add margin to create spacing
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            marginBottom: '40px',
            marginLeft: '100px',
            borderRadius: '10px', 
            backgroundColor: '#b2beb5', 
          }}
        />
        <TextField
          label="Hospital Name"
          variant="outlined"
          fullWidth
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          required
          style={{
            marginBottom: '40px',
            marginLeft: '100px',
            borderRadius: '10px', 
            backgroundColor: '#b2beb5', 
          }}
        />
      <Button
    style={{
      borderRadius:'15px',
      marginTop: '16px',
      marginLeft: '100px',
      fontSize: '20px', // Increase font size
      padding: '16px 32px', // Increase padding
    }}
  
  type="submit"
  variant="contained"
  color="primary"
  
  onClick={() => {
    window.location.href = "/viewdoctors";
  }}
>
  Submit
</Button>

      </form>
    </div>
  );
};

export default AddDoctors;
