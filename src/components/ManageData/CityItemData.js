import { useState } from 'react';

import DescTable from './DescTable';
import ItemTable from './ItemTable';
import classes from './CityItemData.module.css';

import { getData } from '../../modules/firebase';

const CityItemData = (props) => {
  const [isTableOpened, setIsTableOpend] = useState(false);
  const [cityData, setCityItemData] = useState([]);

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
      setCityItemData(loadedCityData);
    }

    setIsTableOpend(current => !current);
  }

  return (
    <section className={classes.cityItemData}>
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
         <ItemTable itemData={itemData}></ItemTable> : ""
      }
      {
        isTableOpened ?
        <DescTable descData={descData}></DescTable> : ""
      }
    </section>
  );
};

export default CityItemData;