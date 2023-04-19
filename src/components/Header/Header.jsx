import React from 'react';

import { NavLink } from 'react-router-dom';

import HeaderAuth from './HeaderAuth';
import CityButton from './CityButton';
import LngDropDown from './LngDropDown';

import { useTranslation } from 'react-i18next';

import './header.scss';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <div className="header-left__phone">
              <a href="tel+380441111222" target="_self">
                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.51 13.21l-2.512-2.512c-.897-.897-2.422-.538-2.781.628-.27.808-1.166 1.256-1.974 1.077-1.794-.449-4.216-2.781-4.665-4.665-.269-.808.27-1.705 1.077-1.974 1.166-.359 1.525-1.884.628-2.781L4.77.471c-.718-.628-1.794-.628-2.422 0L.644 2.176C-1.061 3.97.824 8.725 5.04 12.94s8.971 6.19 10.765 4.396l1.705-1.705c.628-.717.628-1.794 0-2.422z"
                    fill="#fff"></path>
                </svg>
                <p>0441111222</p>
              </a>
            </div>

            <CityButton />
            <NavLink
              to="/pizzatracker"
              className={({ isActive }) =>
                isActive ? 'header-left__tracker active-header' : 'header-left__tracker'
              }>
              PIZZA TRACKER
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? 'header-left__tracker active-header' : 'header-left__tracker'
              }>
              {t('news')}
            </NavLink>
          </div>

          <div className="header-right">
            <LngDropDown />

            <div className="header-login">
              <HeaderAuth />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
