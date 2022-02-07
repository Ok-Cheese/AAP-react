import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo_rev from '../imgs/logo_bold_rev.png';
import logo from '../imgs/logo_bold.png';
import btn_menu from '../imgs/menu_rev.png';
import styles from './style/Header.module.css';

function Header() {
  const [opened, setOpened] = useState(true);

  function openMenu() {
    opened ? setOpened(false) : setOpened(true)
  }

  useEffect (() => {
    if (window.location.pathname === '/') {
      setOpened(false );
    }
  }, [])
  return (
    <header>
      {opened ? 
        <img className={styles.logo} src={logo_rev}></img>
        : <img className={styles.logo} src={logo}></img>
      }
      {
        opened ? 
          <div className={styles.container_menu}>    
            <Link className={styles.link} to='/about'>About</Link>
            <Link className={styles.link} to='/logos'>Archive</Link>
            <Link className={styles.link} to='/about'>Category</Link>
          </div>
          : <div className={styles.container_menu_closed}></div>
      }
      <img 
        className={styles.btn_menu}
        src={btn_menu}
        onClick={openMenu}
        />
    </header>
  )
}

export default Header;