import React, { useState } from 'react'
import '../Modal.css';
function ModalItem({text}) {
  return (
    <div>
      <li className="modal__item"><p className="modal__text">{text}</p></li>
    </div>
  ) 
}
export default ModalItem;