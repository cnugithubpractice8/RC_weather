import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import RouterApp from './RouterApp';
import './App.css';



function App() {

  return (
  <BrowserRouter>
       <RouterApp />
    </BrowserRouter>
  );
}

export default App;
