import React from 'react';

import './count.scss';

function CountBtn({ onClickMinusItem, onClickPlusItem, addedCount }) {
  return (
    <>
      <button onClick={onClickMinusItem} style={{ padding: '2px 6px 8px', cursor: 'pointer' }}>
        <svg width="11" height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.5h11" stroke="#000" strokeWidth="1.5"></path>
        </svg>
      </button>

      <span>{addedCount > 0 && addedCount}</span>
      <button onClick={onClickPlusItem} style={{ padding: '6px', cursor: 'pointer' }}>
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
    </>
  );
}

export default CountBtn;
