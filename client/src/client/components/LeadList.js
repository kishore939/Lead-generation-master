// src/components/LeadList.js
import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';

const LeadList = ({ leads }) => {
  return (
    <List>
      {leads.map((lead, index) => (
        <ListItem key={index}>
          <ListItemText primary={lead.name} secondary={lead.email} />
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    leads: state.leads,
  };
};

export default connect(mapStateToProps)(LeadList);
