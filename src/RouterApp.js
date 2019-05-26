import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Weather from './Component/Weather';
import Home from './Home';

const About = () => <div>About</div>;

const RouterApp = () =>{
  const city = 'Daejeon';
  return (
         <div className="App">
        <Header city={city} />
            <Route exact path="/" component ={Home} />
            <Route path ="/about" component = {About} />
            <Route path="/weather" component = {Weather} />
        </div>
);
};
export default RouterApp;