import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const EditDoctors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState({
    email: '',
    name: '',
    description: '',
    hospital: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3005/api/v1/doctors/${id}`)
      .then((response) => {
        setDoc(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoc({
      ...doc,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3005/api/v1/doctors/${id}`, doc)
      .then((response) => {
        console.log('Doctor details updated:', response.data);
        navigate('/viewdoctors');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            backgroundColor: 'transparent', // Set the background to transparent
            padding: '20px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Doctor
          </Typography>
          <form>
            <div>
              <TextField
                label="Doctor Name"
                variant="outlined"
                fullWidth
                name="name"
                value={doc.name}
                onChange={handleInputChange}
                style={{
                    marginBottom: '40px',
                    marginLeft: '2px',
                    borderRadius: '10px', 
                    backgroundColor: '#b2beb5', 
                  }}
              />
            </div>
            <div>
  <TextField
    label="Description"
    variant="outlined"
    fullWidth
    name="description"
    value={doc.description}
    onChange={handleInputChange}
    style={{
      marginBottom: '40px',
      marginLeft: '2px',
      borderRadius: '10px',
      backgroundColor: '#b2beb5',
      width: '400px' // Set the desired width (e.g., 400px)
    }}
  />
</div>

            <div>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={doc.email}
                onChange={handleInputChange}
                style={{
                    marginBottom: '40px',
                    marginLeft: '2px',
                    borderRadius: '10px', 
                    backgroundColor: '#b2beb5', 
                  }}
              />
            </div>
            <div>
              <TextField
                label="Hospital"
                variant="outlined"
                fullWidth
                name="hospital"
                value={doc.hospital}
                onChange={handleInputChange}
                style={{
                    marginBottom: '40px',
                    marginLeft: '2px',
                    borderRadius: '10px', 
                    backgroundColor: '#b2beb5', 
                  }}
              />
            </div>
            <Button
              type="button"
              onClick={handleUpdate}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '12px' }}
            >
              Update Doctor
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditDoctors;
