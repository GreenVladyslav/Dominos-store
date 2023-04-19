import { useState } from 'react';
import { Formik, Form, useField } from 'formik';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setThanksPopup, setLoadingStatus } from '../../redux/slices/formSlice';
import { orderSchema } from '../../utils/Schema';

import Radio from './Selects/Radio';
import DaySelect from './Selects/DaySelect';
import TimeSelect from './Selects/TimeSelect';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';

import ThanksReg from '../../components/Form/ThanksReg';
import Spinner from '../../components/Spinner/Spinner';

import { useTranslation } from 'react-i18next';

import './payment.scss';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="order__label" htmlFor={props.name}>
        {label}
      </label>
      <input
        className="order__input"
        {...props}
        {...field}
        style={meta.error && meta.touched ? { color: '#e53e3e' } : { color: 'inherit' }}
      />
      {meta.error && meta.touched ? <div className="order__input-error">{meta.error}</div> : null}
    </>
  );
};

// const MyCheckBox = ({ text, ...props }) => {
//   const [field, meta] = useField({ ...props, type: 'checkbox' });

//   return (
//     <>
//       <label className="order__checkbox">
//         <input type="radio" {...props} {...field} name={props.name} value={props.value} />
//         {text}
//       </label>

//       {meta.error && meta.touched ? <div className="error">{meta.error}</div> : null}
//     </>
//   );
// };

// const MySelect = ({ label, children, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <>
//       <label htmlFor={props.name}>{label}</label>
//       <select {...props} {...field}>
//         {children}
//       </select>
//       {meta.error && meta.touched ? <div className="error">{meta.error}</div> : null}
//     </>
//   );
// };

const OrderPayment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const { thanksPopup } = useSelector((state) => state.forms);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const { totalPrice } = useSelector((state) => state.cart);
  const { loadingStatus } = useSelector((state) => state.forms);

  const { t } = useTranslation();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setName(values.name);
    setEmail(values.email);
    setMobile(values.mobile);
    dispatch(setLoadingStatus('loading'));
    console.log(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);

    setTimeout(() => {
      dispatch(setLoadingStatus('success'));
      dispatch(setThanksPopup(true));
    }, 1000);

    setTimeout(() => {
      dispatch(setThanksPopup(false));
    }, 6000);
  };

  return (
    <>
      <div className="container">
        <div className="order">
          <h2 className="order__title"> {t('checkout order')}</h2>
          <div className="order-wrap">
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: ' translateX(-50%) translateY(-50%)',
              }}>
              {loadingStatus === 'loading' ? <Spinner /> : null}
            </div>

            <div className="order-left">
              <h3 className="order__title order__title-size"> {t('contacts')}</h3>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  mobile: '',
                  paymentMethod: '',
                }}
                validationSchema={orderSchema}
                onSubmit={handleSubmit}>
                <Form className="order__form-data">
                  <MyTextInput
                    label={t('first name')}
                    type="text"
                    name="name"
                    placeholder={t('placeholder first name')}
                    value={name}
                  />
                  <MyTextInput
                    label={t('pphone')}
                    type="mobile"
                    name="mobile"
                    placeholder="380XXXXXXXXX"
                    value={mobile}
                  />
                  <MyTextInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder={t('placeholder em')}
                    value={email}
                  />
                  <button type="submit" className="btn-back btn-position-right">
                    {t('order checkout')}
                  </button>
                </Form>
              </Formik>
              <Radio />
            </div>
            <div className="order-right">
              <h3 className="order__title order__title-size">{t('delivery time')}</h3>
              <div className="order-deliver-data-time-block">
                <div className="order-delivery__data">
                  <DaySelect />
                </div>
                <div className="order-delivery__time">
                  <TimeSelect />
                </div>
              </div>
              <div className="order-textarea-block">
                <label className="order__label" htmlFor="comment">
                  {t('your comment')}
                </label>
                <textarea
                  className="order__textarea"
                  name="text"
                  placeholder={t('placeholder your comment')}
                  id="comment"></textarea>
              </div>
              <ToggleSwitch />

              <div className="payment-reduce-sum">
                {t('total sum')}:
                <span>
                  {totalPrice}.00 {t('uah')}
                </span>
              </div>
            </div>
            <div className="btn-relative">
              <button className="btn-back btn-position-left" onClick={goBack}>
                {t('return to the basket')}
              </button>
            </div>
          </div>
        </div>
      </div>
      {thanksPopup ? (
        <ThanksReg
          textContent={
            <>
              {t('tahnks message first')} <br />
              {t('thanks maessage second')}
            </>
          }
        />
      ) : null}
    </>
  );
};

export default OrderPayment;
