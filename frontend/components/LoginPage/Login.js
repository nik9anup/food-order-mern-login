import React from 'react';
import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [srn,setSRN] = useState('')
  const [password,setPassword] = useState('')


   async function logUser(event)
  {
  event.preventDefault()
  const response = await fetch('http://localhost:8080/',
  {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
      srn,
      password,
    }),
  })
  const data = await response.json()

  if (data.user) {
    
    navigate('/profile');
  } else {
    
    alert('Invalid credentials');
  }
};
  
   
    return( 
   
    <div className="loginpage">
        <form onSubmit={logUser}>
      
      <div className="srn">
      <label id="l1">PES SRN: </label>
        <input value={srn}
        onChange={(e)=>setSRN(e.target.value)}
        type="text"/>
      </div>
      <br></br> <br></br><br></br>
      <div className="pass">
      <label id="l2">Password: </label>
      <input 
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
      type="password"/>
      <div className="submit">
      <input id="sub" type="submit"/>
      </div>
     
      </div>
     
      
      
    </form>
      </div>
   
      
  )
}
