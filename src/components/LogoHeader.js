import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import btn_menu from '../imgs/menu.png';
import btn_menu_rev from '../imgs/menu_rev.png';
import logo from '../imgs/logo_bold_rev.png';
import logo1 from '../imgs/Marks/경성.png';
import logo2 from '../imgs/Marks/인천.png';
import logo3 from '../imgs/Marks/대전.png';
import logo4 from '../imgs/Marks/대구.png';
import logo5 from '../imgs/Marks/부산.png';
import logo6 from '../imgs/Marks/군산.png';
import logo7 from '../imgs/Marks/목포.png';
import logo8 from '../imgs/Marks/광주.png';
import logo9 from '../imgs/Marks/평양.png';
import logo10 from '../imgs/Marks/청진.png';
import logo11 from '../imgs/Marks/신의주.png';
import logo12 from '../imgs/Marks/함흥.png';
import logo13 from '../imgs/Marks/원산.png';
import styles from './style/LogoHeader.module.css';

function LogoHeader({ closed }) {
  const [opened, setOpened] = useState(false);

  function openMenu() {
    opened ? setOpened(false) : setOpened(true)
  }
  return (
    <div className='outer'>
      <header className={opened ? styles.opened : styles.closed}>
        <div className={styles.container_logo}>   
          <img className={styles.logo} src={logo}></img>
          <Link className={styles.link} to='/archive/01'>
            <img className={styles.mark} src={logo1}></img>
          </Link>
          <Link className={styles.link} to='/archive/02'>
            <img className={styles.mark} src={logo2}></img>
          </Link>
          <Link className={styles.link} to='/archive/03'>
            <img className={styles.mark} src={logo3}></img>
          </Link>
          <Link className={styles.link} to='/archive/04'>
            <img className={styles.mark} src={logo4}></img>
          </Link>
          <Link className={styles.link} to='/archive/05'>
            <img className={styles.mark} src={logo5}></img>
          </Link>
          <Link className={styles.link} to='/archive/06'>
            <img className={styles.mark} src={logo6}></img>
          </Link>
          <Link className={styles.link} to='/archive/07'>
            <img className={styles.mark} src={logo7}></img>
          </Link>
          <Link className={styles.link} to='/archive/08'>
            <img className={styles.mark} src={logo8}></img>
          </Link>
          <Link className={styles.link} to='/archive/09'>
            <img className={styles.mark} src={logo9}></img>
          </Link>
          <Link className={styles.link} to='/archive/10'>
            <img className={styles.mark} src={logo10}></img>
          </Link>
          <Link className={styles.link} to='/archive/11'>
            <img className={styles.mark} src={logo11}></img>
          </Link>
          <Link className={styles.link} to='/archive/12'>
            <img className={styles.mark} src={logo12}></img>
          </Link>
          <Link className={styles.link} to='/archive/13'>
            <img className={styles.mark} src={logo13}></img>
          </Link>
        </div>
      </header>
      {
        opened || !closed ? 
          <img 
          className={styles.btn_menu}
          src={btn_menu_rev}
          onMouseOver={openMenu}
          /> :
          <img 
          className={styles.btn_menu}
          src={btn_menu}
          onMouseOver={openMenu}
          style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          />
      }
    </div>
  )
}

export default LogoHeader;