import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";



import { BrowserRouter, Routes, Route } from "react-router-dom";



import Main from './components/Allmain/Main';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
  
   
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

