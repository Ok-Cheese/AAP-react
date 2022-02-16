import { useState, useEffect, useRef } from 'react';
import Start from './Start.js';
import Header from './Header';
import main1 from '../imgs/main1.jpg';
import main2 from '../imgs/main2.jpg';
import main3 from '../imgs/main3.jpg';
import arrow from '../imgs/arrow_no_tail.png';
import styles from './style/Main2.module.css';

// preload img
import mark1 from '../imgs/Marks/경성.png';
import mark2 from '../imgs/Marks/인천.png';
import mark3 from '../imgs/Marks/대전.png';
import mark4 from '../imgs/Marks/대구.png';
import mark5 from '../imgs/Marks/부산.png';
import mark6 from '../imgs/Marks/군산.png';
import mark7 from '../imgs/Marks/목포.png';
import mark8 from '../imgs/Marks/광주.png';
import mark9 from '../imgs/Marks/평양.png';
import mark10 from '../imgs/Marks/청진.png';
import mark11 from '../imgs/Marks/신의주.png';
import mark12 from '../imgs/Marks/함흥.png';
import mark13 from '../imgs/Marks/원산.png';
import about1 from '../imgs/about1.png';
import about2 from '../imgs/about2.png';
import about3 from '../imgs/about3.png';

function Main2() {
  const [start, setStart] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStart(false);
      const interval = setInterval(() => {
        const nowPosition = container.current.style.marginTop;
        if (nowPosition === "-200vh") {
          container.current.style.marginTop = "0vh";
        } else {
          container.current.style.marginTop = `${+nowPosition.split('vh')[0] - 100}vh`;
        }
      }, 5000);
    }, 3000);
  }, []);

  const container = useRef();

  const [scroll, setScroll] = useState(0);
  let flag = true;
  function handleScroll(e) {
    if (!flag || e.target.parentNode.id !== "container_img") {
      return;
    }
    let value;
    flag = false;
    if (e.deltaY > 0 && scroll < 2) {
      value = scroll + 1;
    } else if (e.deltaY < 0 && scroll > 0) {
      value = scroll - 1;
    } else {
      value = scroll;
    }
    container.current.style.marginTop = `${value * -100}vh`;

    // Main2.module.css의 .container_main transition과 시간 맞출 것.
    setTimeout(() => {
      setScroll(value);
      flag = true;
    }, 1000);
  }

  return (
    <main>
      {
        document.body.onwheel = handleScroll,
        start ? <Start></Start> :
          <section className={styles.container}>
            <Header></Header>
            <div id="container_img" className={styles.container_main} ref={container}>
              <div 
                id='img_main'
                className={styles.img_main} 
                style={{ backgroundImage: `url(${main1})` }}>
                <p className={styles.intro}>
                 AAP는<br></br>
                  근대건축물을 기억하고 소개합니다.
                </p>
              </div>
              <div 
                className={styles.img_main}
                style={{ backgroundImage: `url(${main2})` }}>
                <p className={styles.intro}>
                  일제강점기,<br></br>
                  아픈 역사를 담은 건물도<br></br>
                  우리 역사의 흔적이기에
                </p>
              </div>
              <div 
                className={styles.img_main}
                style={{ backgroundImage: `url(${main3})` }}>
                <p className={styles.intro}>
                  우리는 세월 속에<br></br>
                  그 가치를 잃은 근대건축물의<br></br>
                  보존과 활용에 대해 고민합니다.
                </p>
              </div>
            </div>
            <div className={styles.upDown}>
              <img 
                className={styles.up} 
                src={arrow}
              ></img>
              <img 
                className={styles.down} 
                src={arrow}
              ></img>
            </div>
            <div className={styles.container_preload_img}>
              <img className={styles.preload_img} src={mark1}></img>
              <img className={styles.preload_img} src={mark2}></img>
              <img className={styles.preload_img} src={mark3}></img>
              <img className={styles.preload_img} src={mark4}></img>
              <img className={styles.preload_img} src={mark5}></img>
              <img className={styles.preload_img} src={mark6}></img>
              <img className={styles.preload_img} src={mark7}></img>
              <img className={styles.preload_img} src={mark8}></img>
              <img className={styles.preload_img} src={mark9}></img>
              <img className={styles.preload_img} src={mark10}></img>
              <img className={styles.preload_img} src={mark11}></img>
              <img className={styles.preload_img} src={mark12}></img>
              <img className={styles.preload_img} src={mark13}></img>
              <img className={styles.preload_img} src={about1}></img>
              <img className={styles.preload_img} src={about2}></img>
              <img className={styles.preload_img} src={about3}></img>
            </div>
          </section>
      }
    </main>
  )
}

export default Main2;