import { Fragment } from 'react';

import classes from './MarkSpan.module.css';

const MarkSpan = (props) => {
  return (
    <Fragment>
      {
        props.isMarkLoaded ? 
        <span 
          className={
            classes.cityName 
            + (props.isCenter ? ` ${classes.cityName__center}` : "")
            + (props.isMouseOnMark ? ` ${classes.cityName__hover}` : "")
          }
        >{props.cityName}</span> : ""
      }
    </Fragment>
  );
};

export default MarkSpan