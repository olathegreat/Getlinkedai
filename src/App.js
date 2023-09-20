import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './Pages/ContactPage/ContactPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import './App.css';




const App = () => {

  return (
   
    <Routes>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
