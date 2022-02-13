import React, { useState } from "react";
import './Advertisement.css';
import AdsObj from "./AdsObj";
function Advertisement() {
    const [arrAds, setArrAds] = useState(AdsObj);
    const [slider, setSlider] = useState(0) 
    function changeSlider() {
      if(slider > arrAds.length -1) {
        setSlider(0)
      }
      else if(slider < 0) {
        setSlider(arrAds.length)
      }

    }
    function changeRight() {
      setSlider(slider + 1)
      changeSlider()
    }
    function changeLeft() {
      setSlider(slider - 1)
      changeSlider()
    }
    return (
      <div className="ads">
        <div className="container">
          <div className="ads__lists">
            <ul className="ads__list" style={{transform:`translateX(${-slider * 386}px)`}}> 
              {
                arrAds.map((data) => (
                  <li className="ads__item" key={data.id}><img src={data.img} alt="img" /></li>
                ))
              }
            </ul>
            <div className="ads__btns">
              <button onClick={changeLeft} className="ads__btn"><i className='bx bx-chevron-left icn'></i></button>
              <button onClick={changeRight} className="ads__btn"><i className='bx bx-chevron-right icn'></i></button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Advertisement;