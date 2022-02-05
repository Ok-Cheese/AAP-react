import { useState } from 'react';
import logo from '../imgs/logo_bold_rev.png';
import btn_menu from '../imgs/menu_rev.png';
import styles from './Header.module.css';

function Header() {
  const [opened, setOpened] = useState(false);

  function openMenu() {
    opened ? setOpened(false) : setOpened(true)
  }

  return (
    <header>
      <img className={styles.logo} src={logo}></img>
        {
          opened ? 
            <div className={styles.container_menu}>    
              <span>About</span>
              <span>Archive</span>
              <span>Photo</span>
            </div>
            : <div className={styles.container_menu_closed}>    
                <span>About</span>
                <span>Archive</span>
                <span>Photo</span>
              </div>
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