import React from "react";
import Header from "../../components/Header/Header";
import Categores from "../../components/Categores/Categores";
import BigData from "../../components/BigData/BigData";
import Advertisement from "../../components/Advertisements/Advertisement";
import MiniData from "../../components/MiniData/MiniData";
import Footer from "../../components/Footer/Footer";
function HomePage({translate, setTranslate, inputValue, setInputValue}) {
  return (
    <div>
      <Header translate={translate} setTranslate={setTranslate} inputValue={inputValue} setInputValue={setInputValue} />
      <Categores />
      <BigData translate={translate} setTranslate={setTranslate} inputValue={inputValue} setInputValue={setInputValue} />
      <Advertisement />
      <MiniData translate={translate}  setTranslate={setTranslate}/>
      <Footer translate={translate} setTranslate={setTranslate} />
    </div>
  )
}

export default HomePage;