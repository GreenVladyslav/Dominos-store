import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCityPopup } from '../../redux/slices/formSlice';
import { setUserCity } from '../../redux/slices/userSlice';

import { useClickOutside } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

// import { useLocalStorage } from '../../hooks/useLocalStorage';

// import point from '../../assets/pointCity.svg';

import './city.scss';

const cityList = [
  { id: '1', city: 'kyiv' },
  { id: '2', city: 'lviv' },
  { id: '3', city: 'odesa' },
  { id: '4', city: 'irpin' },
  { id: '5', city: 'rivne' },
  { id: '6', city: 'vishneve' },
];

function City() {
  const overflow = React.useRef();
  const popup = React.useRef();

  const [acitveIndex, setActiveIndex] = React.useState(0);

  const dispatch = useDispatch();
  const { activeCityPopup } = useSelector((state) => state.forms);
  const userCity = useSelector((state) => state.user.userCity);

  const { t } = useTranslation();

  const handleClosePopup = () => {
    dispatch(setCityPopup(false));
  };

  useClickOutside(popup, handleClosePopup);

  React.useEffect(() => {
    localStorage.setItem('city', userCity);
  }, []);

  const storageCity = localStorage.getItem('city');
  if (storageCity) {
    dispatch(setUserCity(storageCity));
  }

  React.useEffect(() => {
    const index = cityList.findIndex((item) => item.city === storageCity);

    if (index !== acitveIndex) {
      setActiveIndex(index);
    }
  }, [acitveIndex, storageCity]);

  // React.useEffect(() => {
  //     const timer = window.setTimeout(() => {
  //   dispatch(setCityPopup(true));
  // }, 5000);

  //   return window.clearTimeout(timer);
  // }, []);

  return (
    <div
      ref={overflow}
      className="city"
      style={activeCityPopup ? { display: 'block' } : { display: 'none' }}>
      <div ref={popup} className="city-content">
        <div className="city__close" onClick={handleClosePopup}>
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
        <h3 className="city__title">{t('located')}</h3>
        <ul>
          {cityList.map((obj, index) => {
            return (
              <li
                key={obj.id}
                style={acitveIndex === index ? { color: 'red' } : { color: 'inherit' }}
                onClick={() => {
                  setActiveIndex(index);
                  dispatch(setUserCity(obj.city));
                  dispatch(setCityPopup(false));
                }}>
                {t(obj.city)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default City;
