import React from "react";
import './LandingDes.css';
function LandingDes({translate, price}) {
  return (

    <div className="landingdes">
      <div className="landingdes__article">
        <p className="landingdes__text">{translate['Артикул']}: 4418970</p>
        <p className="landingdes__subtext"><span>{translate['обновлено']}</span>: 28.04.17 <span>{translate['добавлено']}: 28.04.17</span></p>
      </div>
      <p className="landingdes__price">{price}$</p>
      <div className="landingdes__links">
        <a className="landingdes__link" href="#">{translate['Ташкент, Ташкентская область, Юнусабадский район']}</a>
      </div>
      <div className="landindes__numbers">
        <div className="landindes__number">99891 166<span className="star">* * * * </span> <span className="eye">{translate['Покозать польностю']}</span></div>
        <div className="landindes__number">99891 166<span className="star">* * * * </span> <span className="eye">{translate['Покозать польностю']}</span></div>
        <p className="landingdes__avtor">Автор обьявлении: <span className="landingdes__user">Зухриддин Темиров</span></p>
      </div>
      <div className="landindes__btns">
        <button className="landindes__btn">{translate['Написать автору']}</button>
        <button className="landindes__btnn">{translate['Предложить свою цену']}</button>
      </div>
      <div className="landindes__lists">
        <ul className="landindes__list"> 
          <li className="landindes__item"><p className="table__text">{translate['Количество комнат:']}</p><p className="table__subtext">6</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Общая площадь:']}</p><p  className="table__subtext">40 м2</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Этаж:']}</p><p  className="table__subtext">32</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Этажность дома:']}</p><p  className="table__subtext">6</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Состояние квартиры:']}</p><p  className="table__subtext">{translate['Первая сдача']}</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Этаж:']}</p><p  className="table__subtext">32</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Планировка']}</p><p  className="table__subtexts">Раздельная</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Год постройки/сдачи']}</p><p  className="table__subtexts">{translate['Сдача в 2017']}</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Ремонт']}</p><p  className="table__subtext">{translate['Авторский проект']}</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Санузел']}</p><p  className="table__subtexts">{translate['2 санузла и более']}</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Меблирована']}</p><p  className="table__subtexts">{translate['Да']}</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Высота потолков']}</p><p  className="table__subtext">32</p></li>
          <li className="landindes__item"><p className="table__text">{translate['Рядом есть']}</p><p  className="table__subtexts table__subtextss">{translate['Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе']}</p></li>
        </ul>
        <p className="text__line">Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. </p>
        <p className="text__lines">Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.</p>
        <div className="text__views">
        <p className="text__view">Просмотры:<span>10958</span></p>
        <span className="text__loading">Пожаловатся</span>
        </div>
      </div>
    </div>
  )
}
export default LandingDes