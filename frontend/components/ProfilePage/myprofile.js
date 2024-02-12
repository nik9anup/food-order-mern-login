import React from 'react'
import './myprofile.css'
import { Link } from 'react-router-dom'
import './buttons.css'
import { useNavigate } from 'react-router-dom';



export default function Profile() {
   const navigate= useNavigate();

   const handleClick = () => {
      
      navigate('/prevorder');
    };

        return( 
       <div className="profilepage">
       <div className="centered-container">
      <button  className="styled-button" onClick={handleClick}>
         View Menu </button>
         <button  className="styled-button" onClick={handleClick}>
         View Previous orders </button>

     
       </div>
       </div>
    
    
    )
   }
  
