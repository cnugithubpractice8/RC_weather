import React from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';

const Header = props => {

   const { city } = props;
   return (
   <div>
   <Navigation />
    <header className="App-header">

        <p>  Here is Weather Crawler </p>
    </header>
    </div>
    );
};
export default Header;