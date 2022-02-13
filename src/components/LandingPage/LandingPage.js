import React from "react";
import './LandingPage.css';
import LandingCard from "./LandingCard/LandingCard";
import LandingImg from "./LandingImg/LandingImg";
import LandingDes from "./LandDes/LandingDes";
function LandingPage({img, title, price, translate, setTranslate}) {
  return (
    <div className="landingpage">
      <div className="container">
      <h1 className="landingpage__title">{title}</h1>
      <div className="landingpage__wrapper">
        <LandingImg img={img} />
        <LandingDes translate={translate} setTranslate={setTranslate} title={title} price={price} />
        </div>
        <LandingCard translate={translate} setTranslate={setTranslate} />
      </div>
    </div>
  )
}

export default LandingPage;