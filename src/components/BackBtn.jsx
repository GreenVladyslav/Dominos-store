import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const BackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  // const goMain = () => navigate('/', replace(true), {state: 'ты здесь был'});

  const { t } = useTranslation();
  return (
    <button onClick={goBack} className="btn-back">
      {t('return one step')}
    </button>
  );
};

export default BackBtn;
