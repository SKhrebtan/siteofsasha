import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Ім\'я є обов\'язковим полем'),
  email: Yup.string()
    .email('Введіть дійсну адресу пошти')
    .required('Електронна пошта є обов\'язковою'),
  phone: Yup.string()
    .matches(/^\+?[0-9]+$/, 'Введіть дійсний номер телефону')
    .min(10, 'Мінімум 10 цифр')
    .max(15, 'Максимум 15 цифр')
    .required('Номер телефону є обов\'язковим полем'),
});