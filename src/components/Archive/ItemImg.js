import classes from './ItemImg.module.css';

import emptyImg from '../../imgs/logo_empty.png';

const itemImg = (props) => {
  const imgSrc = props.imgId ?
    `https://lh3.googleusercontent.com/d/${props.imgId.split('/')[5]}=s500?authuser=0`
    : emptyImg;

  return (
    <div className={classes.container__img}>
      <img
        className={
          classes.img__item 
          + (props.isMouseHover ? ` ${classes.img__item__hover}` : "")
        }
        src={imgSrc}
      />
    </div>
  )
}

export default itemImg