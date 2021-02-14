import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PicSlider(props) {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.pic);

  return (
    <>
      {pictures && pictures.map((pic, i) => <img key={i} src={pic.url}></img>)}
    </>
  );
}

export default PicSlider;
