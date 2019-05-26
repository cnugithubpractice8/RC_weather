import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Weather from './Component/Weather';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const RouterApp = () =>{
  const city = 'Daejeon';
  return (
         <div className="App">
            <Header city={city} />

            <Route exact path="/" component ={Weather} />
            <Route path ="/about" component = {About} />
        </div>
);
};
export default RouterApp;