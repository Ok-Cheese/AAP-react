import CityMarkNav from './CityMarkNav';
import classes from './ArchiveHeader.module.css';

import cityMarkData from '../../../data/cityMarkData';

const markHeader = () => {

  const cityMarks = cityMarkData.map(markData => {
    return <CityMarkNav
      key={markData.cityId}
      id={markData.cityId}
      src={markData.cityMark}
      name={markData.cityName}
    />
  });

  return (
    <div className={classes.container__mark}>
      {cityMarks}
    </div>
  )
}

export default markHeader;