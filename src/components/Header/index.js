import React from 'react';
import style from './Header.module.scss';
import List from '../../assets/img/List-icon.png';
import Phone from '../../assets/img/Phone-icon.png';
import User from '../../assets/img/User-icon.png';
import Arrow from '../../assets/img/Arrow.png';
const Header = () => {
  return (
    <div className={(style.conteiner, style.conteiner__nopading)}>
      <nav className={style.nav_list}>
        <ul>
          <div className={style.nav_list__left}>
            <li>
              <img src={List} alt="list" />
              Каталог товара
            </li>
            <li>Общая информация</li>
            <li>
              <img src={Phone} className={style.img} alt="Phone" />
              +3809999999
            </li>
          </div>
          <li>
            <img src={User} className={style.img} alt="User" /> Личный кабинет
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
