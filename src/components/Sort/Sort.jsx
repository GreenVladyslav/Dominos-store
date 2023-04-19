import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectActiveSort } from '../../redux/slices/filtersSlice';

import { useClickOutside } from '../../hooks/useOutsideClick';

import Search from '../Search/Search';

import { useTranslation } from 'react-i18next';

import './sort.scss';

const sortList = [
  { name: 'sortlow', sortProperty: '-price', label: '' },
  { name: 'sorthigh', sortProperty: 'price', label: '' },
  { name: 'popularity l', sortProperty: '-rating', label: '' },
  { name: 'popularity t', sortProperty: 'rating', label: '' },
];

function Sort({ cut }) {
  const refSort = React.useRef();
  const [sortPopup, setSortPopup] = React.useState(false);

  const dispatch = useDispatch();
  const { activeSort } = useSelector((state) => state.filters);

  const cutList = cut ? sortList : sortList.slice(0, 2);

  const { t } = useTranslation();

  const openPopup = () => {
    setSortPopup(!sortPopup);
  };

  const hadleCloseSort = () => {
    setSortPopup(false);
  };

  useClickOutside(refSort, hadleCloseSort);

  const translateActiveSort = activeSort.name === '' ? 'sort' : activeSort.name;

  return (
    <div className="low">
      <div className="low-content">
        <div className="low-content-wrap__top">
          <div className="low-left">
            <Search />
          </div>
          <div ref={refSort} className="low-right">
            <div className="low-sort" onClick={() => openPopup(sortPopup)}>
              <span>{t(translateActiveSort)}</span>
              <svg viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l5 5 5-5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>

              <div
                className="low-sort__popup"
                style={sortPopup ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  {cutList.map((obj, index) => {
                    return (
                      <li key={index} onClick={() => dispatch(selectActiveSort(obj))}>
                        {t(obj.name)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sort;
