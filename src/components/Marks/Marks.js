import { Fragment, useEffect, useState } from 'react';

import Header from '../UI/Header/Header';
import CityMark from './CityMark';
import classes from './Marks.module.css';

import { marksData, markLoadDoneTime } from '../../data/marksData';

const Marks = () => {
  const [isMarkLoaded, setIsMarkLoaded] = useState(false);
  // 마지막 로고가 나타난 후 loaded를 true로 변경.
  useEffect(() => {
    const displayNameTimer = setTimeout(() => {
      setIsMarkLoaded(true);
    }, markLoadDoneTime);

    return clearTimeout(displayNameTimer);
  }, []);

  const marks = marksData.map(data => {
    return (
      <CityMark
        key={data.cityId}
        data={data}
        isMarkLoaded={isMarkLoaded}
      ></CityMark>
    );
  });

  return (
    <Fragment>
      <Header></Header>
      <div className={classes.container__content}>
        <section className={classes.contianer__mark}>
          {marks}
        </section>
      </div>
    </Fragment>
  );
};

export default Marks;