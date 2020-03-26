import React, { Component, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Home = props => {

  const initialFieldValues = {
    firstname: "",
    lastName: "",
    address: "",
    state: "",
    zipCode: "",
    phonenumber: "",
    noteField: ""
  }

  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch('api/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: values.firstname,
        lastName: values.lastName,
        address: values.address,
        state: values.state,
        zipCode: values.zipCode,
        phonenumber: values.phonenumber,
        noteField: values.noteField
      })
    })
    resetForm();
  }

  const resetForm = () => {
    setValues({
      ...initialFieldValues
    })
  }
  
  return (
    <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <p className="h5 text-center mb-4">Contact</p>
              <div className="grey-text">
                <MDBInput 
                  name="firstname" 
                  value={values.firstname} 
                  label="First Name" 
                  onChange={handleInputChange} 
                />
                <MDBInput 
                  name="lastName" 
                  value={values.lastName} 
                  label="Last Name" 
                  onChange={handleInputChange} 
                />
                <MDBInput
                  name="address" 
                  value={values.address} 
                  label="Address" 
                  onChange={handleInputChange} 
                />
                <MDBInput 
                  name="state" 
                  value={values.state} 
                  label="State" 
                  onChange={handleInputChange} 
                />
                <MDBInput 
                  name="zipCode" 
                  value={values.zipCode} 
                  label="Zipcode" 
                  onChange={handleInputChange} 
                />
                <MDBInput 
                  name="phonenumber" 
                  value={values.phonenumber} 
                  label="Phone Number" 
                  onChange={handleInputChange} 
                />
                <MDBInput 
                  name="noteField" 
                  value={values.noteField} 
                  label="Note Field" 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="text-center">
                <button type="submit">Submit</button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}
export default Home;
