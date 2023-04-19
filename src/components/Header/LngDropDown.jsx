import { useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLngActive } from '../../redux/slices/formSlice';

import { useClickOutside } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

const LngDropDown = () => {
  const refLang = useRef();
  const [lngPopup, setLngPopup] = useState(false);

  const dispatch = useDispatch();
  const { lngActive } = useSelector((state) => state.forms);

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    dispatch(setLngActive(language === 'en' ? 'Eng' : 'Укр'));
    localStorage.setItem('language', language);
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('language');
    if (selectedLanguage) {
      changeLanguage(selectedLanguage);
    }
  }, []);

  const toggleActiveLang = () => {
    setLngPopup(!lngPopup);
  };

  const hadleCloseLng = () => {
    setLngPopup(false);
  };

  useClickOutside(lngActive, refLang, hadleCloseLng);
  return (
    <button ref={refLang} className="header-right__language" onClick={toggleActiveLang}>
      <p>{lngActive}</p>
      <svg viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l5 5 5-5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>

      <div className="drop-down-menu" style={lngPopup ? { display: 'block' } : { display: 'none' }}>
        <div className="drop-down-menu-wrap">
          <div
            className="drop-down-menu__link"
            onClick={() => {
              changeLanguage('en');
            }}>
            Eng
          </div>
          <div
            className="drop-down-menu__link"
            onClick={() => {
              changeLanguage('ua');
            }}>
            Укр
          </div>
        </div>
      </div>
    </button>
  );
};

export default LngDropDown;
