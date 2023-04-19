import React from 'react';

import { useState, useEffect } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, plusItem, removeItem } from '../../redux/slices/cartSlice';
import { fetchById } from '../../redux/slices/singlePageSlice';

import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

import CountBtn from '../../components/CountBtn/CountBtn';
import BackBtn from '../../components/BackBtn';

import { useTranslation } from 'react-i18next';

import './singlepage.scss';

const SinglePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentUrl = location.pathname.match(/[a-zA-Z]+/g)[0];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const [activeBtn, setActiveBtn] = useState(false);

  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = productItem ? productItem.count : 0;

  const { itemsId, loadingStatus } = useSelector((state) => state.getById);

  const { imgUrl, name, sizes, price } = itemsId;

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchById({ currentUrl, id }));
  }, [dispatch, currentUrl, id]);

  const onClickAddItem = () => {
    const newItem = {
      id: id,
      imgUrl: imgUrl,
      name: name,
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

  const renderItems = (object) => {
    return (
      <div className="single-product-wrap">
        <div className="single-product__left">
          <img className="single-product__image" src={imgUrl} alt={name} />
          {object.weight && (
            <div className="single-product__weight">
              {object.weight[activeIndex]} {t('g')}*
            </div>
          )}
        </div>
        <div className="single-product__right">
          <h4 className="single-product__title">{t(name)}</h4>

          <div className="single-product__sizes">
            <span>{t('size')}:</span>

            <ul>
              {sizes &&
                sizes.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={activeIndex === index ? 'active' : ''}
                      onClick={() => setActiveIndex(index)}>
                      {typeof item === 'number'
                        ? String(item).split('').length > 1
                          ? `${item} ${t('ml')}`
                          : `${item} ${t('l')}`
                        : `${t(item)}`}
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* <div className="single-product__types">
            <h3 className="single-product__subtitle">Тісто</h3>
            <ul>
              {dough.map((str, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveTesto(index)}
                    className={activeTesto === index ? 'active' : null}>
                    {str}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="single-product__types">
            <h3 className="single-product__subtitle">Борт</h3>
            <ul>
              {board.map((str, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveBoard(index)}
                    className={activeBoard === index ? 'active' : null}>
                    {str}
                  </li>
                );
              })}
            </ul>
          </div> */}

          <div className="single-product__bottom">
            <div className="single-product__price">
              <span>{t('total')}:</span>
              {price && currPrice}
              .00 {t('uah')}
            </div>
            <div className="single-product__buttons">
              <button
                className="single-product__button"
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
                style={activeBtn ? { display: 'flex', width: '100%' } : { display: 'none' }}>
                <CountBtn
                  onClickPlusItem={onClickPlusItem}
                  onClickMinusItem={onClickMinusItem}
                  addedCount={addedCount}
                />
              </div>

              <BackBtn />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const elements = renderItems(itemsId);

  const errorMessage = loadingStatus === 'error' ? <ErrorMessage /> : null;
  const spinner = loadingStatus === 'loading' ? <Spinner /> : null;
  const content = errorMessage || spinner || elements;

  return (
    <div className="container">
      <div className="single-product">{content}</div>
    </div>
  );
};

export default SinglePage;
