import { useState } from 'react';

import Intro from './Intro.js';
import Header from '../UI/Header/Header';
import MainContentContainer from './MainContentContainer.js';
import classes from './Main.module.css';

const Main = () => {
  const [isStarting, setIsStarting] = useState(true);

  return (
    <main>
        {
          isStarting ? 
          <Intro onStart={setIsStarting}></Intro> :
          <section className={classes.main}>
            <Header></Header>
            <MainContentContainer onStart={isStarting}/>
          </section>
        }
    </main>
  );
};

export default Main;