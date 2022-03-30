import { Link } from "react-router-dom";

import classes from './CityLogoInHeader.module.css';

const CityLogoInHeader = (props) => {
  return (
    <Link className={classes.nav} to={`/archive/${props.id}`}>
      <img className={classes.mark} src={props.src}></img>
      <span className={classes.cityName}>{props.name}</span>
    </Link>
  )
}

export default CityLogoInHeader;