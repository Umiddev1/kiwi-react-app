import React from "react";
import Header from "../../components/Header/Header";
import LoginInput from "../../components/LoginInput/LoginInput";
import Footer from "../../components/Footer/Footer";
function Login({translate, setTranslate}) {
  return (
    <div>
      <Header translate={translate} setTranslate={setTranslate} />
      <LoginInput translate={translate} setTranslate={setTranslate}/>
      <Footer translate={translate} setTranslate={setTranslate} />
    </div>
  )
}

export default Login