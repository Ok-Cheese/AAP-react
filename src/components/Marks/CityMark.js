import { useState } from 'react';
import { Link } from "react-router-dom";

import MarkImg from "./MarkImg";
import MarkSpan from "./MarkSpan";
import classes from "./CityMark.module.css";

const CityMark = (props) => {
  const [isMouseOnMark, setIsMouseOnMark] = useState(false);

  const onMouseEnterHandler = () => {
    setIsMouseOnMark(true);
  }

  const onMouseLeaveHandler = () => {
    setIsMouseOnMark(false);
  }

  return (
    <Link
      to={`/archive/${props.data.cityId}`}
      className={classes.wrapper__marker}
      style={{ top: props.data.top, left: props.data.left }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <MarkImg 
        src={props.data.src}
        isCenter={props.data.isCenter}
        isMouseOnMark={isMouseOnMark}
        timer={props.data.timer}
      />
      <MarkSpan 
        cityName={props.data.cityName} 
        isCenter={props.data.isCenter}
        isMarkLoaded={props.isMarkLoaded}
        isMouseOnMark={isMouseOnMark}
      ></MarkSpan>
    </Link>
  );
};

export default CityMark;