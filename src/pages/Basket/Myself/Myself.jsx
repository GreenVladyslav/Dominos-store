import React from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setLoadingStatus } from '../../../redux/slices/formSlice';

import Select from 'react-select';

import { useTranslation } from 'react-i18next';

import '../basket.scss';
import './custom-select.scss';

function Myself() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);
  const [navigateToPayment, setNavigateToPayment] = useState(false);
  const [street, setStreet] = useState([]);

  const { userCity } = useSelector((state) => state.user);

  const { t } = useTranslation();

  const YOUR_API_KEY = 'cd74c50785f8febf39c446bb9364b018';

  useEffect(() => {
    const getStreets = async () => {
      const res = await axios.get(
        `https://api.visicom.ua/data-api/5.0/uk/geocode.json?text=м.Київ&key=${YOUR_API_KEY}`,
      );

      setStreet(res.data.features);
    };

    getStreets();
  }, []);

  const message =
    selectedOption === null ? (
      <div style={{ marginTop: '20px', color: 'red' }}>{t('placeholderrestaurant')}</div>
    ) : null;

  const renderSteets = (arr) => {
    const str = arr
      .slice(10, 50)
      .map((item) => item.properties.address.slice(6))
      .filter((item) => item !== '');

    const arrOfOptions = str.map((item, index) => {
      return { value: index, label: item };
    });

    return arrOfOptions;
  };

  const renameStreets = renderSteets(street);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    setNavigateToPayment(true);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (navigateToPayment) {
      dispatch(setLoadingStatus('loading'));
      setTimeout(() => {
        navigate('/payment');
        dispatch(setLoadingStatus('sucsses'));
      }, 1000);
    }
  };

  return (
    <>
      <div className="basket-map">
        <h3 className="basket__title">{t('choose a restaurant')}</h3>
        <div className="basket-map-block">
          <svg
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#fe0021"
            width="24px"
            height="24px">
            <path
              d="M6 0C2.692 0 0 2.692 0 6c0 .993.248 1.978.72 2.851l4.952 8.956a.375.375 0 00.656 0l4.953-8.959A6.01 6.01 0 0012 6c0-3.308-2.692-6-6-6zm0 9C4.346 9 3 7.654 3 6s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
              fill="currentColor"></path>
          </svg>
          <span>{userCity === '' ? t('kyiv') : t(userCity)}</span>
        </div>

        <form>
          <label htmlFor="rest">{t('restaurant')}</label>
          <Select
            value={selectedOption}
            onChange={handleChange}
            autoFocus={true}
            options={renameStreets}
            placeholder={t('choose a restaurant')}
            classNamePrefix="custom_select"
          />
          <button
            type="submit"
            className="btn-myself btn-myself-position-right"
            onClick={handleClick}>
            {t('order checkout')}
          </button>
        </form>
        {message}
      </div>
    </>
  );
}

export default Myself;

// const getValue = () => {
//   return street ? options.find(c => c.value === street) : ''
// }

// const onChange = (newValue) => {
//  setStreet(newValue.value)
// }
