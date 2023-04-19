import React from 'react';

import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  console.log({ match });

  return (
    <Link
      to={to}
      style={{
        color: match ? 'var(--color-active)' : 'white',
      }}
      {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;

// кастомный хук (все что бы пользователь не написал будет внутри нашей ссылки)
// Link может лежать в чем угодно
