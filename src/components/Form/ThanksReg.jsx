import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThanksPopup } from '../../redux/slices/formSlice';
import close from '../../assets/close.svg';

import { useClickOutside } from '../../hooks/useOutsideClick';

import useEscapeClose from '../../hooks/useEscapeClose';
import useCalcScroll from '../../hooks/useCalcScroll';

import './form.scss';

const ThanksReg = ({ textContent }) => {
  const popup = React.useRef();
  const overflow = React.useRef();

  const dispatch = useDispatch();
  const { thanksPopup } = useSelector((state) => state.forms);

  const handleClosePopup = () => {
    dispatch(setThanksPopup(false));
  };

  useClickOutside(popup, handleClosePopup);
  useEscapeClose(thanksPopup, handleClosePopup);
  useCalcScroll(thanksPopup);

  return (
    <div
      className="overflow"
      ref={overflow}
      style={thanksPopup ? { display: 'block' } : { display: 'none' }}>
      <div className="popup" ref={popup}>
        <div className="popup__content popup__content-thanks">
          <div className="popup__close" onClick={handleClosePopup}>
            <img src={close} alt="close" />
          </div>
          <p className="popup__text-content">{textContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ThanksReg;
