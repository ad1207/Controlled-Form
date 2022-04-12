import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [gender,setGender]=useState('');
  const [courses,setCourse]=useState('react');
  const [error,setError]=useState( {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // var errKey = Object.keys(this.state).filter((key) => {
    //   if (this.state[key] === '' && key != 'error') {
    //     return key;
    //   }
    // });
    // if (errKey.length >= 1) console.error('Please fill all fields');
    // else console.log(this.state);



  };

  const handleChange = async (e,fun) => {
    var error1 = { ...error };


    if (e.target.value === '') {
      error1[e.target.name] = `${e.target.name} is required`;
      // error.firstName = 'Required'
    } else {
      error1[e.target.name] = '';
    }

    setError(error1);
    // this.setState({error : {firstName: 'Required'}})
    fun(e.target.value)
    console.log(this.state);
  };

  return (
    <>
      <h3> Controlled Form </h3>
      {/* Onsubmit */}
      <form onSubmit={handleSubmit}>
        <div>
          <label> First Name: </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => handleChange(e,setFirstName)}
          />
          <br />
          <span style={{ color: 'red' }}> {error.firstName}</span>
        </div>
        <br />
        <div>
          <label> Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => handleChange(e,setLastName)}
          />
          <br />
          <span style={{ color: 'red' }}> {error.lastName}</span>
        </div>
        <br />
        <div>
          <label> Email: </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleChange(e,setEmail)}
          />
          <br />
          <span style={{ color: 'red' }}> {error.email}</span>
        </div>
        <br />
        <div>
          <label> Gender: </label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleChange(e,setGender)}
          />{' '}
          Female
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleChange(e,setGender)}
          />{' '}
          Male
          <br />
          <span style={{ color: 'red' }}> {error.gender}</span>
        </div>
        <br />
        <div>
          <label> Courses: </label>
          <select
            name="courses"
            value={courses}
            onChange={(e) => handleChange(e,setCourse)}
          >
            <option value="react"> React </option>
            <option value="node"> Node </option>
            <option value="mongo"> Mongo </option>
          </select>
        </div>
        <br />
        <div>
          <button type="submit"> Submit </button>&nbsp;
          <button type="button"> Reset </button>&nbsp;
        </div>
      </form>
    </>
  );
}

export default App;
