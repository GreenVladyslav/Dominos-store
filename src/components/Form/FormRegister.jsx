import React from 'react';

import { Formik, Form, useField } from 'formik';
import { registrationSchema } from '../../utils/Schema';

import { useSelector, useDispatch } from 'react-redux';
import { setRegistrationForm } from '../../redux/slices/formSlice';
import { setUserData } from '../../redux/slices/userSlice';

import { useClickOutside } from '../../hooks/useOutsideClick';

import { useTranslation } from 'react-i18next';

import useEscapeClose from '../../hooks/useEscapeClose';
import useCalcScroll from '../../hooks/useCalcScroll';

import close from '../../assets/close.svg';

import './form.scss';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input
        {...props}
        {...field}
        className="popup__input"
        style={meta.error && meta.touched ? { color: '#e53e3e' } : { color: 'inherit' }}
      />
      {meta.error && meta.touched ? <div className="popup__error">{meta.error}</div> : null}
    </>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label htmlFor={props.name} className="checkbox">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>

      {meta.error && meta.touched ? <div className="popup__error">{meta.error}</div> : null}
    </>
  );
};

const FormRegister = ({ handleClick }) => {
  const popup = React.useRef();
  const overflow = React.useRef();

  const dispatch = useDispatch();
  const { registrationForm } = useSelector((state) => state.forms);

  const { t } = useTranslation();

  const handleCloseForm = () => {
    dispatch(setRegistrationForm(false));
  };

  useClickOutside(popup, handleCloseForm);
  useEscapeClose(registrationForm, handleCloseForm);
  useCalcScroll(registrationForm);

  return (
    <>
      <div
        className="overflow"
        ref={overflow}
        style={registrationForm ? { display: 'block' } : { display: 'none' }}>
        <div className="popup" ref={popup}>
          <div className="popup__content">
            <div className="popup__close" onClick={handleCloseForm}>
              <img src={close} alt="close" />
            </div>
            <Formik
              initialValues={{
                name: '',
                mobile: '',
                password: '',
                confirmPassword: '',
                gender: '',
                email: '',
                terms: false,
                loyalty: false,
              }}
              validationSchema={registrationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                handleClick(values.email, values.password);
                dispatch(
                  setUserData({
                    name: values.name,
                    mobile: values.mobile,
                    gender: values.gender,
                  }),
                );
                console.log(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
                dispatch(setRegistrationForm(false));
              }}>
              <Form>
                <div className="popup__title">{t('registration')}</div>
                <MyTextInput
                  label={t('namerequired')}
                  type="text"
                  name="name"
                  placeholder={t('placeholdername')}
                />
                <MyTextInput
                  label={t('phonereguired')}
                  type="mobile"
                  name="mobile"
                  placeholder="380XXXXXXXXX"
                />
                <MyTextInput
                  label="Email*"
                  type="email"
                  name="email"
                  placeholder={t('placeholderemail')}
                />
                <MyTextInput
                  label={t('password')}
                  type="password"
                  name="password"
                  placeholder={t('placeholderpass')}
                />
                <MyTextInput
                  label={t('confirmreguired')}
                  type="confirmPassword"
                  name="confirmPassword"
                  placeholder={t('placeholderconfirm')}
                />
                <MyTextInput
                  label={t('gender')}
                  type="gender"
                  name="gender"
                  placeholder={t('gender')}
                />

                <MyCheckBox name="terms">
                  {t('accept')}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.google.com/document/d/e/2PACX-1vTyJlsT8mxvWSoli_A53WHlmH4r8whyIN-GkqCsSUiKpnVxsUG6oXp9Jjo-zm9DudLbosg_ALeikIeb/pub">
                    {t('rule')}
                  </a>
                </MyCheckBox>
                <MyCheckBox name="loyalty">
                  {t('accept')}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.google.com/document/d/e/2PACX-1vT5xMPyhr-3vn69ceVk6-QOFYmiTNFi7UIEF-PxAMwbmjyKv4cjz-2JGr2OlRDO2kc04eCFtHWyizkU/pub">
                    {t('loyality')}
                  </a>
                </MyCheckBox>
                <button className="popup__btn" type="submit">
                  {t('signup')}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
