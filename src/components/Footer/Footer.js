import React from "react";
import footerlogo from '../../assets/img/footer/footer-logo.svg';
import appstore from '../../assets/img/footer/AppStore.svg';
import android from '../../assets/img/footer/Android.svg';
import './Footer.css';
function Footer({translate, setTranslate}) {
  return (
    <footer>
      <div className="container"> 
        <div className="footer__wrapper">
            <div className="footer__logos">
              <img className="footer__logo" src={footerlogo} alt="footer-logo" />
              <p className="footer__text">{translate['Продай, найди, купи все что пожелаешь…']}</p>
            </div>
            <div className="footer__base">
              <p className="footer__subtext">{translate['Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления']}</p>
            </div>
            <div className="footer__social">
             <a href="#"><img className="footer__img" src={appstore} alt="appstore" /></a>
             <a href="#"> <img  src={android} alt="appstore" /></a>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;