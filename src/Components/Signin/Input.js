import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';
import styles from './Input.module.css';

function Input(props) {
  const {label, name, ... rest} = props;
  return (
    <div className={styles.signinFormField}>
       <label className={styles.signinFormFieldLabel} htmlFor={name}>{label}</label>
      <Field className={styles.signinFormFieldInput} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default Input;
