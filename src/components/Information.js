import { useState, useRef, useEffect } from 'react';
import styles from './style/information.module.css';

function Information(props) {
  const sidePage = useRef();
  
  useEffect(() => {
    props.closed ? sidePage.current.style.left = "100%" 
      : sidePage.current.style.left = "30%";
  }, [props.closed])
  
  function handleSideClosed(e) {
    props.propFunc(current => !current);
  }
  return (
    <div ref={sidePage} className={styles.container_inform}>
      <button
        className={styles.inform_handle}
        onClick={handleSideClosed}
        >
          { props.closed ? "◀" : "▶"}
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