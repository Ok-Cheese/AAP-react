import { useState, useRef, useEffect } from 'react';
import emptyImg from '../imgs/logo_empty.png';
import styles from './style/Information.module.css';

function Information(props) {
  const sidePage = useRef();
  
  useEffect(() => {
    props.closed ? sidePage.current.style.left = "100%" 
      : sidePage.current.style.left = "30%";
  }, [props.closed])
  
  function handleSideClosed(e) {
    props.propFunc(current => !current);
  }
  
  const img0_link = props.img0 ?
    `https://drive.google.com/uc?export=download&id=${props.img0.split('/')[5]}`
    : emptyImg;
  const img1_link = props.img1 ?
  `https://drive.google.com/uc?export=download&id=${props.img1.split('/')[5]}`
  : emptyImg;
  const img2_link = props.img2 ?
  `https://drive.google.com/uc?export=download&id=${props.img2.split('/')[5]}`
  : emptyImg;
  const img3_link = props.img3 ?
  `https://drive.google.com/uc?export=download&id=${props.img3.split('/')[5]}`
  : emptyImg;

  const [mainImg, setMainImg] = useState([img0_link, img1_link, img2_link, img3_link]);
  function changeMainImg(e) {
    const newArr = mainImg.slice();
    if (e.target.id === "left") {
      newArr.unshift(newArr.pop());
    } else if (e.target.id === "right") {
      newArr.push(newArr.shift());
    }
    setMainImg(newArr);
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
        <div className={styles.img_outerBox}>
          <img className={styles.img_main} src={mainImg[0]}></img>
          <button 
            id="left" 
            className={styles.changeBefore} 
            onClick={changeMainImg}>◀</button>
          <button 
            id="right" 
            className={styles.changeAfter} 
            onClick={changeMainImg}>▶</button>
          <div className={styles.img_innerBox}>
            <img 
              className={styles.img_sub} 
              src={mainImg[1]}
            ></img>
            <img 
              className={styles.img_sub} 
              src={mainImg[2]}
            ></img>
            <img 
              className={styles.img_sub} 
              src={mainImg[3]}
            ></img>
          </div>
        </div>
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