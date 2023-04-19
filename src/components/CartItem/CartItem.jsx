import { useDispatch } from 'react-redux';
import { plusItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import { useTranslation } from 'react-i18next';

import './cartitem.scss';

const CartItem = ({ id, imgUrl, name, ingredients, sizes, dough, board, price, count }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onClickPlusItem = () => {
    dispatch(
      plusItem({
        id,
      }),
    );
  };

  const onClickMinusItem = () => {
    if (count <= 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(minusItem(id));
    }
  };

  const number =
    typeof sizes === 'number'
      ? sizes === 1
        ? `${t(sizes)} ${t('l')} ${t(name)}`
        : `${t(sizes)} ${t('ml')} ${t(name)}`
      : '';

  const string =
    typeof sizes === 'string'
      ? (dough && board) === undefined
        ? `${t(sizes)} ${t(name)}`
        : `${t(sizes)} ${t(dough)} ${t(board)}`
      : '';

  const renderIngredients = (arr) => {
    const newArr = arr.map((item) => `${t(item)}, `);
    const lastElement = newArr[newArr.length - 1].slice(0, -2);
    return [...newArr.slice(0, -1), lastElement];
  };

  return (
    <div className="cart__item">
      <div className="cart__item-wrap">
        <div className="cart__item-img">
          <img src={imgUrl} alt={name} />
        </div>
        <div className="cart__item-content">
          <h3 className="cart__item-title">
            {t(name).length > 40 ? t(name).slice(0, 35) + ' ...' : t(name)}
          </h3>
          <p className="cart__item-descr">{ingredients ? renderIngredients(ingredients) : null}</p>
          <p className="cart__item-size">{`${number} ${string}`}</p>
          <div className="cart__item-info">
            <div className="cart__item-count">
              <button
                style={{ padding: '2px 6px 8px', cursor: 'pointer' }}
                onClick={onClickMinusItem}>
                <svg width="11" height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.5h11" stroke="#000" strokeWidth="1.5"></path>
                </svg>
              </button>

              <span>{count}</span>
              <button style={{ padding: '6px', cursor: 'pointer' }} onClick={onClickPlusItem}>
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000"
                  height="11"
                  width="11">
                  <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1.5"></path>
                </svg>
              </button>
            </div>
            <div className="cart__item-price">
              {price * count}.00 {t('uah')}
            </div>
            <button className="cart__item-garbage" onClick={() => dispatch(removeItem(id))}>
              <svg
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17">
                <g fill="#7E7E7E">
                  <path d="M10.845 6.16a.398.398 0 00-.398.397v7.525a.398.398 0 00.796 0V6.557a.398.398 0 00-.398-.398zm-4.698 0a.398.398 0 00-.398.397v7.525a.398.398 0 00.796 0V6.557a.398.398 0 00-.398-.398z"></path>
                  <path d="M2.723 5.06v9.81c0 .58.213 1.124.584 1.515.37.391.884.614 1.423.615h7.532a1.96 1.96 0 001.423-.615c.371-.391.584-.935.584-1.515V5.06a1.52 1.52 0 00-.39-2.99H11.84v-.498A1.564 1.564 0 0010.264 0H6.728a1.564 1.564 0 00-1.576 1.572v.498H3.113a1.521 1.521 0 00-.39 2.99zm9.54 11.143H4.73c-.681 0-1.21-.584-1.21-1.333V5.096h9.952v9.774c0 .749-.529 1.333-1.21 1.333zM5.947 1.573a.766.766 0 01.78-.777h3.536a.767.767 0 01.78.776v.498H5.948v-.498zM3.113 2.865H13.88a.717.717 0 110 1.434H3.113a.717.717 0 110-1.434z"></path>
                  <path d="M8.496 6.16a.398.398 0 00-.398.397v7.525a.398.398 0 00.796 0V6.557a.398.398 0 00-.398-.398z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
