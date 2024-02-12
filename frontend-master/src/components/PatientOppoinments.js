import React, { useState, useEffect } from 'react';

const PatientOppoinments = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patient: '',
    doctor: '',
    description: '',
    address: '',
  });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/v1/oppoinments');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAppointments(data);
        } else {
          console.error('Failed to fetch appointments');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async (appointmentId) => {
    try {
      const response = await fetch(`/api/appointments/${appointmentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Handle successful appointment deletion
        console.log('Appointment deleted successfully');
        // Optionally, you can update the appointments list to reflect the deletion
      } else {
        // Handle errors here
        console.error('Failed to delete appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful appointment creation
        console.log('Appointment created successfully');
        // Optionally, you can clear the form fields or update the appointments list
      } else {
        // Handle errors here
        console.error('Failed to create appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Patient Appointments</h1>

      <h2>Create an Appointment</h2>
      {/* Your form code here */}
      {/* ... */}

      {appointments.length === 0 ? (
        <p>No appointments available.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {appointments.map((appointment) => (
            <li
              key={appointment._id}
              style={{
                backgroundColor: 'rgba(204, 204, 204, 0.5)',
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
              }}
            >
              <strong>Doctor:</strong> {appointment.doctor.name}
              <br />
              <strong>Date:</strong> {new Date(appointment.date).toLocaleString()}
              <br />
              <strong>Status:</strong> {appointment.oppoinmentStatus}
              <br />
              <strong>Doctor name:</strong> {appointment.description}
              <br />
              <strong>Patient Name:</strong> {appointment.address}
              <br />
              <button
                onClick={() => handleDelete(appointment._id)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientOppoinments;
