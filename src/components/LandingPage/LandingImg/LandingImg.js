import React from "react";
import './LandingImg.css';
function LandingImg({img}) {
  return (
    <div className="landingimg__wrapper">
      <div className="landingimgs__mini">  
        <img className="landingimg__mini" src={img} alt="landingimg" />
        <img className="landingimg__mini" src={img} alt="landingimg" />
        <img className="landingimg__mini" src={img} alt="landingimg" />
        <img className="landingimg__mini" src={img} alt="landingimg" />
        <img className="landingimg__mini" src={img} alt="landingimg" />
      </div>
      <div className="landingimgs__main">
        <img className="landingimg__main" src={img} alt="mainimg" />
      </div>
    </div>
  )
}

export default LandingImg