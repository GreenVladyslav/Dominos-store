import React from 'react';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, plusItem, removeItem } from '../../redux/slices/cartSlice';

import { useTranslation } from 'react-i18next';

import CountBtn from '../CountBtn/CountBtn';

import './pizzacard.scss';

function PizzaCard({ id, imgUrl, name, ingredients, sizes, dough, board, price, weights }) {
  const [activeSize, setActiveSize] = useState(0);
  const [activeTesto, setActiveTesto] = useState(0);
  const [activeBoard, setActiveBoard] = useState(0);
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
      ingredients,
      sizes: sizes[activeSize],
      dough: dough[activeTesto],
      board: board[activeBoard],
      price: price[activeSize],
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

  const renderIngredients = (arr) => {
    const newArr = arr.map((item) => `${t(item)}, `);
    const lastElement = newArr[newArr.length - 1].slice(0, -2);
    return [...newArr.slice(0, -1), lastElement];
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imgUrl} alt="pizza" />
        <div className="pizza-block__weight">
          {activeTesto === 1
            ? weights[activeSize] - 180
            : activeBoard === 1
            ? weights[activeSize] + 60
            : weights[activeSize]}
          {t('g')}*
        </div>
      </Link>

      <div className="pizza-block-wrap">
        <div style={{ height: '100px' }}>
          <h4 className="pizza-block__title">{t(name)}</h4>
          <div className="pizza-block__descr">{renderIngredients(ingredients)}</div>
        </div>

        <div className="pizza-block__sizes">
          <ul>
            {sizes.map((str, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveSize(index)}
                  className={activeSize === index ? 'active' : ''}>
                  {t(str)}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pizza-block__types">
          <h3 className="pizza-block__subtitle">{t('dough')}</h3>
          <ul>
            {dough.map((str, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveTesto(index)}
                  className={activeTesto === index ? 'active' : null}>
                  {t(str)}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pizza-block__types">
          <h3 className="pizza-block__subtitle">{t('crust')}</h3>
          <ul>
            {board.map((str, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveBoard(index)}
                  className={activeBoard === index ? 'active' : null}>
                  {t(str)}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pizza-block__bottom">
          <div className="pizza-block__price">
            {activeBoard === 0
              ? price[activeSize] + 60
              : activeBoard === 1
              ? price[activeSize] + 99
              : price[activeSize]}
            .00 {t('uah')}
          </div>
          <button
            className="pizza-block__button"
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

export default PizzaCard;
