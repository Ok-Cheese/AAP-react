import { useState, useRef } from 'react';
import styles from './style/information.module.css';

function Information(props) {
  const sidePage = useRef();
  const [sideClosed, setSideClosed] = useState(true);
  
  function handleSideClosed(e) {
    setSideClosed(current => !current);
    sideClosed ? sidePage.current.style.left = "30%" 
      : sidePage.current.style.left = "100%";
  }
  return (
    <div ref={sidePage} className={styles.container_inform}>
      <button
        className={styles.inform_handle}
        onClick={handleSideClosed}
        >
          { sideClosed ? "◀" : "▶"}
        </button>
      <div className={styles.information}>
        <img src={props.img1}></img>
        {/* <img src={props.img2}></img>
        <img src={props.img3}></img> */}
        <div className={styles.textbox}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.subtitle}>{props.subtitle}</span>
          <p className={styles.content}>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Information;