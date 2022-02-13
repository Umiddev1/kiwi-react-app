import React, { useState, useEffect } from "react";
import './MiniData.css';
function MiniData({translate, setTranslate}) {
  const [active, setActive] = useState(1)
  const [productInfo, setProductInfo] = useState([])
  const [isLimit, setIsLimit] = useState(4) 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${isLimit}`)
            .then(res=>res.json())
            .then(json=>setProductInfo(json))
  },[isLimit])
  return (
    <div className="minidata">
      <div className="container">
          <div className="minidata__btns">  
            <button onClick={() => setIsLimit(isLimit - 4)} className="minidata__btn">
              <span onClick={() => setActive(1)} className={active === 1 ? 'minidata__spns--active' : 'minidata__spns'}>{translate['Просмотренные']}</span>
              </button>
            <button onClick={() => setIsLimit(isLimit + 4)} className="minidata__btn">
              <span onClick={() => setActive(2)} className={active === 2 ? 'minidata__spn--active' : 'minidata__spn'}>{translate['Выбор редакции']}</span>
              </button>
            <button onClick={() => setIsLimit(isLimit + 4)} className="minidata__btn">
              <span onClick={() => setActive(3)} className={active === 3 ? 'minidata__spn--active' : 'minidata__spn'}>{translate['Сниженные цены']}</span>
              </button>
          </div>
          <div className="minidata__lists">
                  {
                    productInfo.map((data) => (
                      <div className="bigdata__card" key={data.id}>
                      <img className="bigdata__img" src={data.image} alt={data.title} />
                      <h3 className="bigdata__subtitle">{data.title}</h3>
                      <p className="bigdata__price">{data.price}$</p>
                    </div>
                    ))
                  }
          </div>
          <button onClick={() => setIsLimit(20)} className={productInfo.length === 20 ? 'none' : 'minidata__btnss'}>{translate['Покозать еще']} <i className='bx bx-chevron-down'></i></button>
      </div>
    </div>
  )
}

export default MiniData