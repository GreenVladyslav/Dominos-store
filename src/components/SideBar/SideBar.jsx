import React from 'react';

import { NavLink } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSideBar } from '../../redux/slices/filtersSlice';

import { useClickOutside } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

import './sidebar.scss';

function SideBar() {
  const side = useRef();
  const [fixed, setFixed] = useState(false);

  const dispatch = useDispatch();
  const { activeSideBar } = useSelector((state) => state.filters);

  const { t } = useTranslation();

  useEffect(() => {
    if (window.scrollY >= 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }

    window.addEventListener('scroll', setFixed);

    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, [fixed]);

  const closeSideBar = () => {
    dispatch(setSideBar(false));
  };

  useClickOutside(activeSideBar, side, closeSideBar);

  const activeClass = activeSideBar ? 'menu active' : 'menu';

  return (
    <div
      ref={side}
      className={activeClass}
      style={fixed ? { transform: 'translate(0px, 0px)' } : { transform: 'translate(0px, 82px)' }}>
      <div className="menu__block">
        <div className="menu__close" onClick={closeSideBar}>
          <svg
            width="36px"
            height="36px"
            viewBox="0 0 1024 1024"
            fill="#000000"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
              fill=""
            />
            <path
              d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
              fill=""
            />
          </svg>
        </div>

        <nav>
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink
                className="menu__list-link"
                to="/sets"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}>
                Redirect
              </NavLink>
            </li>

            <li className="menu__list-item">
              <NavLink
                className="menu__list-link"
                to="/pizza"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}>
                {t('pizza')}
              </NavLink>
            </li>

            <li className="menu__list-item">
              <NavLink
                className="menu__list-link"
                to="/drinks"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}>
                {t('drinks')}
              </NavLink>
            </li>

            <li className="menu__list-item">
              <NavLink
                className="menu__list-link"
                to="/sides"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}>
                {t('sides')}
              </NavLink>
            </li>

            <li className="menu__list-item">
              <NavLink
                className="menu__list-link"
                to="/desserts"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}>
                {t('desserts')}
              </NavLink>
            </li>

            <li className="menu__list-item">
              <NavLink
                className="menu__list-link"
                to="/news"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}>
                {t('news')}
              </NavLink>
            </li>

            <li className="menu__list-item">
              <NavLink
                className="menu__list-link"
                to="/pizzatracker"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}>
                PIZZA TRACKER
              </NavLink>
            </li>

            <li className="menu__list-item menu__divider"></li>
            <li className="menu__list-item disab">{t('pizzerias')}</li>
            <li className="menu__list-item disab">{t('work and career')}</li>
            <li className="menu__list-item disab">{t('franchising')}</li>
            <li className="menu__list-item disab">{t('pizza maker')}</li>
            <li className="menu__list-item disab">DOMINO'S CLUB</li>
            <li className="menu__list-item disab">{t('leave a review')}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
