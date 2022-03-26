import { Fragment } from 'react';

import classes from './MarkSpan.module.css';

const MarkSpan = (props) => {
  return (
    <Fragment>
      {
        props.isLoaded ? 
        <span 
          className={
            classes.cityName 
            + (props.isCenter ? ` ${classes.cityName__center}` : "")
            + (props.isMouseOn ? ` ${classes.cityName__hover}` : "")
          }
        >{props.name}</span> : ""
      }
    </Fragment>
  )
}

export default MarkSpan