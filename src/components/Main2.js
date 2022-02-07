import { useState, useEffect } from 'react';
import Start from './Start.js';
import Header from './Header';
import main1 from '../imgs/main1.jpg';
import main2 from '../imgs/main2.jpg';
import main3 from '../imgs/main3.jpg';
import arrow from '../imgs/arrow_no_tail.png';
import styles from './style/Main2.module.css';

function Main2() {
  const [start, setStart] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStart(false);
    }, 3000);
  }, []);

  const [scroll, setScroll] = useState(0);
  function handleScroll(e) {
    console.log(e.target.className);
    if (e.target.className !== "Main2_img_main__qHCFX") {
      return;
    }
    let value;
    console.log(scroll);
    const container = e.target.parentNode;
    if (e.deltaY > 0 && scroll < 2) {
      value = scroll + 1;
    } else if (e.deltaY < 0 && scroll > 0) {
      value = scroll - 1;
    } else {
      value = scroll;
    }
    container.style.marginTop = `${value * -100}vh`;

    // Main2.module.css의 .container_main transition과 시간 맞출 것.
    setTimeout(() => setScroll(value), 1000);
  }
  return (
    <main>
      {
        document.body.onwheel = handleScroll,
        start ? <Start></Start> :
          <section className={styles.container}>
            <Header></Header>
            <div className={styles.container_main}>
              <div 
                className={styles.img_main} 
                style={{ backgroundImage: `url(${main1})` }}>
                <p>
                 AAP는<br></br>
                  근대건축물을 기억하고 소개합니다.
                </p>
              </div>
              <div 
                className={styles.img_main}
                style={{ backgroundImage: `url(${main2})` }}>
                <p>
                  일제강점기,<br></br>
                  아픈 역사를 담은 건물도<br></br>
                  우리 역사의 흔적이기에
                </p>
              </div>
              <div 
                className={styles.img_main}
                style={{ backgroundImage: `url(${main3})` }}>
                <p>
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
          </section>
      }
    </main>
  )
}

export default Main2;