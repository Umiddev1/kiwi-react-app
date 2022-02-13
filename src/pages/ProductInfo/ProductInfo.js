import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LandingPage from "../../components/LandingPage/LandingPage";
import Footer from "../../components/Footer/Footer";
function ProductInfo({translate, setTranslate}) {
    const {id} = useParams()
    const [arr, setArr] = useState([])
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> setArr(json))
    },[]) 
  return (
    <div>
        <Header translate={translate} setTranslate={setTranslate} />
        <LandingPage img={arr.image} title={arr.title} price={arr.price} translate={translate} setTranslate={setTranslate} />
        <Footer translate={translate} setTranslate={setTranslate} />
    </div>
  )
}

export default ProductInfo;