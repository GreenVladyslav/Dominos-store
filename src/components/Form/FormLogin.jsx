import React from 'react';

import { Formik, Form, useField } from 'formik';
import { signInSchema } from '../../utils/Schema';

import { useSelector, useDispatch } from 'react-redux';
import { setLoginForm, setRegistrationForm } from '../../redux/slices/formSlice';

import { useOutsideClickPopup } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

import useEscapeClose from '../../hooks/useEscapeClose';
import useCalcScroll from '../../hooks/useCalcScroll';

import google from '../../assets/social/googale.svg';
import face from '../../assets/social/faceebok.svg';
import apple from '../../assets/social/apple.svg';
import close from '../../assets/close.svg';
// import passEye from '../../assets/showPassword.svg';

import './form.scss';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="popup__label" htmlFor={props.name}>
        {label}
      </label>
      <input
        className="popup__input"
        {...props}
        {...field}
        style={meta.error && meta.touched ? { color: '#e53e3e' } : { color: 'inherit' }}
      />
      {meta.error && meta.touched ? <div className="popup__error">{meta.error}</div> : null}
    </>
  );
};

const FormLogin = ({ handleClick, pizzatracker }) => {
  const popup = React.useRef();
  const overflow = React.useRef();

  // const [signUp setSignUp] = React.useEffect(false);
  // const [email, setEmail] = React.useState('');
  // const [pass, setPass] = React.useState('');

  // const [showPass, setShowPass] = React.useState(true);

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { loginForm } = useSelector((state) => state.forms);

  const handleCloseForm = () => {
    dispatch(setLoginForm(false));
  };

  useOutsideClickPopup(overflow, popup, handleCloseForm);
  useEscapeClose(loginForm, handleCloseForm);
  useCalcScroll(loginForm);

  // const accessToken = localStorage.getItem('access');

  return (
    <div
      className="overflow"
      ref={overflow}
      style={loginForm ? { display: 'block' } : { display: 'none' }}>
      <div className="popup" ref={popup}>
        <div className="popup__content">
          <div className="popup__close" onClick={handleCloseForm}>
            <img src={close} alt="close" />
          </div>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleClick(values.email, values.password);
              console.log(JSON.stringify(values, null, 2));

              resetForm();
              setSubmitting(false);
              dispatch(setLoginForm(false));
            }}>
            {({ isSubmiting }) => (
              <Form>
                <div className="popup__title">{t('signin')}</div>
                {pizzatracker && (
                  <div className="popup__tracker">{t('please login to use the pizza tracker')}</div>
                )}

                <MyTextInput
                  autoComplete="email"
                  label="Email"
                  placeholder={t('placemail')}
                  type="email"
                  name="email"
                />
                <MyTextInput
                  autoComplete="current-password"
                  label={t('password')}
                  placeholder={t('placepass')}
                  name="password"
                  type="password"
                />

                <button className="popup__btn popup__btn-active" type="submit">
                  {t('signin')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(setRegistrationForm(true));
                    dispatch(setLoginForm(false));
                  }}
                  className="popup__btn">
                  {t('registration')}
                </button>
              </Form>
            )}
          </Formik>

          <div className="popup-social">
            <div className="popup-social__top">
              <span></span>
              {t('or')}
              <span></span>
            </div>
            <div className="popup-social__low">
              <a href="/#">
                <img src={google} alt="gog" />
              </a>
              <a href="/#">
                <img src={apple} alt="apl" />
              </a>
              <a href="/#">
                <img src={face} alt="face" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

// const returnRefister = () => {
// return (
//     !loginForm ? <SignUp /> : null;
// )
// }
