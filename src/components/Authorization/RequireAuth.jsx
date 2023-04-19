import React from 'react';

import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  const token = localStorage.getItem('accessToken');

  if (!isAuth && !token) {
    return (
      <>
        <Navigate to="/login" state={{ from: location }} />;
      </>
    );
  }

  return children;
};

export default RequireAuth;

// RequireAuth, private
