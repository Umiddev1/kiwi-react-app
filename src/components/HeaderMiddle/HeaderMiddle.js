import React, { useState, useEffect } from 'react'
import Region from './Region'
import BigData from '../BigData/BigData';
import './HeaderMiddle.css';
import { ru } from '../Lang/translates';
import { uzbek } from '../Lang/translates';
function HeaderMiddle({translate, setTranslate,inputValue, setInputValue}) {
    const [options, setOptions] = useState([])
    useEffect(() =>{
      fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json=>setOptions(json))
    },[])
  return (
    <div className="headermiddle">
        <div className="headermiddle__inps">
            <select className="headermiddle__slt slt-one">
              <option>{translate['Любая категория']}</option>
              {
                options.map((items,index) => (
                  <option key={index}>{items}</option>
                ))
              }
            </select>
            <input onChange={(e) => setInputValue(e.target.value)} className="headermiddle__inp" type="text" placeholder={translate['Что будем искать ?']} />
            <span className='headermiddle__icon'><i className='bx bx-chevron-down'></i></span>
            <select className="headermiddle__slt slt-two">
              <option>{translate['По всей Узбекистану']}</option>
              {
                Region.map((region,index) => (
                  <option key={index}>{region}</option>
                ))
              }
            </select>
            <button className="headermiddle__btn">{translate.Найти}</button>
        </div>
        <div>
          <button className="headermiddle__btns"><span className='headermiddle__plus'><i className='bx bx-plus'></i></span>{translate['Добавить обьявления']}</button>
        </div> 
    </div>
  )
}
export default HeaderMiddle;