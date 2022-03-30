import { useEffect, useState } from 'react';

import classes from './CityItemDataList.module.css';

import { getData } from '../../modules/firebase';
import CityItemList from './CityItemList';

const CityItemDataList = (props) => {
  const [cityData, setCityData] = useState([]);
  
  useEffect(async () => {
    const loadCityData = await conlog('/');
    setCityData(loadCityData);
  }, []);

  const cityList = [];
  for (let cityId in cityData) {
    cityList.push(
      <CityItemList 
        key={cityId} 
        cityName={cityData[cityId].cityName} 
        cityItems={cityData[cityId].items ? cityData[cityId].items : []}
      />
    )
  }

  async function conlog(path) {
    return new Promise((resolve, reject) => {
      const response = getData(path);
      if (response) resolve(response);
    })
  }

  return (
    <div className={classes.container__list}>
      {cityList}
    </div>
  );
}

export default CityItemDataList;