import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setLoginForm } from '../../redux/slices/formSlice';
import { removeUser } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';

import { useClickOutside } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

import './useravatar.scss';

const UserAvatar = () => {
  const refUser = React.useRef();
  const [acitveProfile, setActiveProfile] = React.useState(false);

  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user.userData);

  const { t } = useTranslation();

  const toggleActiveProfile = () => {
    setActiveProfile(!acitveProfile);
  };

  const hadleCloseProfile = () => {
    setActiveProfile(false);
  };

  useClickOutside(acitveProfile, refUser, hadleCloseProfile);

  React.useEffect(() => {
    dispatch(setLoginForm(false));
  }, [dispatch]);

  const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
  };

  return (
    <div className="header-login">
      <div className="user-auth">
        <div className="user-auth__avatar">
          <span>{name ? name.slice(0, 1) : 'К'}</span>
        </div>
        <button className="user-auth-wrap" onClick={toggleActiveProfile}>
          <div className="user-auth__title">
            {name ? (name.length > 8 ? name.slice(0, 9) : name) : 'Користувач'}
            <svg
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              height="12px">
              <path
                d="M1 1l5 5 5-5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </svg>
          </div>
          <div className="user-auth__subtitle">0 {t('bonus')}</div>
        </button>

        <div
          ref={refUser}
          className="drop-down-menu drop-down-menu-avatar"
          style={acitveProfile ? { display: 'block' } : { display: 'none' }}>
          <div className="drop-down-menu-wrap">
            <Link className="drop-down-menu__link" style={{ fontWeight: '500' }} to="/profile">
              {t('profile')}
            </Link>
            <Link
              className="drop-down-menu__link"
              style={{ fontWeight: '500' }}
              onClick={() => {
                dispatch(removeUser());
                removeAccessToken();
              }}
              to="/">
              {t('logout')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
