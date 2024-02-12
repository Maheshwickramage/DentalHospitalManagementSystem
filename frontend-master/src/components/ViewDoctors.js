import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardActions, CardContent, Button, Typography, Container, Grid, TextField } from '@mui/material';
import './ViewDoctors.css';
import { Link } from 'react-router-dom';

const ViewDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/v1/doctors/all'); // Replace with your API endpoint
        setDoctors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  const handleDelete = async (DoctorId) => {
    try {
      await axios.delete(`http://localhost:3005/api/v1/doctors/${DoctorId}`);
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== DoctorId));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='main'>
      <Container sx={{ backgroundColor: '', minHeight: '100vh', paddingTop: '16px' }}>
        <h1>Doctors</h1>
        <TextField
          label="Search by Doctor Name"
          variant="outlined"
          fullWidth
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
        <Grid container spacing={3}>
          {filteredDoctors.map((doctor) => (
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
                    variant="contained"
                    color="primary"
                  >
                    <Link to={`/editdoctors/${doctor._id}`} className='fon'>Edit</Link>
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleDelete(doctor._id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ViewDoctors;
