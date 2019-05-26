import React from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';

const Header = props => {

   const { city } = props;
   return (
   <div>
   <Navigation />
    <header className="App-header">

        <img src={logo} className="App-logo" alt="logo"/>
        <div>CITY : {city} </div>
    </header>
    </div>
    );
};
export default Header;