import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import styles from './Signin.module.css';
import FormControl from './FormControl';

function Signin(props) {
  let history = useHistory();
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, e) => {
    console.log('Data from the form', values);
    localStorage.setItem('auth', JSON.stringify(values));
    history.push('/flights')
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Введено некорректное значение')
      .required('* это поле обязательное'),
    password: yup
      .string()
      .matches(/[A-Za-z\d]{8,}/, {
        message: 'Введите пароль без кирилицы, минимум 8 символов',
        excludeEmptyString: true,
      })
      .required('* это поле обязательное'),
  });
useEffect(()=>{
  if( localStorage.getItem('auth')){
    history.push('/flights')
  }
},[])
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className={styles.signinForm}>
            <div className={styles.signinFormTitle}>Simple Flight Check</div>

            <FormControl
              control="input"
              type="email"
              name="email"
              label="Логин:"
            />

            <FormControl
              control="input"
              type="password"
              name="password"
              label="Пароль:"
            />

            <div className={styles.signinFormButton}>
              <button
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Войти
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signin;
