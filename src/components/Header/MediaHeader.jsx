import React from 'react';

import Hamburger from '../Categories/Hamburger';
import MediaCategories from '../Categories/MediaCategories';
import MediaCartEmpty from '../Categories/MediaCartEmpty';

import CityButton from './CityButton';

import './mediaheader.scss';

const MediaHeader = () => {
  return (
    <div className="media-header">
      <div className="media-header__top">
        <Hamburger />
        <div className="media-header__middle">
          <svg width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M31.451 12.635l-8.282 8.282-10.537 10.537a1.873 1.873 0 01-2.657 0l-8.426-8.426a1.882 1.882 0 010-2.657l11.754-11.76 7.065-7.06A1.874 1.874 0 0121.7 1c.503 0 .977.198 1.331.552l8.42 8.42a1.89 1.89 0 010 2.663z"
              fill="#fff"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.858 12.04l-9.11 9.105-9.89-9.89 9.104-9.104a1.035 1.035 0 011.47 0l8.426 8.42a1.046 1.046 0 010 1.47zm-6.694-.76a2.43 2.43 0 00-.713-1.722 2.435 2.435 0 00-3.455 0 2.443 2.443 0 000 3.448c.48.474 1.104.714 1.728.714.623 0 1.247-.24 1.727-.714a2.443 2.443 0 00.713-1.727z"
              fill="#E41837"></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.246 11.861l9.896 9.896-9.104 9.103c-.204.204-.468.3-.738.3-.264 0-.527-.096-.731-.3l-8.42-8.426a1.035 1.035 0 010-1.469l9.097-9.104zm-1.097 9.8a2.43 2.43 0 00-.714-1.722 2.419 2.419 0 00-1.727-.713c-.624 0-1.247.234-1.721.713a2.409 2.409 0 00-.714 1.728c0 .617.234 1.247.714 1.72a2.43 2.43 0 001.721.715c.624 0 1.247-.24 1.727-.714a2.444 2.444 0 00.714-1.727zm2.279.102c0 .623.24 1.247.72 1.72a2.43 2.43 0 001.72.715c.624 0 1.248-.24 1.728-.714a2.443 2.443 0 000-3.448 2.454 2.454 0 00-1.727-.714 2.43 2.43 0 00-1.721.713c-.48.48-.72 1.104-.72 1.728z"
              fill="#0078AD"></path>
            <path
              d="M16.44 30.476v-1.193H16V29h1.178v.283h-.424v1.193h-.314zM18.654 30.476v-1.068l-.408 1.068h-.141l-.409-1.068v1.068h-.314V29h.44l.345.927.362-.927h.44v1.476h-.315z"
              fill="#0078AD"></path>
          </svg>
          <CityButton />
        </div>
        <MediaCartEmpty />
      </div>
      <div className="media-header__bottom">
        <MediaCategories />
      </div>
    </div>
  );
};

export default MediaHeader;
