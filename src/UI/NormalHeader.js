import React from "react";
import { NavLink } from "react-router-dom";

import classes from './NormalHeader.module.css';


const NormalHeader = () => {
  return (
    <div className={classes.navWrapper}>
      <NavLink 
        className={({ isActive }) => classes.nav + (isActive ? ` ${classes.active}` : "")} 
        to='/about'>
        About
      </NavLink>
      <NavLink 
        className={({ isActive }) => classes.nav + (isActive ? ` ${classes.active}` : "")} 
        to='/logos'>
      Archive
      </NavLink>
      <NavLink 
        className={({ isActive }) => classes.nav + (isActive ? ` ${classes.active}` : "")} 
        to='/about'>
      Category
      </NavLink>
    </div>
  )
}

export default NormalHeader;