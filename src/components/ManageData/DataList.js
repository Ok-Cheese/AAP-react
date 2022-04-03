import CityItemData from './CityItemData';
import classes from './DataList.module.css';

import cityIdData from '../../data/cityIdData';
import cityNameData from '../../data/cityNameData';

const DataList = () => {
  const cityList = [];
  for (let i = 0; i < cityIdData.length; i++) {
    const cityId = cityIdData[i];
    const cityName = cityNameData[i];
    cityList.push(
      <CityItemData key={cityId} cityId={cityId} cityName={cityName}/>
    )
  }

  return (
    <div className={classes.dataList}>
      {cityList}
    </div>
  );
};

export default DataList;