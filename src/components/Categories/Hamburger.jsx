import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSideBar } from '../../redux/slices/filtersSlice';

import './categories.scss';

const Hamburger = () => {
  const dispatch = useDispatch();
  const { activeSideBar } = useSelector((state) => state.filters);

  const toggleSideBar = () => {
    dispatch(setSideBar(!activeSideBar));
  };

  return (
    <button className="categories-cart__burger" onClick={toggleSideBar}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
