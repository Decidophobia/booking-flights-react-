import React from 'react';
import { Link } from 'react-router-dom';
import styles  from './Signin.module.css';

function Signin(props) {
  return (
    <div className={styles.container}>
      <div className={styles.signinForm}>
        <div className={styles.signinFormTitle}>
        Simple Flight Check
        </div>
        <form>
          <div className={styles.signinFormField}>
            <div className={styles.signinFormFieldLabel}>Логин:</div>
            <input
              className={styles.signinFormFieldInput}
              required
              type="email"
            ></input>
          </div>
          <div className={styles.signinFormField}>
            <div className={styles.signinFormFieldLabel}>Пароль:</div>
            <input
              className={styles.signinFormFieldInput}
              required
              type="password"
              pattern="[A-Za-z\d]{8,}"
            ></input>
          </div>
          <div className={styles.signinFormButton}>
          <Link to="/flights">
            <button>Войти</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
