import React from 'react';

import { setLoginForm } from '../../redux/slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import UserAvatar from '../../pages/UserProfile/UserAvatar';
import Login from '../Authorization/Login';
import SignUp from '../Authorization/SignUp';

const HeaderAuth = () => {
  const { email } = useSelector((state) => state.user);
  const { loginForm, registrationForm } = useSelector((state) => state.forms);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const token = localStorage.getItem('accessToken');

  return (
    <>
      {!email && !token ? (
        <button className="header-login__button" onClick={() => dispatch(setLoginForm(true))}>
          {t('login')}
        </button>
      ) : (
        <UserAvatar />
      )}
      {loginForm ? <Login /> : registrationForm ? <SignUp /> : null}
    </>
  );
};

export default HeaderAuth;
