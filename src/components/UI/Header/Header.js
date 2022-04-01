import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NormalHeader from './NormalHeader';
import ArchiveHeader from './ArchiveHeader';
import classes from './Header.module.css';

import btnMenu from '../../../imgs/menu.png';
import logo_aap from '../../../imgs/logo_bold.png';

const Header = () => {
  const [isInArchivePage, setIsInArchivePage] = useState(false);
  const [isHeaderOpened, setIsHeaderOpened] = useState(true);

  function toggleHeader() {
    isHeaderOpened ? setIsHeaderOpened(false) : setIsHeaderOpened(true);
  }

  const currentPath = window.location.pathname;
  useEffect(() => {
    if (currentPath.includes('archive')) {
      setIsInArchivePage(true);
      setIsHeaderOpened(false);
    }
  }, []);

  return (
    <Fragment>
      {
        isInArchivePage ?
          <Link to={'/'}>
            <img
              className={classes.logo + (isHeaderOpened ? ` ${classes.invertColor}` : ` ${classes.transparentStyle}`)}
              src={logo_aap}
            ></img>
          </Link> :
          <Link to={'/'}>
            <img
              className={classes.logo + (isHeaderOpened ? ` ${classes.invertColor}` : "")}
              src={logo_aap}
            ></img>
          </Link>
      }
      <header className={`${classes.container__menu__opened} ${!isHeaderOpened ? classes.container__menu__closed : ""}`}>
        {isInArchivePage ? <ArchiveHeader /> : <NormalHeader />}
      </header>
      <img
        className={classes.btnMenu + (isHeaderOpened ? ` ${classes.invertColor}` : "")}
        src={btnMenu}
        onClick={toggleHeader}
      />
    </Fragment>
  )
}

export default Header;