import React from 'react';
import styles from './ErrorText.module.css'

function ErrorText(props) {
  return (
    <div className={styles.error}>
      {props.children}
    </div>
  );
}

export default ErrorText;
