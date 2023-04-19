import React from 'react';

import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, plusItem, removeItem } from '../../redux/slices/cartSlice';

import { useTranslation } from 'react-i18next';

import CountBtn from '../CountBtn/CountBtn';

import './productcard.scss';

function ProductCard({ id, imgUrl, name, price, sizes, weight }) {
  const location = useLocation();
  const currentUrl = location.pathname.match(/[a-zA-Z]+/g)[0];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const [activeBtn, setActiveBtn] = useState(false);

  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = productItem ? productItem.count : 0;

  const { t } = useTranslation();

  const onClickAddItem = () => {
    const newItem = {
      id,
      imgUrl,
      name,
      price: currPrice,
      sizes: sizes[activeIndex],
    };

    dispatch(addItem(newItem));
  };

  const activeCount = () => {
    setActiveBtn(true);
    onClickAddItem();
  };

  const onClickPlusItem = () => {
    dispatch(
      plusItem({
        id,
      }),
    );
  };

  const onClickMinusItem = () => {
    if (addedCount <= 1) {
      setActiveBtn(false);
      dispatch(removeItem(id));
    } else {
      dispatch(minusItem(id));
    }
  };

  const currPrice = Array.isArray(price) ? price[activeIndex] : price;

  return (
    <div className="product-block">
      <Link to={`/${currentUrl}/${id}`}>
        <img className="product-block__image" src={imgUrl} alt={name} />
        {/* <div
          className="product-block__weight"
          style={weight ? { display: 'block' } : { display: 'none' }}>
          {volume} г*
        </div> */}
        {/* {weight ? <div className="product-block__weight">{volume} г*</div> : null} */}
        {weight && (
          <div className="product-block__weight">
            {weight[activeIndex]} {t('g')}*
          </div>
        )}
      </Link>

      <div className="product-block-wrap">
        <div style={{ height: '45px' }}>
          <h4 className="product-block__title">
            {t(name).length > 40 ? t(name).slice(0, 35) + ' ...' : t(name)}
          </h4>
        </div>
        <div className="product-block__sizes">
          <ul>
            {sizes.map((item, index) => {
              return (
                <li
                  key={index}
                  className={activeIndex === index ? 'active' : ''}
                  onClick={() => setActiveIndex(index)}>
                  {typeof item === 'number'
                    ? String(item).length > 1
                      ? `${item} ${t('ml')}`
                      : `${item} ${t('l')}`
                    : `${t(item)}`}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="product-block__bottom">
          <div className="product-block__price">
            {currPrice}
            .00 {t('uah')}
          </div>
          <button
            className="product-block__button"
            onClick={activeCount}
            style={activeBtn ? { display: 'none' } : { display: 'flex' }}>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M27.562 4.763a1.96 1.96 0 00-1.531-.732H4.689l-.19-1.366A1.977 1.977 0 002.548.97H.874a.875.875 0 000 1.75h1.673a.22.22 0 01.217.188l2.362 16.928a1.977 1.977 0 001.95 1.696h.948a2.628 2.628 0 002.475 3.5 2.628 2.628 0 002.474-3.5h4.676a2.628 2.628 0 002.474 3.5 2.628 2.628 0 002.475-3.5h1.9a.875.875 0 000-1.75H7.078a.22.22 0 01-.217-.188l-.218-1.562h17.232a1.98 1.98 0 001.925-1.556l2.157-10.062a1.96 1.96 0 00-.394-1.65zM11.375 22.406a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm9.625 0a.876.876 0 01-1.75 0 .876.876 0 011.75 0zm5.245-16.36l-2.157 10.062a.22.22 0 01-.214.173H6.398l-1.465-10.5H26.03c.086 0 .14.044.17.081.03.038.062.1.044.184z"
                fill="#fff"></path>
            </svg>
            <span>{t('add')}</span>
          </button>

          <div
            className="pizza-block__buttons"
            style={activeBtn ? { display: 'flex' } : { display: 'none' }}>
            <CountBtn
              onClickPlusItem={onClickPlusItem}
              onClickMinusItem={onClickMinusItem}
              addedCount={addedCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
