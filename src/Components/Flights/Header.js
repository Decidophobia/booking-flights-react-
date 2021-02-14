import React from 'react';
import styles from './Header.module.css'

function Header(props) {
  return (
    <div className={styles.flightsContainerHeader}>
          <div className={styles.breadcrumbs}>
            <span>Вылет</span>
            <img style={{margin: "0 15px"}} src="/img/icons/Vector.svg"/>
            <span>SVO - JFK</span>
          </div>
          <div className={styles.calendar}>
            <span>07 марта 2020</span>
            <img style={{marginLeft: "10px"}} src="/img/icons/calendar.svg"/>
          </div>
        </div>
  );
}

export default Header;
