import React from 'react';
import { useState, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setActiveCategory, setInputValue } from '../../redux/slices/filtersSlice';

import CartEmpty from './CartEmpty';

import { useTranslation } from 'react-i18next';

import logDom from '../../assets/logo-dom.png';

import './categories.scss';

const categoriesList = [
  { id: '1', name: 'Redirect', label: 'sets' },
  { id: '2', name: 'Піца', label: 'pizza' },
  { id: '3', name: 'Напої', label: 'drinks' },
  { id: '4', name: 'Сайди', label: 'sides' },
  { id: '5', name: 'Десерти', label: 'desserts' },
];

function Categories() {
  const [sticky, setSticky] = useState(false);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  function setPosition() {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setPosition);

    return () => {
      window.removeEventListener('scroll', setPosition);
    };
  }, []);

  return (
    <div className={sticky ? 'categories sticky' : 'categories'}>
      <div className="container">
        <div className="categories-content">
          <div className="categories-left">
            <ul className="categories-list">
              <div className="categories__logo">
                <Link to="/">
                  <img src={logDom} alt="logo" />
                </Link>
              </div>
              {categoriesList.map(({ id, name, label }) => {
                return (
                  <li className="lsit-item" key={id}>
                    <NavLink
                      key={id}
                      to={`/${label}`}
                      style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                      onClick={() => {
                        dispatch(setActiveCategory(0));
                        dispatch(setInputValue(''));
                      }}>
                      {t(label)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="categories-right">
            <CartEmpty />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
