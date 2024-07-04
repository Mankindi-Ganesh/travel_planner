import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure the correct path to App.css

const Homepage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <div className="video-container">
      <video className="fullscreen-video" autoPlay muted loop>
        <source src="/vid-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="explore-overlay">
        <h1>ADVENTURE IS WORTHWHILE</h1>
        <h4>Discover New Places With us,Adventure Awaits</h4>
       <div className='but'> 
        <button onClick={handleExploreClick}>Explore With Us</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
