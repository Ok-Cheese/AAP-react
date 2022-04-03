import { useState, useEffect, useContext, useMemo } from 'react';

import classes from './SidePageImg.module.css';

import archiveContext from '../../../context/archiveContext';
import emptyImg from '../../../imgs/logo_empty.png';

const SidePageImg = () => {
  const archiveContextValue = useContext(archiveContext);

  const [mainImg, setMainImg] = useState("");
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      if (browserWidth < window.innerWidth) {
        setBrowserWidth(window.innerWidth);
      }
    }
  }, []);

  const imageSize = Math.ceil(browserWidth * 0.3 * 0.6) * 2;

  const [img0, img1, img2] = useMemo(() => {
    const currnetItemImgs = [];

    currnetItemImgs.push(archiveContextValue.selectedItem.informImage1 ?
      `https://lh3.googleusercontent.com/d/${archiveContextValue.selectedItem.informImage1.split('/')[5]}=s${imageSize}?authuser=0` : emptyImg);
    currnetItemImgs.push(archiveContextValue.selectedItem.informImage2 ?
      `https://lh3.googleusercontent.com/d/${archiveContextValue.selectedItem.informImage2.split('/')[5]}=s${imageSize}?authuser=0` : emptyImg);
    currnetItemImgs.push(archiveContextValue.selectedItem.informImage3 ?
      `https://lh3.googleusercontent.com/d/${archiveContextValue.selectedItem.informImage3.split('/')[5]}=s${imageSize}?authuser=0` : emptyImg);

    return currnetItemImgs;
  }, [archiveContextValue.selectedItem.id]);
  
  useEffect(() => {
    setMainImg(img0);
  }, [archiveContextValue.selectedItem.id]);

  return (
    <div className={classes.container__img}>
      <img 
        className={classes.img__main} 
        src={mainImg}
      ></img>
      <div className={classes.container__subImg}>
        <img 
          className={
            classes.img__sub + (mainImg === img0 ? ` ${classes.img__selected}` : "")
          }
          src={img0}
          onClick={() => setMainImg(img0)}
        ></img>
        <img 
          className={
            classes.img__sub + (mainImg === img1 ? ` ${classes.img__selected}` : "")
          }
          src={img1}
          onClick={() => setMainImg(img1)}
        ></img>
        <img 
          className={
            classes.img__sub + (mainImg === img2 ? ` ${classes.img__selected}` : "")
          }
          src={img2}
          onClick={() => setMainImg(img2)}
        ></img>
      </div>
    </div>
  );
};

export default SidePageImg;