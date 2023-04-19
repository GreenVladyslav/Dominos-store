import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setSideBar } from '../../redux/slices/filtersSlice';

import { useClickOutside } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

import LngDropDown from '../Header/LngDropDown';
import HeaderAuth from '../Header/HeaderAuth';
import CityButton from '../Header/CityButton';

import './mediasidebar.scss';

function MediaSideBar() {
  const side = useRef();

  const dispatch = useDispatch();
  const { activeSideBar } = useSelector((state) => state.filters);
  const { email } = useSelector((state) => state.user);

  const { t } = useTranslation();

  const closeSideBar = () => {
    dispatch(setSideBar(false));
  };

  useClickOutside(side, closeSideBar);

  const activeClass = activeSideBar ? 'sidebar active' : 'sidebar';

  return (
    <div ref={side} className={activeClass}>
      <div className="sidebar__block">
        <div className="sidebar__block-header">
          <div className="sidebar__block-header-top">
            <Link className="sidebar__block-header-right" to="/">
              <svg viewBox="0 0 204 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.066 8.983L21.756.562A1.854 1.854 0 0020.434 0a1.833 1.833 0 00-1.322.562l-6.955 7.065L.551 19.385A1.888 1.888 0 000 20.725a1.908 1.908 0 00.551 1.34l8.314 8.408a1.854 1.854 0 001.322.562 1.834 1.834 0 001.322-.562L21.895 19.93l8.171-8.285a1.882 1.882 0 00.546-1.331 1.902 1.902 0 00-.546-1.332z"
                  fill="#fff"></path>
                <path
                  d="M29.481 9.583l-8.316-8.425a1.021 1.021 0 00-1.451 0l-8.991 9.112 9.78 9.892 8.978-9.099a1.044 1.044 0 00.305-.74 1.054 1.054 0 00-.305-.74zm-7.325 2.435a2.385 2.385 0 01-3.043.306 2.44 2.44 0 01-.968-1.32 2.473 2.473 0 01.079-1.644 2.43 2.43 0 011.09-1.22 2.382 2.382 0 011.606-.242 2.4 2.4 0 011.393.846c.354.436.547.984.547 1.549a2.453 2.453 0 01-.704 1.725z"
                  fill="#E31837"></path>
                <path
                  d="M1.14 19.981a1.05 1.05 0 000 1.47l8.313 8.426a1.023 1.023 0 00.725.305 1.012 1.012 0 00.726-.305l8.984-9.099-9.764-9.902-8.985 9.105zm7.199 2.425a2.386 2.386 0 01-3.043.306 2.44 2.44 0 01-.968-1.32 2.473 2.473 0 01.078-1.644 2.43 2.43 0 011.09-1.22 2.381 2.381 0 011.607-.242c.546.11 1.039.409 1.393.846a2.462 2.462 0 01.364 2.483c-.12.296-.298.565-.521.791zM12 19.056a2.378 2.378 0 013.035-.297c.462.315.802.781.962 1.32.16.54.131 1.119-.082 1.64-.214.52-.6.948-1.09 1.213a2.375 2.375 0 01-1.602.238 2.398 2.398 0 01-1.387-.846 2.465 2.465 0 01.164-3.27v.002z"
                  fill="#006491"></path>
                <path
                  d="M15.076 30.128v-1.34H14.6v-.305h1.296v.308h-.473v1.34l-.347-.003zm2.453 0v-1.186l-.463 1.186h-.149l-.456-1.186v1.186h-.347v-1.645h.482l.394 1.028.396-1.028h.473v1.645h-.33zM43.906 9.581h-6.93a.414.414 0 00-.415.418v15.598a.41.41 0 00.414.412h6.954c5.46 0 8.99-3.239 8.99-8.226 0-4.986-3.536-8.202-9.013-8.202zm0 12.098h-2.367v-7.772h2.39c2.468 0 3.941 1.445 3.941 3.867a3.804 3.804 0 01-3.964 3.886m39.734-7.84a5.12 5.12 0 00-4.16 2.098c-.51-1.389-1.662-2.092-3.424-2.092-1.943 0-3.427.972-3.941 1.649v-.94a.414.414 0 00-.415-.414h-3.608a.41.41 0 00-.411.415v11.061a.41.41 0 00.411.412H71.7a.415.415 0 00.415-.412v-6.926a2.301 2.301 0 011.797-.933c.874 0 1.354.473 1.354 1.331v6.528a.415.415 0 00.414.412h3.605a.415.415 0 00.418-.412v-6.926a2.293 2.293 0 011.82-.936c.861 0 1.357.486 1.357 1.33v6.532a.413.413 0 00.414.412H86.9a.415.415 0 00.414-.412v-8.205c0-2.306-1.295-3.562-3.672-3.562m9.498.285h-3.598a.413.413 0 00-.418.414v11.069a.412.412 0 00.418.41h3.604a.414.414 0 00.415-.41v-11.07a.414.414 0 00-.415-.414m-1.7-5.838a2.49 2.49 0 10-.007 4.98 2.49 2.49 0 00.007-4.98zm12.507 5.544c-2.296 0-3.546 1.033-4.087 1.648v-.939a.415.415 0 00-.414-.415h-3.605a.415.415 0 00-.414.415v11.068a.414.414 0 00.414.412h3.605a.411.411 0 00.414-.412v-6.926a2.378 2.378 0 011.898-.936c1.143 0 1.723.573 1.723 1.697v6.152a.41.41 0 00.256.381c.05.02.104.031.159.03h3.604a.418.418 0 00.293-.119.406.406 0 00.122-.292v-8.02c0-2.345-1.48-3.744-3.968-3.744zm-43.883-.055a6.28 6.28 0 100 12.56 6.28 6.28 0 000-12.56zm0 8.332a2.144 2.144 0 11-.007-4.287 2.144 2.144 0 01.007 4.287zm55.445-8.313a6.282 6.282 0 00-5.798 3.882 6.282 6.282 0 001.367 6.84 6.28 6.28 0 106.836-10.247 6.28 6.28 0 00-2.405-.475zm0 8.332a2.144 2.144 0 110-4.287 2.144 2.144 0 010 4.287zm9.651-11.884a2.55 2.55 0 00-2.954-1.859 2.41 2.41 0 00-1.959 2.782 2.344 2.344 0 002.205 1.823 1.533 1.533 0 01-.754.971.252.252 0 00-.085.344l.276.408a.266.266 0 00.343.149c2.795-1.127 3.252-3.514 2.928-4.618zm3.294 7.422c0-.444.563-.648 1.295-.648a5.155 5.155 0 013.168 1.014.408.408 0 00.586-.143l1.218-2.114a.422.422 0 00.04-.31.421.421 0 00-.186-.25 9.026 9.026 0 00-5.01-1.367c-3.67 0-5.635 1.726-5.305 4.21.576 4.368 7.352 2.872 7.245 4.349-.023.346-.625.602-1.662.602-1.344 0-2.869-.674-3.834-1.27a.407.407 0 00-.324-.048.418.418 0 00-.259.198l-1.406 2.34a.415.415 0 00.13.551c1.35.91 3.53 1.522 5.421 1.522 3.673 0 5.791-1.577 5.791-4.167 0-4.783-6.885-3.3-6.915-4.482m35.071 7.94a.414.414 0 00.415.415h9.482a.41.41 0 00.415-.415V22.58a.414.414 0 00-.415-.412h-4.006s3.446-3.934 4.061-4.63a1.19 1.19 0 00.389-.913v-2.076a.417.417 0 00-.414-.415h-9.512a.413.413 0 00-.415.415v3.005a.41.41 0 00.256.38.413.413 0 00.159.031h4.077l-4.242 4.858a1.15 1.15 0 00-.25.757v2.001zm11.84 0a.414.414 0 00.415.415h9.489a.403.403 0 00.415-.415V22.58a.408.408 0 00-.259-.38.416.416 0 00-.159-.03h-3.987s3.407-3.938 4.026-4.631a1.2 1.2 0 00.385-.914v-2.06a.413.413 0 00-.414-.414h-9.512a.415.415 0 00-.399.398v3.006a.409.409 0 00.257.38c.05.021.104.031.158.031h4.077l-4.239 4.857a1.138 1.138 0 00-.253.758v2.001zm17.829-3.254a2.374 2.374 0 01-2.187-1.465 2.367 2.367 0 01.514-2.582 2.375 2.375 0 012.582-.514 2.367 2.367 0 011.465 2.187 2.374 2.374 0 01-2.374 2.374zm6.393-8.222h-3.604a.413.413 0 00-.415.414v.7a5.247 5.247 0 00-3.562-1.431c-3.1 0-5.61 2.81-5.61 6.279 0 3.468 2.51 6.275 5.61 6.275a5.255 5.255 0 003.562-1.428v.67a.409.409 0 00.256.381c.051.02.104.031.159.03h3.604a.412.412 0 00.415-.41V14.518a.414.414 0 00-.415-.414zm-37.976.029h-3.595a.42.42 0 00-.414.415v11.036a.416.416 0 00.414.411h3.595a.41.41 0 00.383-.253.409.409 0 00.032-.158V14.549a.414.414 0 00-.415-.415zm-1.791-5.819a2.482 2.482 0 00-1.754 4.234 2.482 2.482 0 004.235-1.754 2.487 2.487 0 00-2.481-2.48zm-10.503 9.245h-.906v-3.737h.936c1.852 0 2.38.91 2.38 1.749 0 1.026-.46 1.988-2.41 1.988zm4.641-6.71c-1.519-1.052-3.08-1.295-5.531-1.295l-4.609.02a.393.393 0 00-.388.391v15.638a.393.393 0 00.391.392h4.194a.396.396 0 00.396-.392v-3.931c2.15 0 4.333-.023 5.949-1.422 1.127-.971 1.972-2.545 1.972-4.673 0-1.645-.839-3.669-2.374-4.727zm47.87 5.716a1.236 1.236 0 01-.878-2.112 1.236 1.236 0 011.905.19 1.238 1.238 0 01-1.027 1.922zm0-2.283a1.054 1.054 0 00-.957.657 1.048 1.048 0 101.941-.005 1.046 1.046 0 00-.578-.564 1.04 1.04 0 00-.406-.072v-.016zm.324 1.761l-.366-.56h-.246v.56h-.197v-1.421h.579a.436.436 0 01.323.117.442.442 0 01.14.313.415.415 0 01-.362.421l.379.567-.25.003zm-.23-1.237h-.379v.502h.379a.251.251 0 00.281-.25.245.245 0 00-.022-.104.257.257 0 00-.259-.148z"
                  fill="#F8F8F8"></path>
              </svg>
            </Link>

            <div className="sidebar__block-header-left">
              <LngDropDown />
              <div className="sidebar__close" onClick={closeSideBar}>
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 1014 1014"
                  fill="#ffffff"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
                    fill=""
                  />
                  <path
                    d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
                    fill=""
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="sidebar__block-header-bottom">
            <div className={email ? 'sidebar__block-header-bottom__city' : ''}>
              <CityButton />
            </div>
            <div className={email ? 'sidebar__block-header-bottom__auth' : ''}>
              <HeaderAuth />
            </div>
          </div>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            <li className="sidebar__list-item">
              <NavLink
                className="sidebar__list-link"
                to="/sets"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                onClick={closeSideBar}>
                Redirect
              </NavLink>
            </li>

            <li className="sidebar__list-item">
              <NavLink
                className="sidebar__list-link"
                to="/pizza"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                onClick={closeSideBar}>
                {t('pizza')}
              </NavLink>
            </li>

            <li className="sidebar__list-item">
              <NavLink
                className="sidebar__list-link"
                to="/drinks"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                onClick={closeSideBar}>
                {t('drinks')}
              </NavLink>
            </li>

            <li className="sidebar__list-item">
              <NavLink
                className="sidebar__list-link"
                to="/sides"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                onClick={closeSideBar}>
                {t('sides')}
              </NavLink>
            </li>

            <li className="sidebar__list-item">
              <NavLink
                className="sidebar__list-link"
                to="/desserts"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                onClick={closeSideBar}>
                {t('desserts')}
              </NavLink>
            </li>
          </ul>

          <ul className="page__list">
            <li className="sidebar__list-item" style={{ gap: '10px' }}>
              <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.448 0c.006.006.018.006.037.006 6.236 0 11.308 5.072 11.308 11.308 0 2.545-.869 5.016-2.459 7.007l1.646 3.82a.613.613 0 01-.32.808.626.626 0 01-.352.043l-6.033-1.06c-1.208.437-2.477.66-3.76.653C5.28 22.585.209 17.513.209 11.277.195 5.06 5.23.007 11.448 0zm.062 21.359a9.889 9.889 0 003.481-.635.59.59 0 01.327-.03l5.078.887-1.344-3.125a.62.62 0 01.099-.647 9.852 9.852 0 001.713-2.847c.456-1.164.69-2.403.69-3.654 0-5.558-4.523-10.076-10.075-10.076C5.939 1.22 1.44 5.7 1.434 11.24v.037c0 5.565 4.523 10.082 10.076 10.082z"
                  fill="#FE0021"></path>
                <path
                  d="M11.99 9.04h3.327c.34 0 .617.278.617.617a.618.618 0 01-.617.616H11.99a.618.618 0 01-.617-.616c0-.34.278-.617.617-.617zm-4.314 3.081h7.641c.34 0 .617.278.617.617a.618.618 0 01-.617.616H7.676a.618.618 0 01-.616-.616c0-.34.277-.617.616-.617z"
                  fill="#FE0021"></path>
              </svg>

              <NavLink
                className="sidebar__list-link"
                to="/pizzatracker"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                onClick={closeSideBar}>
                PIZZA TRACKER
              </NavLink>
            </li>

            <li className="sidebar__list-item">
              <NavLink
                className="sidebar__list-link"
                to="/news"
                style={({ isActive }) => ({ color: isActive ? '#fe0021' : 'inherit' })}
                onClick={closeSideBar}>
                {t('news')}
              </NavLink>
            </li>

            <li className="sidebar__list-item disab">{t('pizzerias')}</li>
            <li className="sidebar__list-item disab">{t('work and career')}</li>
            <li className="sidebar__list-item disab">{t('franchising')}</li>
            <li className="sidebar__list-item disab">{t('pizza maker')}</li>
            <li className="sidebar__list-item disab">DOMINO'S CLUB</li>
            <li className="sidebar__list-item disab">{t('leave a review')}</li>
          </ul>
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__divider"></div>
          <div className="sidebar__footer-block">
            <p className="sidebar__footer-title-mt">{t('call us')}:</p>
            <h4 className="sidebar__footer-title" style={{ fontSize: '20px' }}>
              0442221111
            </h4>
            <div className="sidebar__footer-text" style={{ fontSize: '14px' }}>
              {t('mobile operators')}
            </div>
            <div className="sidebar__footer-text">{t('no weekends from')}</div>
            <div className="sidebar__footer-text">Info@dominos.ua</div>
            <div className="sidebar__footer-text">{t('pizzerias')}</div>
          </div>

          <div className="sidebar__footer-block">
            <h4 className="sidebar__footer-title-mt">{t('useful information')}</h4>
            <div className="sidebar__footer-text">{t('information on allergen')}</div>
            <div className="sidebar__footer-text">{t('food safety policy')}</div>
          </div>

          <div className="sidebar__divider"></div>
          <div className="sidebar__footer-title-center">{t('fallow')}</div>
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
      </div>
    </div>
  );
}

export default MediaSideBar;
