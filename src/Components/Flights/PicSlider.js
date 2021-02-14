import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './PicSlider.module.css';

function PicSlider(props) {
  const pictures = useSelector((state) => state.pic);
  const [position, setPosition] = useState('0px');

  const moveLeft = () => {
    setPosition((start) => start.replace('px', '') - 40 + 'px');
  };

  return (
    <>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(${position})` }}
      >
        {pictures &&
          pictures.map((pic, i) => <img key={i} src={pic.url}></img>)}
      </div>
      <button onClick={() => moveLeft()}>лево</button>
    </>
  );
}

export default PicSlider;
