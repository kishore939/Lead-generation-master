// src/App.js
import React from 'react';
import { Container } from '@material-ui/core';
import LeadForm from './client/components/LeadForm';
import LeadList from './client/components/LeadList';
import HomePage from './client/components/HomePage';

const App = () => {
  return (
    <Container maxWidth="sm">
      <HomePage />
      {/* <LeadForm /> */}
      {/*<LeadList /> */}
     </Container>
  );
};

export default App;
