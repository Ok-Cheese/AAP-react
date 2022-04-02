import classes from './MarkImg.module.css';

const MarkImg = (props) => {
  function onMarkLoadDone(event) {
    setTimeout(() => event.target.hidden = false, props.timer);
  }

  return (
    <img
      className={
        classes.mark
        + (props.isCenter ? ` ${classes.mark__center}` : "")
        + (props.isMouseOnMark ? ` ${classes.mark__hover}` : "")
      }
      src={props.src}
      onLoad={onMarkLoadDone}
      hidden
    ></img>
  );
};

export default MarkImg;