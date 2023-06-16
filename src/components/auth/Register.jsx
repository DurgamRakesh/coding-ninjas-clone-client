import React, { useState } from 'react'
import axios from 'axios';
const Register = ({setTog}) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("https://coding-ninjas-clone-server.onrender.com/api/register", {
        name,
        email,
        password
      });
      if (data.success) {
        console.log(data);
        setTog(false);
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
     <div className="form-container p-3" style={{ minHeight: "30vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title mb-3">REGISTER NOW</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Enter Your Name"
              required
              autoFocus
              
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button type="submit" className="register-button">
            REGISTER
          </button>
        </form>
      </div>
    </>
  )
}

export default Register