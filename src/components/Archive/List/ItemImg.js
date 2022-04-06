import { useEffect, useState } from 'react';

import classes from './ItemImg.module.css';

import emptyImg from '../../../imgs/logo_empty.png';

const ItemImg = (props) => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      if (browserWidth < window.innerWidth) {
        setBrowserWidth(window.innerWidth);
      }
    }
  }, []);

  const imageSize = Math.ceil(browserWidth * 0.08) * 2;

  const imgSrc = props.imgId ?
    `https://lh3.googleusercontent.com/d/${props.imgId.split('/')[5]}=s${imageSize}?authuser=0` : emptyImg;

  return (
    <div className={classes.container__img}>
      <img
        className={classes.img + (props.isMouseOn ? ` ${classes.img__hover}` : "")}
        src={imgSrc}
      />
    </div>
  );
};

export default ItemImg;