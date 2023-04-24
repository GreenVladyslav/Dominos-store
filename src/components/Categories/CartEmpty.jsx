import React from 'react';

import { useRef } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { activeEmptyPopup } from '../../redux/slices/cartSlice';

import CartEmptyPopup from './CartEmptyPopup';
import Hamburger from './Hamburger';

import { useClickOutside } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

import './categories.scss';

function CartEmpty() {
  const empty = useRef();
  const dispatch = useDispatch();
  const { items, emptyPopup } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
      console.log(json);
    }
    isMounted.current = true;
  }, [items]);

  const { t } = useTranslation();

  const openEmptyPopup = () => {
    if (totalCount === 0) {
      dispatch(activeEmptyPopup(!emptyPopup));
    } else {
      dispatch(activeEmptyPopup(false));
    }
  };

  const handleClosePopup = () => {
    dispatch(activeEmptyPopup(false));
  };

  useClickOutside(emptyPopup, empty, handleClosePopup);

  return (
    <div className="categories-cart">
      <div ref={empty} className="categories-cart-wrap" onClick={openEmptyPopup}>
        <div className="categories-cart__count">
          <span>{totalCount <= 9 ? `0${totalCount}` : totalCount}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 33 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.562 4.763a1.96 1.96 0 00-1.531-.732H4.689l-.19-1.366A1.977 1.977 0 002.548.97H.874a.875.875 0 000 1.75h1.673a.22.22 0 01.217.188l2.362 16.928a1.977 1.977 0 001.95 1.696h.948a2.628 2.628 0 002.475 3.5 2.628 2.628 0 002.474-3.5h4.676a2.628 2.628 0 002.474 3.5 2.628 2.628 0 002.475-3.5h1.9a.875.875 0 000-1.75H7.078a.22.22 0 01-.217-.188l-.218-1.562h17.232a1.98 1.98 0 001.925-1.556l2.157-10.062a1.96 1.96 0 00-.394-1.65zM11.375 22.406a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm9.625 0a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm5.245-16.36l-2.157 10.062a.22.22 0 01-.214.173H6.398l-1.465-10.5H26.03c.086 0 .14.044.17.081.03.038.062.1.044.184z"
              fill="#bababa"></path>
          </svg>
        </div>

        {totalCount < 1 ? (
          <button className="categories-cart__button">{t('order')}</button>
        ) : (
          <Link to="/cart">
            <button className="categories-cart__button">{t('order')}</button>
          </Link>
        )}
      </div>
      <CartEmptyPopup />
      <Hamburger />
    </div>
  );
}

export default CartEmpty;
