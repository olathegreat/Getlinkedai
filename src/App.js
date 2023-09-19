import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage/ContactPage';



const App = () => {

  return (
    // <div className="container">
    //  Hello

      

      
    // </div>
    <Routes>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  );
}

export default App;
