import React from 'react';

import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import './userprofile.scss';
import BackBtn from '../../components/BackBtn';

const UserProfile = () => {
  const { email, userData } = useSelector((state) => state.user);

  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="user">
        <h2 className="user__title">{t('profile')}</h2>
        <div className="user-block"></div>
        <div className="user__info">
          <div>
            <span>{t('yourname')}:</span> {userData.name}
          </div>
          <div>
            <span>{t('your email')}:</span> {email}
          </div>
          <div>
            <span>{t('your phone')}:</span> {userData.mobile}
          </div>
          <div>
            <span>{t('your gender')}:</span> {userData.gender}
          </div>
          <div>{t('thanksforreg')}</div>
        </div>
      </div>

      <BackBtn />
    </div>
  );
};

export default UserProfile;
