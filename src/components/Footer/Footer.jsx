import React from 'react';

import footerLogo from '../../assets/dominos-png.png';

import { useTranslation } from 'react-i18next';

import './footer.scss';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer__logo">
            <img
              className='"foooter__logo-size'
              src={footerLogo}
              alt="Dominos Pizza"
              style={{ width: '150px' }}
            />
            <div style={{ marginTop: '15px', fontSize: '18px' }}>{t('rights reserved')}</div>
          </div>

          <div className="footer__block">
            <h4 className="footer__title">{t('news')}</h4>
            <div className="footer__text">{t('career')}</div>
            <div className="footer__text">{t('franchising')}</div>
            <div className="footer__text">Domino's club</div>
          </div>

          <div className="footer__block">
            <h4 className="footer__title">{t('services')}</h4>
            <div className="footer__text">Pizza Tracker</div>
            <div className="footer__text">Pizza Disgner</div>
            <div className="footer__text">{t('payment support')}</div>
          </div>

          <div className="footer__block">
            <h4 className="footer__title">{t('useful information')}</h4>
            <div className="footer__text">{t('information on allergen')}</div>
            <div className="footer__text">{t('food safety policy')}</div>
          </div>

          <div className="footer__block">
            <h4 className="footer__title" style={{ fontSize: '20px' }}>
              0442221111
            </h4>
            <div className="footer__text" style={{ fontSize: '14px' }}>
              {t('mobile operators')}
            </div>
            <div className="footer__text">{t('no weekends from')}</div>
            <div className="footer__text">Info@dominos.ua</div>
            <div className="footer__text">{t('pizzerias')}</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-social">
          <div className="footer-social__icon">
            <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                stroke="null"
                fill="#fff"
                d="M22.582 2.355a1.487 1.487 0 00-1.178-.53c-.262 0-.54.055-.824.164L1.22 9.379c-1.027.393-1.166.98-1.156 1.296.008.316.18.896 1.228 1.23l.019.005 4.015 1.15L7.5 19.27c.296.846.96 1.372 1.734 1.372.488 0 .969-.203 1.388-.59l2.484-2.288 3.604 2.9.035.03.01.006c.4.312.838.476 1.263.476.835 0 1.5-.618 1.693-1.573l3.174-15.664c.127-.629.02-1.192-.301-1.584h-.001zM6.67 12.84l7.748-3.958-4.825 5.126a.668.668 0 00-.163.299l-.93 3.767-1.83-5.235v.001zm3.044 6.224a1.27 1.27 0 01-.097.08l.864-3.494 1.57 1.263-2.339 2.151h.002zM21.569 3.672l-3.17 15.665c-.03.15-.129.498-.38.498-.124 0-.28-.067-.439-.19l-4.082-3.286-.002-.003-2.43-1.956 6.977-7.412a.67.67 0 00-.792-1.056L5.773 11.793 1.705 10.63l19.353-7.39a.983.983 0 01.346-.076c.04 0 .114.007.14.038.036.045.08.193.025.47z"></path>
            </svg>
          </div>

          <div className="footer-social__icon">
            <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g stroke="null" fill="#fff">
                <path d="M16.262 0H6.66A6.666 6.69 0 000 6.681v9.637A6.666 6.69 0 006.658 23h9.604a6.666 6.69 0 006.659-6.681V6.683A6.666 6.69 0 0016.262 0zm4.868 16.319a4.873 4.89 0 01-4.868 4.884H6.66a4.873 4.89 0 01-4.868-4.884V6.683A4.873 4.89 0 016.66 1.797h9.603a4.873 4.89 0 014.869 4.885v9.637h-.002z"></path>
                <path d="M11.46 5.3a6.185 6.206 0 00-6.178 6.2 6.185 6.206 0 006.178 6.2 6.185 6.206 0 006.179-6.2 6.185 6.206 0 00-6.179-6.2zm0 10.602A4.393 4.408 0 017.074 11.5a4.393 4.408 0 014.386-4.402 4.393 4.408 0 014.387 4.402 4.393 4.408 0 01-4.387 4.402zm6.268-9.793a.895.898 0 100-1.797.895.898 0 000 1.797z"></path>
              </g>
            </svg>
          </div>

          <div className="footer-social__icon">
            <svg width="20" height="23" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                stroke="null"
                fill="#fff"
                d="M13.655 3.812h2.101V.152a27.14 27.14 0 00-3.062-.163c-3.031 0-5.106 1.906-5.106 5.41v3.223H4.244v4.093h3.344v10.296h4.1V12.715h3.21l.508-4.093h-3.718V5.805c0-1.182.32-1.992 1.967-1.992v-.001z"></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
