import React from "react";
import Forms from "./Form/Forms";
import logImg from '../../assets/img/login/formik.png';
import './LoginInput.css';
function LoginInput({translate, setTranslate}) {
  return (
    <div className="container">
      <div className="logininput__wrapper"> 
        <Forms translate={translate} setTranslate={setTranslate} />
        <img className="loginimg" src={logImg} alt="imgs" />
      </div>
    </div>
  )
}

export default LoginInput;