import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './Pages/ContactPage/ContactPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';




const App = () => {

  return (
   
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
