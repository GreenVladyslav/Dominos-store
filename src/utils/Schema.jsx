import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const mobileRules = /^\d{12}$/;

export const deliverySchema = yup.object().shape({
  city: yup.string().required("Обов'язкове поле"),
  steet: yup
    .string()
    .min(3, 'Значення поля повинно бути мінімум 3 символів')
    .max(25, 'Боже з якої ви планети?')
    .required("Обов'язкове поле"),
  homeNumber: yup
    .string()
    .min(1, 'Значення поля повинно бути мінімум 1 символів')
    .max(5, 'Щось дуже великий номер дому')
    .required("Обов'язкове поле"),
  entrance: yup.number(),
  apartment: yup.string().max(10, 'Не знущайся'),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email('Неправильний email').required("Обов'язкове поле"),
  password: yup
    .string('Авторизуйтеся є-мейлом чи телефонним номером')
    .min(5, 'Мінімум 5 символів')
    .matches(passwordRules, { message: 'Мінімум одну маленьку, одну велику букву та цифру' })
    .required("Обов'язкове поле"),
});

export const registrationSchema = yup.object().shape({
  name: yup.string().required("Обов'язкове поле"),
  mobile: yup
    .string()
    .matches(mobileRules, { message: 'Телефон повинен становити з 12 цифр' })
    .required("Обов'язкове поле"),
  password: yup
    .string()
    .min(5, 'Мінімум 5 символів')
    .matches(passwordRules, { message: 'Мінімум одну маленьку, одну велику букву та цифру' })
    .required("Обов'язкове поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароль повинен збігатися')
    .required("Обов'язкове поле"),
  gender: yup.string(),
  email: yup.string().email('Неправильний email').required("Обов'язкове поле"),
  terms: yup.boolean().required('Потрібна згода').oneOf([true], 'Потрібна згода'),
  loyalty: yup.boolean().required('Потрібна згода').oneOf([true], 'Потрібна згода'),
});

export const orderSchema = yup.object().shape({
  name: yup.string().required("Обов'язкове поле"),
  mobile: yup
    .string()
    .matches(mobileRules, { message: 'Телефон повинен становити з 12 цифр' })
    .required("Обов'язкове поле"),
  email: yup.string().email('Неправильний email'),
});

// export const basicSchema = yup.object().shape({
//   email: yup.string().email('Please enter a valid email').required('Required!!!'),
//   age: yup.number().positive().integer().required('Required!!!'),
//   password: yup
//     .string()
//     .min(5)
//     .matches(passwordRules, { message: 'Please create a stronger password' })
//     .required('Required!!!'),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Password must match')
//     .required('Required!!!'),
// });

// export const advancedSchema = yup.object().shape({
//   username: yup.string().min(3, 'Username must be at least 3 characters long').required('Required'),
//   jobType: yup
//     .string()
//     .oneOf(['designer', 'developer', 'manager', 'other'], 'Inner')
//     .required('Required!!!'),
//   acceptedTos: yup.boolean().oneOf([true], 'Please accept the terns of service'),
// });
