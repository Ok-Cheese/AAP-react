import cityMarkData from '../data/cityMarkData';
import CityLogoInHeader from './CityLogoInHeader';
import styles from './MarkHeader.module.css';

function markHeader() {

  const cityMarks = cityMarkData.map(markData => {
    return <CityLogoInHeader
      id={markData.cityId}
      src={markData.cityMark}
      name={markData.cityName}
    />
  });

  return (
    <div className={styles.container__mark}>
      {cityMarks}
    </div>
  )
}

export default markHeader;