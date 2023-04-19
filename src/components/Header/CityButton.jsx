import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCityPopup } from '../../redux/slices/formSlice';

import { useTranslation } from 'react-i18next';

import './header.scss';

const CityButton = () => {
  const userCity = useSelector((state) => state.user.userCity);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <div className="header-left__city" onClick={() => dispatch(setCityPopup(true))}>
      <svg viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff">
        <path
          d="M6 0C2.692 0 0 2.692 0 6c0 .993.248 1.978.72 2.851l4.952 8.956a.375.375 0 00.656 0l4.953-8.959A6.01 6.01 0 0012 6c0-3.308-2.692-6-6-6zm0 9C4.346 9 3 7.654 3 6s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
          fill="currentColor"></path>
      </svg>
      <p>{userCity === '' ? t('kyiv') : t(userCity)}</p>
    </div>
  );
};

export default CityButton;
