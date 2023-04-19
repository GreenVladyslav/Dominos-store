import React from 'react';
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setActiveCategory, setInputValue } from '../../redux/slices/filtersSlice';

import './categories.scss';

const categoriesList = [
  { id: '1', name: 'Redirect', label: 'sets' },
  { id: '2', name: 'Піца', label: 'pizza' },
  { id: '3', name: 'Напої', label: 'drinks' },
  { id: '4', name: 'Сайди', label: 'sides' },
  { id: '5', name: 'Десерти', label: 'desserts' },
];

const MediaCategories = () => {
  //   const [sticky, setSticky] = useState(false);

  const dispatch = useDispatch();

  //   function setPosition() {
  //     if (window.scrollY >= 80) {
  //       setSticky(true);
  //     } else {
  //       setSticky(false);
  //     }
  //   }

  //   useEffect(() => {
  //     window.addEventListener('scroll', setPosition);

  //     return () => {
  //       window.removeEventListener('scroll', setPosition);
  //     };
  //   }, []);
  return (
    <div className="container">
      <div className="categories-content">
        <div className="categories-left">
          <ul className="categories-list">
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
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaCategories;
