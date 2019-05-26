import React from 'react';
import profile from './profile.png';

// Stateless component
const Home = () => {
  return (
    <div>
      <h1>About Team 8</h1>
      <a href= "https://github.com/Nroot33">201502049 노효근 </a><br></br><br></br>
      <a href= "https://github.com/yogjin"> 201702015 박영진 </a><br></br><br></br>
      <a href= "https://github.com/hjlee9182"> 201502099 이현준 </a><br></br><br></br>
      <img src={profile} alt="profile"/>
      <h1>Welcome EveryOne</h1>
      <a href= "https://www.twitch.tv/noocutt33"> NooCuTT Twitch channel </a><br></br><br></br>

    </div>
  );
};

export default Home;