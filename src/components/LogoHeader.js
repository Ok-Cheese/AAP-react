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
    setOpened(current => !current);
  }
  return (
    <div className='outer'>
      <header className={opened ? styles.opened : styles.closed}>
        <Link className={styles.logo_link} to={'/'}>
          <img className={styles.logo} src={logo}></img>
        </Link>
        <div className={styles.container_logo}>
          <Link className={styles.link} to='/archive/01'>
            <img className={styles.mark} src={logo1}></img>
            <span className={styles.cityName}>경성</span>
          </Link>
          <Link className={styles.link} to='/archive/02'>
            <img className={styles.mark} src={logo2}></img>
            <span className={styles.cityName}>인천</span>
          </Link>
          <Link className={styles.link} to='/archive/03'>
            <img className={styles.mark} src={logo3}></img>
            <span className={styles.cityName}>대전</span>
          </Link>
          <Link className={styles.link} to='/archive/04'>
            <img className={styles.mark} src={logo4}></img>
            <span className={styles.cityName}>대구</span>
          </Link>
          <Link className={styles.link} to='/archive/05'>
            <img className={styles.mark} src={logo5}></img>
            <span className={styles.cityName}>부산</span>
          </Link>
          <Link className={styles.link} to='/archive/06'>
            <img className={styles.mark} src={logo6}></img>
            <span className={styles.cityName}>군산</span>
          </Link>
          <Link className={styles.link} to='/archive/07'>
            <img className={styles.mark} src={logo7}></img>
            <span className={styles.cityName}>목포</span>
          </Link>
          <Link className={styles.link} to='/archive/08'>
            <img className={styles.mark} src={logo8}></img>
            <span className={styles.cityName}>광주</span>
          </Link>
          <Link className={styles.link} to='/archive/09'>
            <img className={styles.mark} src={logo9}></img>
            <span className={styles.cityName}>평양</span>
          </Link>
          <Link className={styles.link} to='/archive/10'>
            <img className={styles.mark} src={logo10}></img>
            <span className={styles.cityName}>청진</span>
          </Link>
          <Link className={styles.link} to='/archive/11'>
            <img className={styles.mark} src={logo11}></img>
            <span className={styles.cityName}>신의주</span>
          </Link>
          <Link className={styles.link} to='/archive/12'>
            <img className={styles.mark} src={logo12}></img>
            <span className={styles.cityName}>함흥</span>
          </Link>
          <Link className={styles.link} to='/archive/13'>
            <img className={styles.mark} src={logo13}></img>
            <span className={styles.cityName}>원산</span>
          </Link>
        </div>
      </header>
      {
        opened || !closed ? 
          <img 
          className={styles.btn_menu}
          src={btn_menu_rev}
          onClick={openMenu}
          style={{
            
            transition: "1s"
          }}
          /> :
          <img 
          className={styles.btn_menu}
          src={btn_menu}
          onClick={openMenu}
          style={{
            border: "2px solid #474448",
            backgroundColor: "rgba(255, 255, 255, 1)",
            backgroundSize: "cover",
            transition: "1s"
          }}
          />
      }
    </div>
  )
}

export default LogoHeader;