import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NormalHeader from './NormalHeader';
import MarkHeader from './MarkHeader';

import btnMenu from '../imgs/menu.png';
import btnMenu_rev from '../imgs/menu_rev.png';
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
    <header className={classes.header}>
      <Link to={'/'}>
        <img className={classes.logo} src={isOpened ? logo_reverse : logo_aap}></img>
      </Link>
      <div className={`${classes.containerMenu} ${!isOpened ? classes.containerMenu__closed : ""}`}>
        {isArchive ? <MarkHeader /> : <NormalHeader/>}
      </div>
      {
        isOpened ?
          <img 
            className={classes.btnMenu}
            src={btnMenu_rev}
            onClick={toggleHeader}
          /> :
          <img 
            className={classes.btnMenu}
            src={btnMenu}
            onClick={toggleHeader}
          />
      }
    </header>
  )
}

export default Header;