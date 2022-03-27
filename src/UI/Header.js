import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NormalHeader from './NormalHeader';
import MarkHeader from './MarkHeader';

import btnMenu from '../imgs/menu.png';
import logo_reverse from '../imgs/logo_bold_rev.png';
import logo_aap from '../imgs/logo_bold.png';
import classes from './Header.module.css';

function Header() {
  const [isOpened, setIsOpened] = useState(true);
  const [isArchive, setIsArchive] = useState(false);

  function toggleHeader() {
    isOpened ? setIsOpened(false) : setIsOpened(true)
  }

  const currentPath = window.location.pathname;
  useEffect(() => {
    if (currentPath.includes('archive')) {
      setIsOpened(false);
      setIsArchive(true);
    }
  }, []);
  

  return (
    <Fragment>
      {
        isArchive ? 
        <Link to={'/'}>
          <img 
            className={classes.logo}
            src={logo_aap}
            style={ isOpened ? { opacity: 1, filter: "invert(100%)" } : { opacity: 0 }}  
          ></img>
        </Link> :
        <Link to={'/'}>
          <img 
            className={classes.logo}
            src={logo_aap}
            style={ isOpened ? { filter: "invert(100%)" } : { filter: "invert(0%)" }}  
          ></img>
        </Link>
      }
      <header className={`${classes.containerMenu} ${!isOpened ? classes.containerMenu__closed : ""}`}>
        {isArchive ? <MarkHeader /> : <NormalHeader/>}
      </header>
      <img 
        className={classes.btnMenu}
        src={btnMenu}
        style={isOpened ? { filter: "invert(100%)"} : { filter: "invert(0%)"}}
        onClick={toggleHeader}
      />
    </Fragment>
  )
}

export default Header;