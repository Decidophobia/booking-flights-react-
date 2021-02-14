import React, { useEffect } from 'react';
import styles from './Flights.module.css';
import Header from './Header';
import PicSlider from './PicSlider';
import { useHistory } from 'react-router-dom';

function Flights(props) {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      history.push('/');
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbarBtn}>
          <span>Выйти </span>
          <img src="/img/icons/logout.svg"/>
        </div>
      </div>
      <div className={styles.flightsContainer}>
        <Header />
        <div className={styles.slider}>
          <PicSlider />
        </div>
      </div>
    </div>
  );
}

export default Flights;
