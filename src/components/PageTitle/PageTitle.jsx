import React from 'react';

import { useSelector } from 'react-redux';

import './pageTitle.scss';

function PageTitle({ pageTitle }) {
  const { inputValue } = useSelector((state) => state.filters);

  return <>{!inputValue && <div className="page-title">{pageTitle}</div>}</>;
}

export default PageTitle;
