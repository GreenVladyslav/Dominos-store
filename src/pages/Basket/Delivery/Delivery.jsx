import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setUserDelivary } from '../../../redux/slices/userSlice';
import { setLoadingStatus } from '../../../redux/slices/formSlice';

import { Formik, Form, useField } from 'formik';
import { deliverySchema } from '../../../utils/Schema';

import { useTranslation } from 'react-i18next';

import './deliveryform.scss';
import '../basket.scss';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="form-delivery__label" htmlFor={props.name}>
        {label}
      </label>
      <input
        className="form-delivery__input"
        {...props}
        {...field}
        style={meta.error && meta.touched ? { color: '#e53e3e' } : { color: 'inherit' }}
      />
      {meta.error && meta.touched ? <div className="form-delivery__error">{meta.error}</div> : null}
    </>
  );
};

function Delivery() {
  const userCity = useSelector((state) => state.user.userCity);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(
      setUserDelivary({
        city: userCity,
        steet: values.steet,
        homeNumber: values.homeNumber,
        entrance: values.entrance,
        apartment: values.apartment,
      }),
    );

    console.log(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);
    dispatch(setLoadingStatus('loading'));

    setTimeout(() => {
      navigate('/payment');
      dispatch(setLoadingStatus('success'));
    }, 1000);
  };

  return (
    <>
      <Formik
        initialValues={{
          city: userCity === '' ? t('kyiv') : t(userCity),
          steet: '',
          homeNumber: '',
          entrance: '',
          apartment: '',
        }}
        validationSchema={deliverySchema}
        onSubmit={handleSubmit}>
        {({ isSubmiting }) => (
          <Form className="form-delivery">
            <h3 className="basket__title">{t('delivery address')}</h3>
            <MyTextInput label={t('city')} id="city" name="city" type="text" />
            <MyTextInput
              label={t('street')}
              id="steet"
              name="steet"
              type="text"
              placeholder={t('placeholderstreet')}
            />
            <MyTextInput
              label={t('housenumber')}
              id="homeNumber"
              name="homeNumber"
              type="text"
              placeholder={t('placeholderhousenumber')}
            />
            <MyTextInput
              label={t('entrance')}
              id="entrance"
              name="entrance"
              type="text"
              placeholder={t('placeholderentrance')}
            />
            <MyTextInput
              label={t('apartment')}
              id="apartment"
              name="apartment"
              type="text"
              placeholder={t('placeholdearpartment')}
            />

            <button type="submit" className="btn-delivery btn-delivery-position-right" id="my-form">
              {t('order checkout')}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Delivery;
