import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import styles from './style/Logos.module.css';
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

function Logos() {

  return (
    <div id={styles.outer}>
      <Header></Header>
      <section className={styles.contianer}>
        <Link to={'/arcive/0A'}
          className={styles.contianer_logo}
          style={{ top: "50%", left: "50%" }}
        >
          <img
            className={`${styles.logo} ${styles.logo_center}`} src={logo1} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 800)}
          ></img>
          <span
            className={styles.cityName}
            style={{ fontSize: "4rem"}}
          >경성</span>
        </Link>
        <Link to={'/arcive/0B'}
          className={styles.contianer_logo}
          style={{ top: "0", left: "50%" }}
        >
          <img 
            className={styles.logo} src={logo2} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 1000)}
          ></img>
          <span 
            className={styles.cityName}
          >인천</span>
        </Link>
        <Link to={'/arcive/0C'} hidden
          className={styles.contianer_logo}
          style={{ top: "6.75%", left: "75%" }}
        >
          <img 
            className={styles.logo} src={logo3} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 1200)}
          ></img>
          <span 
            className={styles.cityName}
          >대전</span>
        </Link>
        <Link to={'/arcive/0D'} hidden
          className={styles.contianer_logo}
          style={{ top: "25%", left: "93.25%" }}
        >
          <img 
            className={styles.logo} src={logo4} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 1400)}
          ></img>
          <span 
            className={styles.cityName}
          >대구</span>
        </Link>
        <Link to={'/arcive/0E'} hidden
          className={styles.contianer_logo}
          style={{ top: "50%", left: "100%" }}
        >
          <img 
            className={styles.logo} src={logo5} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 1600)}
          ></img>
          <span 
            className={styles.cityName}
          >부산</span>
        </Link>
        <Link to={'/arcive/0F'} hidden
          className={styles.contianer_logo}
          style={{ top: "75%", left: "93.25%" }}
        >
          <img 
            className={styles.logo} src={logo6} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 1800)}
          ></img>
          <span 
            className={styles.cityName}
          >군산</span>
        </Link>
        <Link to={'/arcive/AA'} hidden
          className={styles.contianer_logo}
          style={{ top: "93.25%", left: "75%" }}
        >
          <img 
            className={styles.logo} src={logo7} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 2000)}
          ></img>
          <span 
            className={styles.cityName}
          >목포</span>
        </Link>
        <Link to={'/arcive/AB'} hidden
          className={styles.contianer_logo}
          style={{ top: "100%", left: "50%" }}
        >
          <img 
            className={styles.logo} src={logo8} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 2200)}
          ></img>
          <span 
            className={styles.cityName}
          >광주</span>
        </Link>
        <Link to={'/arcive/AC'} hidden
          className={styles.contianer_logo}
          style={{ top: "93.25%", left: "25%" }}
        >
          <img 
            className={styles.logo} src={logo9} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 2400)}
          ></img>
          <span 
            className={styles.cityName}
          >평양</span>
        </Link>
        <Link to={'/arcive/AD'} hidden
          className={styles.contianer_logo}
          style={{ top: "75%", left: "6.75%" }}
        >
          <img 
            className={styles.logo} src={logo10} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 2600)}
          ></img>
          <span 
            className={styles.cityName}
          >청진</span>
        </Link>
        <Link to={'/arcive/AE'} hidden
          className={styles.contianer_logo}
          style={{ top: "50%", left: "0%" }}
        >
          <img 
            className={styles.logo} src={logo11} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 2800)}
          ></img>
          <span 
            className={styles.cityName}
          >신의주</span>
        </Link>
        <Link to={'/arcive/AF'} hidden
          className={styles.contianer_logo}
          style={{ top: "25%", left: "6.75%" }}
        >
          <img 
            className={styles.logo} src={logo12} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 3000)}
          ></img>
          <span 
            className={styles.cityName}
          >함흥</span>
        </Link>
        <Link to={'/arcive/BA'} hidden
          className={styles.contianer_logo}
          style={{ top: "6.75%", left: "25%" }}
        >
          <img 
            className={styles.logo} src={logo13} hidden
            onLoad={(e) => setTimeout(() => e.target.hidden = false, 3200)}
          ></img>
          <span 
            className={styles.cityName}
          >원산</span>
        </Link>
      </section>
    </div>
  );
}

export default Logos;