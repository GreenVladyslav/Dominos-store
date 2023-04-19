import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import '../payment.scss';

function TimeSelect() {
  const [selectedTime, setSelectedTime] = useState('');

  const { t } = useTranslation();

  // Get the current time
  const today = new Date();
  const currentHour = today.getHours();
  const currentMinute = Math.floor(today.getMinutes() / 15) * 15;

  // Create an array of options for the select element
  const options = [];

  const zeroNum = (num) => {
    if (num <= 9) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  // Add an option element for the current time
  const currentOption = (
    <option key="current" value="Найближчим часом" className="order__option">
      {t('soon')}
    </option>
  );

  options.push(currentOption);

  for (let i = 1; i < 21; i++) {
    // Calculate the time
    const hour = Math.floor((currentHour + (i * 15) / 60) % 24);
    const minute = (currentMinute + i * 15) % 60;

    // Create the option element and add it to the array
    const optionElement = (
      <option key={`${hour}:${minute}`} value={`${hour}:${minute}`} className="order__option">
        {`${zeroNum(hour)}:${zeroNum(minute)}`}
      </option>
    );
    options.push(optionElement);
  }

  // Handle the select element's onChange event
  function handleSelectChange(event) {
    setSelectedTime(event.target.value);
  }

  return (
    <div>
      <label className="order__label" htmlFor="time-select">
        {t('time')}
      </label>
      <select
        id="time-select"
        className="order__select"
        value={selectedTime}
        onChange={handleSelectChange}>
        {options}
      </select>
    </div>
  );
}

export default TimeSelect;
