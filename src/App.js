import React, { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import { Routes, Route } from "react-router-dom";
import { ru } from "./components/Lang/translates";
import { uzbek } from "./components/Lang/translates";
import Login from "./pages/Login/Login";
function App() {
  const [translate, setTranslate] = useState(ru)
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage translate={translate} setTranslate={setTranslate} inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/info/:id" element={<ProductInfo translate={translate} setTranslate={setTranslate}/>}/>
          <Route path="/login" element={<Login translate={translate} setTranslate={setTranslate} />} />
        </Routes>
    </div>
  );
}

export default App;
