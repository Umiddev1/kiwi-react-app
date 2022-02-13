import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './BigData.css';
function BigData({translate, setTranslate, inputValue, setInputValue}) {
  const [isactive, setIsActive] = useState(1)
  const [products, setProducts] = useState([])
  const [sty, setSty] = useState(1)
  const [limit, setLimit] = useState(16)
  console.log(inputValue);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res => res.json())
            .then(json => setProducts(json))
  },[limit])
    return (
      <div className="container">
       <div className="bigdata__gr">
          <div className="bigdata__titles">
              <h3 onClick={() => setSty(1)}><button onClick={() => setIsActive(1)} className={isactive === 1 ? "bigdata__title-active" : "bigdata__title"}>{translate['Новые объявления']}</button></h3>
              <h3 onClick={() => setSty(2)}><button onClick={() => setIsActive(2)} className={isactive === 2 ? "bigdata__title-actives" : "bg-tit"}>{translate['Лучщие предложение']}</button></h3>
          </div>
          <div className="bigdata__wrapper">
            <div className={sty === 1 ? "bigdata__cards" : "bigdata__cards-reverse"}>
              {
                products.length > 0 ? (
                  products.filter(data => data.title.toLowerCase().includes(inputValue)).map((data) => (
                   <Link className="bigdata__card" key={data.id} to={`/info/${data.id}`}>
                     <img className="bigdata__img" src={data.image} alt={data.title} />
                     <h3 className="bigdata__subtitle">{data.title}</h3>
                     <p className="bigdata__price">{data.price}$</p>
                   </Link>
                  ))
                ) : 
                
                (
                  <h1>Loading...</h1>
                )
              }
              </div>
          </div>
          <button onClick={() => setLimit(limit + 4)} className={products.length === 20 ? 'none' : 'bigdata__btn'}>{translate['Покозать еще']} <i className='bx bx-chevron-down'></i></button>
       </div>
      </div>
    )
  } 

export default BigData;