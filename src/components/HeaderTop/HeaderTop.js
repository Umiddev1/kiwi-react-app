import React, { useState } from "react";
import logo from '../../assets/img/kiwilogo.svg';
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import { ru } from "../Lang/translates";
import { uzbek } from "../Lang/translates";
import './HeaderTop.css';
function HeaderTop({translate, setTranslate}) {
  return (
        <div className="headertop__group">
            <div className="headertop__logos">
              <img src={logo} alt="logo" />
              <span className="headertop__spn">{translate['Продай, найди, купи все что пожелаешь…']}</span>
            </div>
            <nav className="headertop__nav nav">
              <ul className="nav__list">
                  <NavItem text={translate.Объявления} />
                  <NavItem text={translate.Магазины} />
                  <NavItem text={translate['Для бизнеса']} />
                  <NavItem text={translate.Помощь} />
              </ul>
            </nav>
            <div className="headertop__lang">
              <button onClick={() => setTranslate(ru)} className={translate === ru ? 'headertop__btnru-active' : 'headertop__btn'}>Рус</button>
              <span>|</span>
              <button onClick={() => setTranslate(uzbek)} className={translate === uzbek ? 'headertop__btnuz-active' : 'headertop__btn'}>O'z</button>
            </div>
            <div className="headertop__exit">
                <a className="headertop__link" href="#">{translate.Вход}</a>
                <span className="headertop__line">|</span>
                <Link to='/login' className="headertop__link headertop__link--underline" href="#">{translate.Регистрация}</Link>
            </div>
        </div>
  )
}

export default HeaderTop;