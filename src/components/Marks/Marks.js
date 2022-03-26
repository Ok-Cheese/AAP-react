import { Fragment, useEffect, useState } from 'react';

import Header from '../../UI/Header';
import CityMark from './CityMark';
import marksData from '../../data/marksData';
import classes from './Marks.module.css';


function Marks() {
  const [isLoaded, setIsLoaded] = useState(false);
  // 마지막 로고가 나타난 후 loaded를 true로 변경.
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3200);
  }, []);

  const marks = marksData.map(data => {
    return (
      <CityMark
        key={data.id}
        id={data.id}
        name={data.name}
        top={data.top}
        left={data.left}
        src={data.src}
        timer={data.timer}
        isCenter={data.isCenter}
        isLoaded={isLoaded}
      ></CityMark>
    )
  })

  return (
    <Fragment>
      <Header></Header>
      <div className={classes.contianer__page}>
        <section className={classes.contianer__mark}>
          {marks}
        </section>
      </div>
    </Fragment>
  );
}

export default Marks;