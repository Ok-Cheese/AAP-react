import { useEffect, useState } from 'react';

import classes from './CityItemDataList.module.css';

import CityItemList from './CityItemList';
import cityIdData from '../../data/cityIdData';
import cityNameData from '../../data/cityNameData';

const CityItemDataList = (props) => {
  const cityList = [];
  for (let i = 0; i < cityIdData.length; i++) {
    const cityId = cityIdData[i];
    const cityName = cityNameData[i];
    cityList.push(
      <CityItemList key={cityId} cityId={cityId} cityName={cityName}/>
    )
  }

  return (
    <div className={classes.container__list}>
      {cityList}
    </div>
  );
}

export default CityItemDataList;