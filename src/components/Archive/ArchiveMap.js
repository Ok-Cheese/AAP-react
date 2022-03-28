import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import ItemMarkerContainer from './ItemMarkerContainer';
import classes from './ArchiveMap.module.css';

import checkFilterCondition from "../../modules/checkFilterCondition";

const ArchiveMap = (props) => {
  const [mapLevel, setMapLevel] = useState(5);

  const itemMarkers = props.currentCityItems.map(item => {
    if (
      checkFilterCondition('role', item, props.filterState)
      && checkFilterCondition('heritage', item, props.filterState)
      && checkFilterCondition('existence', item, props.filterState)
    ) {
      return (
        <ItemMarkerContainer 
          key={item.id}
          item={item}
          onItemClickHandler={onMarkerClickHandler}
        />
      )
    }
  });

  function onMarkerClickHandler(clickedItem) {
    props.onItemClickHandler(clickedItem);
  }

  return (
    <Map
      className={classes.kakaoMap}
      center={{
        lat: props.centerCoord[0],
        lng: props.centerCoord[1],
      }}
      level={mapLevel}
      isPanto={true}
    >
      {itemMarkers}
    </Map>
  )
}

export default ArchiveMap;