import { useState, useEffect, useRef } from 'react';

import StartPage from './StartPage.js';
import Header from '../UI/Header';
import MainPage from './MainPage.js';
import classes from './Main.module.css';

const Main = () => {
  const [isStarting, setIsStarting] = useState(true);

  return (
    <main>
        {
          isStarting ? 
          <StartPage onStart={setIsStarting}></StartPage> :
          <section className={classes.container}>
            <Header></Header>
            <MainPage onStart={isStarting}/>
          </section>
        }
    </main>
  )
}

export default Main;