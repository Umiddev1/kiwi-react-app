import React, { useState, useEffect } from "react";
import './Categores.css';
import Modal from "../Modal/Modal";
import   BottomObj  from "./BottomObj";
function Categores({innerModals}) {
    const [data, setData] = useState(BottomObj);
    const [count, setCount] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    function changeEl() {
      if(count > data.length - 1) {
        setCount(0)
      }
      else if(count < 0) {
        setCount(data.length)
      }
    }
    function changeLeft() {
      setCount(count - 1)
    }
    function changeRight() {
      setCount(count + 1)
    }
  return (
    <div className="container">
      <div className="cat__group">
        <div className="cat__lists">
        <ul className="cat__list p-0" style={{transform:`translateX(${-count * 122}px)`}}>
          {
            data.map((data) => (
              <li onClick={() => setOpenModal(!openModal)} className="cat__item" key={data.id}>
                <img className="cat__img" src={data.img} alt={data.title}/>
                <p className="cat__text">{data.title}</p>
              </li>
            ))
          }
        </ul>
        </div>
        <div className="cat__btns">
            <button onClick={changeLeft} className="cat__btn prev"><i className='bx bx-left-arrow-alt'></i></button>    
            <button onClick={changeRight} className="cat__btn next"><i className='bx bx-right-arrow-alt'></i></button>    
        </div>
        {openModal ? <Modal setOpenModal={setOpenModal} /> : ""}
      </div>
    </div>
  )
}


export default Categores
