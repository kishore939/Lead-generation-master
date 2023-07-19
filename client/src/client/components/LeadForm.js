// src/components/LeadForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLead } from '../actions';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

const LeadForm = ({ addLead }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const lead = {
      name,
      email,
      phoneNumber,
    };

    addLead(lead);

    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Find the Perfect Car for You
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Your Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email Address"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default connect(null, { addLead })(LeadForm);