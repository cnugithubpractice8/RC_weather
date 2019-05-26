import React from 'react';
import logo from './mainimage.jpg';
// Stateless component
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h3> 전 세계 날씨가 궁금하면 개죽이를 눌러봐 ! </h3>
       <a href= "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5">
       <img src={logo} alt="nice dog"/>
       </a>
    </div>
  );
};

export default Home;