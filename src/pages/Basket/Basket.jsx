import React from 'react';

import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';
import Delivery from './Delivery/Delivery';
import Myself from './Myself/Myself';

import Spinner from '../../components/Spinner/Spinner';

import { useTranslation } from 'react-i18next';

import './basket.scss';

function Basket() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  const { items, totalPrice } = useSelector((state) => state.cart);
  const { loadingStatus } = useSelector((state) => state.forms);
  console.log(items);

  const { t } = useTranslation();

  const handleClickAttribute = useCallback((event) => {
    setDeliveryMethod(event.target.getAttribute('data-button'));
  }, []);

  return (
    <div className="container">
      <div className="basket">
        <h2 className="basket__title basket__title-center">{t('cart')}</h2>
        <div className="basket-delivery">
          <button
            data-button="delivery"
            type="button"
            className={`basket-delivery__btn ${
              deliveryMethod === 'myself' ? '' : 'active-delivery-btn'
            }`}
            onClick={handleClickAttribute}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463" width="20" height="20">
              <path d="M407.5 280a55.219 55.219 0 00-17.879 2.972l-7.645-15.291A72.047 72.047 0 01407.5 263c10.076 0 19.826 2.025 28.978 6.021a7.5 7.5 0 006.001-13.748C431.422 250.447 419.654 248 407.5 248a86.924 86.924 0 00-32.257 6.215l-27.785-55.57c1.314.229 2.663.355 4.042.355h16a7.5 7.5 0 007.5-7.5v-32a7.5 7.5 0 00-7.5-7.5h-16c-9.126 0-17.048 5.232-20.939 12.852l-7.931-15.862c-4.006-8.013-12.061-12.99-21.019-12.99H287.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h14.111a8.455 8.455 0 017.603 4.699l19.424 38.847-3.647 1.824C316.978 200.376 312 208.43 312 217.389V296h-64.5c-13.509 0-24.5-10.99-24.5-24.5V239h.5c12.958 0 23.5-10.542 23.5-23.5S236.458 192 223.5 192h-64c-6.425 0-12.253 2.594-16.5 6.787V87.5c0-8.547-6.953-15.5-15.5-15.5h-112C6.953 72 0 78.953 0 87.5v112c0 8.547 6.953 15.5 15.5 15.5h16.834a19.673 19.673 0 00-.521 4.74c.168 10.62 8.945 19.26 19.566 19.26h40.322a100.245 100.245 0 00-13.03 9.914c-16.617 14.933-25.497 32.727-28.266 44.4-1.493 6.295-.06 12.795 3.933 17.836 3.938 4.973 9.837 7.821 16.189 7.821h.041l3.952-.007A55.632 55.632 0 0072 335.5c0 30.603 24.897 55.5 55.5 55.5 28.058 0 51.305-20.934 54.979-48H327.5a7.5 7.5 0 007.5-7.5c0-4.887.488-9.769 1.451-14.509 4.006-19.734 15.971-36.281 32.117-46.586l7.643 15.286C361.605 299.699 352 316.497 352 335.5c0 30.603 24.897 55.5 55.5 55.5s55.5-24.897 55.5-55.5-24.897-55.5-55.5-55.5zm-248-73h64c4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5h-64c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5zM15 87.5a.5.5 0 01.5-.5h112a.5.5 0 01.5.5V104H15V87.5zm.5 112.5a.5.5 0 01-.5-.5V119h113v80.5a.5.5 0 01-.5.5h-112zm35.879 24c-2.479 0-4.528-2.017-4.567-4.496A4.536 4.536 0 0150.318 215l85.695.024c-.003.159-.012.316-.012.476 0 2.997.57 5.862 1.597 8.5H51.379zm19.161 79.972h-.012c-2.383 0-3.799-1.337-4.431-2.135-1.123-1.418-1.522-3.262-1.096-5.06C70.528 273.477 99.299 239 143.5 239c34.313 0 47.1 32.793 47.1 53.464 0 5.606-3.095 11.288-9.011 11.299l-111.049.209zM136 335.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zm-8.5 40.5c-22.332 0-40.5-18.168-40.5-40.5a40.55 40.55 0 013.556-16.566l20.33-.038C106.634 323.151 104 329.023 104 335.5c0 12.958 10.542 23.5 23.5 23.5s23.5-10.542 23.5-23.5c0-6.509-2.661-12.407-6.951-16.667l20.332-.039A40.54 40.54 0 01168 335.499C168 357.832 149.832 376 127.5 376zm194.251-57.993a87.579 87.579 0 00-1.433 9.993h-137.83a55.592 55.592 0 00-2.073-9.235l1.2-.002c13.673-.025 23.984-11.331 23.984-26.299 0-16.229-5.401-32.675-14.819-45.119a62.683 62.683 0 00-7.572-8.345H208v32.5c0 21.78 17.72 39.5 39.5 39.5h72a7.456 7.456 0 004.436-1.462 86.48 86.48 0 00-2.185 8.469zM351.5 167h8.5v17h-8.5c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5zM327 301.213v-83.825c0-3.24 1.8-6.153 4.699-7.603l3.647-1.824 26.49 52.979c-15.314 9.401-27.63 23.404-34.836 40.273zM407.5 376c-22.332 0-40.5-18.168-40.5-40.5s18.168-40.5 40.5-40.5 40.5 18.168 40.5 40.5-18.168 40.5-40.5 40.5z"></path>
              <path d="M407.5 312c-12.958 0-23.5 10.542-23.5 23.5s10.542 23.5 23.5 23.5 23.5-10.542 23.5-23.5-10.542-23.5-23.5-23.5zm0 32c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"></path>
            </svg>
            <p>{t('delivery')}</p>
          </button>
          <button
            data-button="myself"
            type="button"
            className={`basket-delivery__btn ${
              deliveryMethod === 'myself' ? 'active-delivery-btn' : ''
            }`}
            onClick={handleClickAttribute}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.4 489.4"
              width="20"
              height="20">
              <path d="M347.7 263.75h-66.5c-18.2 0-33 14.8-33 33v51c0 18.2 14.8 33 33 33h66.5c18.2 0 33-14.8 33-33v-51c0-18.2-14.8-33-33-33zm9 84c0 5-4.1 9-9 9h-66.5c-5 0-9-4.1-9-9v-51c0-5 4.1-9 9-9h66.5c5 0 9 4.1 9 9v51z"></path>
              <path d="M489.4 171.05c0-2.1-.5-4.1-1.6-5.9l-72.8-128c-2.1-3.7-6.1-6.1-10.4-6.1H84.7c-4.3 0-8.3 2.3-10.4 6.1l-72.7 128c-1 1.8-1.6 3.8-1.6 5.9 0 28.7 17.3 53.3 42 64.2v211.1c0 6.6 5.4 12 12 12h381.3c6.6 0 12-5.4 12-12v-209.6c0-.5 0-.9-.1-1.3 24.8-10.9 42.2-35.6 42.2-64.4zM91.7 55.15h305.9l56.9 100.1H34.9l56.8-100.1zm256.6 124c-3.8 21.6-22.7 38-45.4 38s-41.6-16.4-45.4-38h90.8zm-116.3 0c-3.8 21.6-22.7 38-45.4 38s-41.6-16.4-45.5-38H232zm-207.2 0h90.9c-3.8 21.6-22.8 38-45.5 38-22.7.1-41.6-16.4-45.4-38zm176.8 255.2h-69v-129.5c0-9.4 7.6-17.1 17.1-17.1h34.9c9.4 0 17.1 7.6 17.1 17.1v129.5h-.1zm221.7 0H225.6v-129.5c0-22.6-18.4-41.1-41.1-41.1h-34.9c-22.6 0-41.1 18.4-41.1 41.1v129.6H66v-193.3c1.4.1 2.8.1 4.2.1 24.2 0 45.6-12.3 58.2-31 12.6 18.7 34 31 58.2 31s45.5-12.3 58.2-31c12.6 18.7 34 31 58.1 31 24.2 0 45.5-12.3 58.1-31 12.6 18.7 34 31 58.2 31 1.4 0 2.7-.1 4.1-.1v193.2zm-4.1-217.1c-22.7 0-41.6-16.4-45.4-38h90.9c-3.9 21.5-22.8 38-45.5 38z"></path>
            </svg>
            <p>{t('carry out')}</p>
          </button>
        </div>
        <div className="basket-block">
          <div
            className="spinner-position"
            style={loadingStatus === 'loading' ? { display: 'block' } : { display: 'none' }}>
            {loadingStatus === 'loading' ? <Spinner /> : null}
          </div>

          {deliveryMethod === 'delivery' ? <Delivery /> : <Myself />}

          <div className="basket-order">
            <div className="basket-order-wrap">
              <div className="basket-order__title">{t('your order')}</div>
              {deliveryMethod === 'delivery' && (
                <div className="basket-order__subtitle">{t('minimal price')}</div>
              )}

              <div className="basket-order__items">
                {items.length === 0 ? (
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: '600',
                      textAlign: 'center',
                      marginTop: '10px',
                    }}>
                    {t('nothing found')}
                  </div>
                ) : (
                  items.map((obj) => <CartItem key={obj.id} {...obj} />)
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="basket-reduce-sum">
          {t('total sum')}:
          <span>
            {totalPrice}.00 {t('uah')}
          </span>
        </div>

        <div className="btn-block ">
          <button className="btn-back btn-basket-position-left" onClick={goBack}>
            {t('return to the menu')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
