import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Login.css';
import Typography from '@mui/material/Typography';

import addDoctorsImage from '../components/images/istockphoto-1189304032-612x612.jpg'; // Update the image paths
import viewDoctorsImage from '../components/images/pexels-photo-3825586.jpg';

const defaultTheme = createTheme();

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  height: '100%',
  border: '1px solid #e0e0e0',
  borderRadius: '50px',
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

export default function Home() {
  return (
    <div className="main">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography component="h1" variant="h2" align="center" color="text.primary" padding="10px">
            Tooth Tracker
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            Shaping Smiles Managing Carefully
          </Typography>
        </Container>
        <Container maxWidth="md" component="div">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card style={cardStyle}>
                <img src={addDoctorsImage} alt="Add Doctors" style={imgStyle} /> {/* Add image */}
                <CardHeader
                  title="Add Doctors"
                  avatar={<AddIcon fontSize="large" />}
                />
                <CardContent>
                  <Button
                    component={Link}
                    to="/addoctors"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Add Doctors
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card style={cardStyle}>
                <img src={viewDoctorsImage} alt="View Doctors" style={imgStyle} /> {/* Add image */}
                <CardHeader
                  title="View Doctors And Oppoinments"
                  avatar={<VisibilityIcon fontSize="large" />}
                />
                <CardContent>
  <Button
    component={Link}
    to="/viewdoctors"
    fullWidth
    variant="contained"
    color="primary"
    style={{ marginBottom: '10px' }} // Add margin to the bottom
  >
    View Doctors
  </Button>

  <Button
    component={Link}
    to="/patientoppoinments"
    fullWidth
    variant="contained"
    color="primary"
    style={{ marginTop: '10px' }} // Add margin to the top
  >
    View Appointments
  </Button>
</CardContent>

              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
