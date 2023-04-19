import React from 'react';

import { useDispatch } from 'react-redux';
import { setLoginForm } from '../../redux/slices/formSlice';

import { useNavigate, useLocation } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import FormLogin from '../Form/FormLogin';

import { setUser } from '../../redux/slices/userSlice';

const Login = ({ pizzatracker }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(setLoginForm(true));
  }, [dispatch]);

  const fromPage = location.state?.from?.pathname || '/';

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        localStorage.setItem('accessToken', user.accessToken);

        navigate(fromPage, { replace: true });
      })
      .catch(() => alert('Invalid user!'));
  };

  return <FormLogin handleClick={handleLogin} pizzatracker={pizzatracker} />;
};

export default Login;
