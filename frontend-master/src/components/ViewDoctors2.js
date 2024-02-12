import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardActions, CardContent, Button, Typography, Container, Grid } from '@mui/material';
import './ViewDoctors.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
const ViewDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const user = useSelector(selectUser)
  console.log(user);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/v1/doctors/all');
        setDoctors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);


  const makeAppointment = async function(doctorId) {
    try {
      await axios.post('http://localhost:3005/api/v1/oppoinments',{
        patient:user._id,
        doctor:doctorId

      })
      alert("Appointment created successfully")

     }
    catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async (DoctorId) => {
    try {
      await axios.delete(`http://localhost:3005/api/v1/doctors/${DoctorId}`);
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== DoctorId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='main'>
    <Container sx={{ backgroundColor: '', minHeight: '100vh', paddingTop: '16px' }}>
      <h1>Doctors</h1>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid item key={doctor._id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '16px' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Name: {doctor.name}
                </Typography>
                <Typography>Email: {doctor.email}</Typography>
                <Typography>Description: {doctor.description}</Typography>
                <Typography>Hospital: {doctor.hospital}</Typography>
              </CardContent>
              <CardActions>
              <Button
                  size="small"
                  onClick={() => {
                    makeAppointment(doctor._id);
                  }}
                  variant="contained"
                  color="primary"
                >
                 MAKE AN OPPINMENT
                </Button>

              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div> );
};

export default ViewDoctors;
