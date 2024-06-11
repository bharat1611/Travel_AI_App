import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import './LoginSignup.css';
import user_icon from './Components/Assets/person.png';
import email_icon from './Components/Assets/email.png';
import password_icon from './Components/Assets/password.png';
import { GoogleLog } from './Components/GoogleLogin/GoogleLog';

export const LoginSignup = ({ handleLogin }) => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      if (action === "Login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/home');
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  return (
    <div className='container-login'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === "Login" ? <div></div> : (
          <div className='input'>
            <img src={user_icon} alt='user icon' />
            <input type='text' name='username' id='username' placeholder='Username' required />
          </div>
        )}
        <div className='input'>
          <img src={email_icon} alt='email icon' />
          <input 
            type='email' 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className='input'>
          <img src={password_icon} alt='password icon' />
          <input 
            type='password' 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>

      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
      <div className='submit-container'>
        <button className="submit" onClick={onSubmit}>Submit</button>
      </div>
      <div className="googleauth">
        <GoogleLog />
      </div>
    </div>
  );
};
