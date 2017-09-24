import React, { Component } from 'react';
import ExistingPrescriptionList from '../ExistingPrescriptionList';

import './style.css';

const Patient = (props) => {
  const patient_id = props.match.params.number;
  return (
    <div>
      <p>Patient ID: {patient_id}</p>
      <img src="http://placekitten.com/200/140" alt="patient"/>
      <h2>Patient Data</h2>
      <ExistingPrescriptionList />
    </div>
  )
}
export default Patient;
