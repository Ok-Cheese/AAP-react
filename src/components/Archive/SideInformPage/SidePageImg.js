import { useState, useEffect, useContext } from 'react';

import classes from './SidePageImg.module.css';

import archiveContext from '../../../context/archiveContext';
import emptyImg from '../../../imgs/logo_empty.png';

const SidePageImg = (props) => {
  const archiveContextValue = useContext(archiveContext);

  const [mainImg, setMainImg] = useState(archiveContextValue.selectedItem.informImage1);

  const img0 = archiveContextValue.selectedItem.informImage1 ?
  `https://drive.google.com/uc?export=download&id=${archiveContextValue.selectedItem.informImage1.split('/')[5]}`
  : emptyImg;
  const img1 = archiveContextValue.selectedItem.informImage2 ?
  `https://drive.google.com/uc?export=download&id=${archiveContextValue.selectedItem.informImage2.split('/')[5]}`
  : emptyImg;
  const img2 = archiveContextValue.selectedItem.informImage3 ?
  `https://drive.google.com/uc?export=download&id=${archiveContextValue.selectedItem.informImage3.split('/')[5]}`
  : emptyImg;

  useEffect(() => {
    setMainImg(img0);
  }, [archiveContextValue.selectedItem.id]);

  return (
    <div className={classes.container__img}>
      <img className={classes.img__main} src={mainImg}></img>
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
  )
}

export default SidePageImg;