import { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NormalHeader from './NormalHeader';
import MarkHeader from './MarkHeader';

import btnMenu from '../../imgs/menu.png';
import logo_aap from '../../imgs/logo_bold.png';
import classes from './Header.module.css';

function Header() {
  const [isArchive, setIsArchive] = useState(false);
  const [isHeaderOpened, setIsHeaderOpened] = useState(true);

  function toggleHeader() {
    isHeaderOpened ? setIsHeaderOpened(false) : setIsHeaderOpened(true)
  }

  const currentPath = window.location.pathname;
  useEffect(() => {
    if (currentPath.includes('archive')) {
      setIsHeaderOpened(false);
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
            style={ 
              isHeaderOpened ? { opacity: 1, filter: "invert(100%)" } 
              : { opacity: 0, pointerEvents: "none" }
            }  
          ></img>
        </Link> :
        <Link to={'/'}>
          <img 
            className={classes.logo}
            src={logo_aap}
            style={ isHeaderOpened ? { filter: "invert(100%)" } : { filter: "invert(0%)" }}  
          ></img>
        </Link>
      }
      <header className={`${classes.containerMenu} ${!isHeaderOpened ? classes.containerMenu__closed : ""}`}>
        {isArchive ? <MarkHeader /> : <NormalHeader/>}
      </header>
      <img 
        className={classes.btnMenu}
        src={btnMenu}
        style={isHeaderOpened ? { filter: "invert(100%)"} : { filter: "invert(0%)"}}
        onClick={toggleHeader}
      />
    </Fragment>
  )
}

export default Header;