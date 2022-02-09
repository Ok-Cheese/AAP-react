import Header from './Header.js';
import styles from './style/About.module.css';
import building1 from '../imgs/about1.png';
import building2 from '../imgs/about2.png';
import building3 from '../imgs/about3.png';
import { useEffect, useState } from 'react';

function About() {
  document.onwheel = handleScroll;
  
  const [scroll, setScroll] = useState(0);
  let flag = true;
  function handleScroll(e) {
    if (!flag || e.target.parentNode.id !== "outer") {
      return;
    }
    let value;
    flag = false;
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
    setTimeout(() => {
      setScroll(value);
      flag = true;
    }, 1000);
  }
  return (
    <section className={styles.about}>
      <Header></Header>
      <div id="outer" className={styles.container_outer}>
        <div className={styles.container_inner}>
          <p className={styles.introAbout}>
            Architecture<br></br>
            Archive<br></br>
            Project<br></br>
          </p>
          <img className={styles.img_tmp} src={building1}>
          </img>
        </div>
        <div className={styles.container_inner}>
          <p className={styles.introAbout}>
            Text text<br></br>
            Sed et felis.
          </p>
          <img className={styles.img_tmp} src={building2}
            style={{ transform: "translate(30%, 0%)" }}>
          </img>
        </div>
        <div className={styles.container_inner}>
          <p className={styles.introAbout}>
            In sollicitudin elit.<br></br>
            Nullam non diam.
          </p>
          <img className={styles.img_tmp} src={building3}>
            </img>
        </div>
      </div>
    </section>
  )
}

export default About;