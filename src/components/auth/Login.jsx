import React, { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = ({handleCancel,setVisible}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [auth,setAuth] = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("https://coding-ninjas-clone-server.onrender.com/api/login", {
        email,
        password
      });
      if (data.success) {
        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("auth", JSON.stringify(data));
        console.log(data);
        handleCancel(() => setVisible(false))
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
     <div className="form-container p-3" style={{ minHeight: "30vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title mb-3">LOGIN NOW</h4>
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
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </>
  )
}

export default Login