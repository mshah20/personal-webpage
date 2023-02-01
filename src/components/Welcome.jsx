import React from "react"; 
import './Welcome.css';

const Welcome = () => {
  return(
    <div id="welcome-body">
      <div className="welcome-text">
        <h1 className="header"> <span className="hi">Hi, </span><span className="name">I'm Mueed</span></h1>
        <p className="subtext">a programmer</p>
      </div>
    </div>
  );
}

export default Welcome;