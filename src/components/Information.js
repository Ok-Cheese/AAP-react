import { useState, useRef, useEffect } from 'react';
import emptyImg from '../imgs/logo_empty.png';
import styles from './Information.module.css';

function Information(props) {
  const sidePage = useRef();
  
  useEffect(() => {
    props.closed ? sidePage.current.style.left = "100%" 
      : sidePage.current.style.left = "30%";
  }, [props.closed])
  
  function handleSideClosed(e) {
    props.propFunc(current => !current);
  }

  const img0 = props.img0 ?
    `https://drive.google.com/uc?export=download&id=${props.img0.split('/')[5]}`
    : emptyImg;
  const img1 = props.img1 ?
  `https://drive.google.com/uc?export=download&id=${props.img1.split('/')[5]}`
  : emptyImg;
  const img2 = props.img2 ?
  `https://drive.google.com/uc?export=download&id=${props.img2.split('/')[5]}`
  : emptyImg;

  const [mainImg, setMainImg] = useState(img0);
  
  useEffect(() => {
    setMainImg(img0);
  }, [props.img0])

  return (
    <div ref={sidePage} className={styles.container_inform}>
      <button
        className={styles.inform_handle}
        onClick={handleSideClosed}
        >
          { props.closed ? "◀" : "▶"}
        </button>
      <div className={styles.information}>
        <div className={styles.titleBox}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.subtitle}>{props.subtitle}</span>
        </div>
        <div className={styles.img_outerBox}>
          <img className={styles.img_main} src={mainImg}></img>
          <div className={styles.img_innerBox}>
            <img 
              className={styles.img_sub} 
              src={img0}
              onClick={() => setMainImg(img0)}
            ></img>
            <img 
              className={styles.img_sub} 
              src={img1}
              onClick={() => setMainImg(img1)}
            ></img>
            <img 
              className={styles.img_sub} 
              src={img2}
              onClick={() => setMainImg(img2)}
            ></img>
          </div>
        </div>
        <div className={styles.textbox}>
          <p className={styles.content}>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Information;