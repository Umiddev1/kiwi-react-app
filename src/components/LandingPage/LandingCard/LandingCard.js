import React, { useState, useEffect } from "react";
import './LandingCard.css';
function LandingCard({translate, setTranslate}) {
  const [activ, setActive] = useState(1)
  const [limits, setLimits] = useState(16)
  const [datas, setDatas] = useState([])
  const [reverse, setReverse] = useState('flex')
  const [slick, setSlick] = useState(0)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limits}`)
            .then(res=>res.json())
            .then(json=>setDatas(json))
  },[limits])
  function changeSlick() {
    if(slick > datas.length - 1) {
      setSlick(0)
    }
    else if(slick < 0) {
      setSlick(datas.length)
    }
  }
  function changeRight() {
    setSlick(slick + 1)
    changeSlick()
  }
  function changeLeft() {
    setSlick(slick - 1)
    changeSlick()
  }
  return(
    <div className="landingcard">
        <div className="landingcard__btns">
            <button onClick={() => setReverse('flex')} className="landingcard__btn"><span onClick={() => setActive(1)} className={activ === 1 ? "landingcard__spn-active" : "landingcard__spn"}>{translate['Похожие объявления']}</span></button>
            <button onClick={() => setReverse('reverse')} className="landingcard__btnn"><span onClick={() => setActive(2)} className={activ === 2 ? "landingcard__spn-active" : "landingcard__spn"}>{translate['Обьявление автора']}</span></button>
        </div>
        <div className="landingcard__cardss"> 
          <div className={reverse === "flex" ? "landingcard__cards" : "landingcard__cards-reverse"} style={{transform:`translateX(${-slick * 285}px)`}}>
          {
                    datas.map((data) => (
                      <div className="bigdata__card landingcard__card" key={data.id}>
                      <img className="bigdata__img" src={data.image} alt={data.title} />
                      <h3 className="bigdata__subtitle">{data.title}</h3>
                      <p className="bigdata__price">{data.price}$</p>
                    </div>
                    ))
                  }
          </div>
          <div className="landingcard__icons">
              <button onClick={changeLeft} className="landingcard__icon prevs"><i className='bx bx-left-arrow-alt'></i></button>
              <button onClick={changeRight} className="landingcard__icon nexts"><i className='bx bx-right-arrow-alt'></i></button>
          </div>
        </div>
    </div>
  )
}

export default LandingCard;