import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import '../payment.scss';

function DaySelect() {
  const [selectedDay, setSelectedDay] = useState('Сьогодні');

  const { t } = useTranslation();

  // Get the current date and day of the week
  const today = new Date();
  const dayofweek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const daysOfWeek = dayofweek.map((item) => t(item));
  const dayOfWeekNum = today.getDay();
  const currentMonth = today.getMonth() + 1;

  const zeroNum = (num) => {
    if (num <= 9) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  // Create an array of options for the select element
  const options = [];

  // Add an option element for "Сьогодні"
  const todayOption = (
    <option key="today" value="Сьогодні" className="order__option">
      {t('today')}
    </option>
  );
  options.push(todayOption);

  for (let i = 1; i < 8; i++) {
    // Calculate the day of the week
    const dayOfWeekIndex = (dayOfWeekNum + i) % 7; // Ensure index wraps around if greater than 6
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];

    // Calculate the day of the month
    const dayOfMonth = today.getDate() + i;

    // Create the option element and add it to the array
    const optionElement = (
      <option key={zeroNum(dayOfWeek)} value={dayOfWeek} className="order__option">
        {zeroNum(dayOfMonth)}.{zeroNum(currentMonth)} {dayOfWeek}
      </option>
    );
    options.push(optionElement);
  }

  // Handle the select element's onChange event
  function handleSelectChange(event) {
    setSelectedDay(event.target.value);
  }

  return (
    <div>
      <label className="order__label" htmlFor="day-select">
        {t('date')}
      </label>
      <select
        id="day-select"
        className="order__select"
        value={selectedDay}
        onChange={handleSelectChange}>
        {options}
      </select>
    </div>
  );
}

export default DaySelect;
