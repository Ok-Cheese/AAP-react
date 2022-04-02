import CityMarkNav from './CityMarkNav';
import classes from './ArchiveHeader.module.css';

import { marksData } from '../../../data/marksData';

const markHeader = () => {

  const cityMarks = marksData.map(markData => {
    return <CityMarkNav
      key={markData.cityId}
      id={markData.cityId}
      name={markData.cityName}
      src={markData.src}
    />
  });

  return (
    <div className={classes.container__mark}>
      {cityMarks}
    </div>
  )
}

export default markHeader;