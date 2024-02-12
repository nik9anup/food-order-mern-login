import React from 'react';
import Login  from './components/LoginPage/Login';
import Profile  from './components/ProfilePage/myprofile';
import PrevOrder from './components/Prevorder/prev';
import {Routes, Route, Router} from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      {/* Route for the login form */}
      <Route path="/" element={<Login/>} />

      {/* Route for the welcome page */}
      <Route path="/profile" element={<Profile/>} />
      <Route path="/prevorder" element={<PrevOrder/>} />
    </Routes>
 
        
   );
};

export default App;
