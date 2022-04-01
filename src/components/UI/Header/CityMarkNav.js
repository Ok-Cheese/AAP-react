import { Link } from "react-router-dom";

import classes from './CityMarkNav.module.css';

const CityMarkNav = (props) => {
  return (
    <Link className={classes.nav__cityMark} to={`/archive/${props.id}`}>
      <img className={classes.markImg} src={props.src}></img>
      <span className={classes.cityName}>{props.name}</span>
    </Link>
  )
}

export default CityMarkNav;