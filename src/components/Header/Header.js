import React from "react";
import HeaderTop from "../HeaderTop/HeaderTop";
import '../HeaderTop/HeaderTop.css';
import HeaderMiddle from "../HeaderMiddle/HeaderMiddle";
function Header({translate, setTranslate, inputValue, setInputValue}) {
  return (
    <header>
      <div className="container">
      <HeaderTop translate={translate} setTranslate={setTranslate} />
      <HeaderMiddle translate={translate} setTranslate={setTranslate} inputValue={inputValue} setInputValue={setInputValue}/>
      </div>
    </header>
  )
}

export default Header;