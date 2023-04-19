import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory, setNameCategory } from '../../redux/slices/filtersSlice';

import { useTranslation } from 'react-i18next';

import './filter.scss';

// const filterListDrinks = ['Всі', 'Вода', 'Сік', 'Пиво'];
// const filterListSides = ['Всі', 'Комбо-бокси', 'Картопля', 'Курка', 'Хлібці'];

function Filter({ filters }) {
  const { activeCategory } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <div className="filter">
      <div className="container">
        <ul className="filter-wrap">
          {filters.map((str, index) => {
            return (
              <li
                tabIndex={0}
                key={str}
                className="filter__item"
                onClick={() => {
                  dispatch(setActiveCategory(index));
                  dispatch(setNameCategory(str));
                }}
                style={activeCategory === index ? { color: 'red' } : null}>
                {t(str)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
