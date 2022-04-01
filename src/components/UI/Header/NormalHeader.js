import React from "react";
import { NavLink } from "react-router-dom";

import classes from './NormalHeader.module.css';

const NormalHeader = () => {
  return (
    <div className={classes.wrapper__nav}>
      <NavLink 
        to='/about'
        className={({ isActive }) => classes.nav + (isActive ? ` ${classes.active}` : "")} 
      >About</NavLink>
      <NavLink 
        to='/marks'
        className={({ isActive }) => classes.nav + (isActive ? ` ${classes.active}` : "")} 
      >Archive</NavLink>
      <NavLink 
        to='/dataControl'
        className={({ isActive }) => classes.nav + (isActive ? ` ${classes.active}` : "")} 
      >Data</NavLink>
    </div>
  )
}

export default NormalHeader;