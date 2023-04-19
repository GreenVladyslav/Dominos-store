import React from 'react';
import { Formik, Field, Form } from 'formik';

import { useTranslation } from 'react-i18next';

import '../payment.scss';

const Radio = () => {
  const { t } = useTranslation();

  return (
    <div className="order-method">
      <h3 className="order__title order__title-payment">{t('payment')}:</h3>
      <Formik
        initialValues={{
          paymentMethod: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        {({ values }) => (
          <Form>
            <div id="my-radio-group">
              <div role="group" aria-labelledby="my-radio-group" className="order-ratio-wrap">
                <label className="order__checkbox">
                  <Field type="radio" name="paymentMethod" value="cash" />
                  {t('cash')}
                </label>
                <label className="order__checkbox">
                  <Field type="radio" name="paymentMethod" value="pay" />
                  Google Pay
                </label>
                <label className="order__checkbox">
                  <Field type="radio" name="paymentMethod" value="online" />
                  {t('credit card online')}
                </label>
                <label className="order__checkbox">
                  <Field type="radio" name="paymentMethod" value="card" />
                  {t('credit card')}
                </label>
              </div>
            </div>
            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Radio;
