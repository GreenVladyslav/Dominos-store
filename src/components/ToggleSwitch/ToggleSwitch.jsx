import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import './switch.scss';

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const { t } = useTranslation();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-block">
      <label className="toggle-switch">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="toggle-switch-slider"></span>
      </label>
      <p className="toggle-text">{t('call me back')}</p>
    </div>
  );
}

export default ToggleSwitch;
