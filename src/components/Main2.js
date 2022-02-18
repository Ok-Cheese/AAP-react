import { useState, useEffect } from 'react';
import Start from './Start.js';
import Header from './Header.js';
import { ArrowUp, ArrowLeft, ArrowRight} from './Arrow.js';
import styles from './style/Main2.module.css';
import img_stair from '../imgs/main.jpg';

function Main2() {
  const [start, setStart] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStart(false);
    }, 3000)
  }, []);

  return (
    <main>
      {
        start ? <Start></Start> :
          <div className={styles.contianer}>
            <Header></Header>
            <img className={styles.stair} src={img_stair} alt='main'/>
          </div>
      }
    </main>
  ) 
}

export default Main2;