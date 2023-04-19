import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import FormRegister from '../Form/FormRegister';
import { setRegistrationForm } from '../../redux/slices/formSlice';

import { setUser } from '../../redux/slices/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(setRegistrationForm(true));
  }, [dispatch]);

  const fromPage = location.state?.from?.pathname || '/';

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );

        navigate(fromPage, { replace: true });
      })
      .catch(console.error);
  };

  return <FormRegister handleClick={handleRegister} />;
};

export default SignUp;
