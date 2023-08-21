import React from 'react';
import style from './Header.module.scss';
import List from '../../assets/img/List-icon.png';
import Phone from '../../assets/img/Phone-icon.png';
import User from '../../assets/img/User-icon.png';
import Arrow from '../../assets/img/Arrow.png';
import Logo from '../../assets/img/Logo.png';
import Cart from '../../assets/img/cart-icon.png';
import Balance from '../../assets/img/balance-icon.png';
import Heart from '../../assets/img/heart-icon.png';
const Header = () => {
  return (
    <div className={(style.conteiner, style.conteiner__nopading)}>
      <nav className={style.nav_list}>
        <ul>
          <li className={style.nav_list__left}>
            <li className={style.list_orange}>
              <img src={List} alt="list" className={style.img__list} />
              Каталог товара
            </li>
            <li>
              Общая информация
              <img src={Arrow} alt="Arrow" className={style.img__arrow} />
            </li>
            <li>
              <img src={Phone} className={style.img} alt="Phone" />
              095 357 178
              <img src={Arrow} alt="Arrow" className={style.img__arrow} />
            </li>
          </li>
          <li className={style.li__text__left}>
            <img src={User} className={style.img} alt="User" /> Личный кабинет
          </li>
        </ul>
      </nav>
      <div className={style.menu}>
        <ul>
          <li className={style.icon}>
            <img alt="logo" src={Logo} />
          </li>
          <li className={style.menu__search}>
            <input
              type="text"
              placeholder="Введите название товара"
              className={style.menu__input}
            />
            <button className={style.menu__button}>Искать</button>
          </li>
          <li>
            <select className={style.switch}>
              <option className={style.switch_ed}>UA</option>
              <option className={style.switch_ed}>EN</option>
            </select>
          </li>
          <li className={style.menu__icon}>
            <img alt="Balance" src={Balance} />
          </li>
          <li className={style.menu__icon}>
            <img alt="Heart" src={Heart} />
          </li>
          <li className={style.menu__icon}>
            <img alt="Cart" src={Cart} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
