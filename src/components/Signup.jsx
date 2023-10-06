import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactno, setContactno] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", {
        username,
        email,
        password,
        contactno,
        location,
        skills,
      });

      console.log(response.data);
      if (response.data.exists) {
        alert("User already exists");
      } else {
        // Use the `history` function to navigate to the login page
        history("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Wrong details");
    }
  }

  return (
    <div>
      <h3>Signup form</h3>
      <br></br>
      <form method='post'>
        <input type='text' onChange={(e) => { setUsername(e.target.value) }} name='username' id='' placeholder='Username' />
        <br></br>
        <br></br>
        <input type='email' onChange={(e) => { setEmail(e.target.value) }} name='email' id='' placeholder='Email' />
        <br></br>
        <br></br>
        <input type='password' onChange={(e) => { setPassword(e.target.value) }} name='password' id='' placeholder='Password' />
        <br></br>
        <br></br>
        <input type='text' onChange={(e) => { setContactno(e.target.value) }} name='contactno' id='' placeholder='Conatact No' />
        <br></br>
        <br></br>
        <input type='text' onChange={(e) => { setLocation(e.target.value) }} name='location' id='' placeholder='Location' />
        <br></br>
        <br></br>
        <textarea name='skills' onChange={(e) => { setSkills(e.target.value) }} id='' rows='3' column='20' placeholder='Skills' />
        <br></br>
        <br></br>
        <input type='submit' onClick={submit} />
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default Signup;
