import React from 'react';

import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import './categories.scss';

function CartEmptyPopup() {
  const { emptyPopup } = useSelector((state) => state.cart);

  const { t } = useTranslation();

  return (
    <div
      className="categories-cart__empty"
      style={emptyPopup ? { display: 'block' } : { display: 'none' }}>
      <div className="categories-cart__empty-arrow"></div>
      <div className="categories-cart__empty-content">{t('basker empty')}</div>
    </div>
  );
}

export default CartEmptyPopup;
