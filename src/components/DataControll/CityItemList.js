import { useState } from 'react';

import CItyDescTable from './CityDescTable';
import classes from './CityItemList.module.css';
import CityItemTable from './CityItemTable';

const CityItemList = (props) => {
  const [isTableOpened, setIsTableOpend] = useState(false);

  const exceptProperties = [
    "imageId", "informImage1", "informImage2", "informImage3", "desc"
  ];

  const itemData = [];
  for (let id in props.cityItems) {
    const newData = {};
    for (let key in props.cityItems[id]) {
      if (exceptProperties.includes(key)) continue;
      else newData[key] = props.cityItems[id][key];
    }
    itemData.push(newData);
  }

  const descData = [];
  for (let id in props.cityItems) {
    const newData = {};
    for (let key in props.cityItems[id]) {
      if (key === "id" || key === "name" || key === "desc") {
        newData[key] = props.cityItems[id][key];
      }
    }
    descData.push(newData);
  }

  function tableToggleHandler() {
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