import { useState, useEffect } from 'react';

import CItyDescTable from './CityDescTable';
import classes from './CityItemList.module.css';
import CityItemTable from './CityItemTable';

import { getData } from '../../modules/firebase';

const CityItemList = (props) => {
  const [isTableOpened, setIsTableOpend] = useState(false);
  const [cityData, setCityData] = useState([]);

  const exceptProperties = [
    "imageId", "informImage1", "informImage2", "informImage3", "desc"
  ];

  const itemData = [];
  const descData = [];

  for (let id in cityData) {
    const newData = {};
    for (let key in cityData[id]) {
      if (exceptProperties.includes(key)) continue;
      else newData[key] = cityData[id][key];
    }
    itemData.push(newData);
  }

  for (let id in cityData) {
    const newData = {};
    for (let key in cityData[id]) {
      if (key === "id" || key === "name" || key === "desc") {
        newData[key] = cityData[id][key];
      }
    }
    descData.push(newData);
  }

  async function tableToggleHandler() {
    if (!itemData.length) {
      const loadedCityData = await getData(`/cityItems/${props.cityId}/items`);
      setCityData(loadedCityData);
    }

    setIsTableOpend(current => !current);
  }

  return (
    <ul className={classes.cityItemList}>
      <div className={classes.cityTitle}>
        <p className={classes.cityName}>{props.cityName}</p>
        <button className={classes.tableToggleButton} onClick={tableToggleHandler}>
          {
            isTableOpened ? "🔼" : "🔽"
          }
        </button>
      </div>
      {
        isTableOpened ?
         <CityItemTable itemData={itemData}></CityItemTable> : ""
      }
      {
        isTableOpened ?
        <CItyDescTable descData={descData}></CItyDescTable> : ""
      }
    </ul>
  );
};

export default CityItemList;