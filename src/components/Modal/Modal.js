import React from 'react';
import './Modal.css';
import ModalItem from './ModalItem/ModalItem';
function Modal({setOpenModal}) {
  return (
   <div className='modal-bg'>
     <div className='modal'>
      <ul className="modal__list"> 
        <ModalItem text="Телефоны" />
        <ModalItem text="Компьютеры" />
        <ModalItem text="Фото / видео" />
        <ModalItem text="Тв / видеотехника" />
        <ModalItem text="Аудиотехника" />
      </ul>
      <ul className='modal__list'>
        <ModalItem text="Игры и игровые приставки" />
        <ModalItem text="Техника для дома" />
        <ModalItem text="Техника для кухни" />
        <ModalItem text="Климатическое оборудование" />
        <ModalItem text="Индивидуальный уход" />
      </ul>
      <ul className='modal__list'>
        <ModalItem text="Аксессуары" />
        <ModalItem text="Прочая электроника" />
        <ModalItem text="Телефоны" />
        <ModalItem text="Компьютеры" />
        <ModalItem text="Индивидуальный уход" />
      </ul>
      <ul className='modal__list' >
        <ModalItem text="Аксессуары" />
        <ModalItem text="Прочая электроника" />
        <ModalItem text="Телефоны" />
        <ModalItem text="Компьютеры"/>
        <ModalItem text="Индивидуальный уход"/>
      </ul>
     </div>
   </div>
  )
}

export default Modal