import classes from './MarkImg.module.css';

const MarkImg = (props) => {
  return (
    <img
      className={
        classes.mark
        + (props.isCenter ? ` ${classes.mark__center}` : "")
        + (props.isMouseOn ? ` ${classes.mark__hover}` : "")
      }
      src={props.src}
      onLoad={(event) => setTimeout(() => event.target.hidden = false, props.timer)}
      hidden
    ></img>
  );
}

export default MarkImg;