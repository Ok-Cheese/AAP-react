import { useState } from 'react';
import { Link } from "react-router-dom";

import MarkImg from "./MarkImg";
import classes from "./CityMark.module.css";
import MarkSpan from "./MarkSpan";

const CityMark = (props) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const onMouseEnterHandler = (event) => {
    setIsMouseOn(true);
  }

  const onMouseLeaveHandler = (event) => {
    setIsMouseOn(false);
  }

  return (
    <Link
      to={`/archive/${props.id}`}
      className={classes.markOuter}
      style={{ top: props.top, left: props.left }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <MarkImg 
        src={props.src}
        isCenter={props.isCenter}
        isMouseOn={isMouseOn}
        timer={props.timer}
      />
      <MarkSpan 
        name={props.name} 
        isCenter={props.isCenter}
        isLoaded={props.isLoaded}
        isMouseOn={isMouseOn}
      ></MarkSpan>
    </Link>
  )
}

export default CityMark;