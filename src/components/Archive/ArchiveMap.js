import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import ItemMarkerContainer from './ItemMarkerContainer';
import classes from './ArchiveMap.module.css';

import cityCoordsData from '../../data/cityCoordsData';
import checkFilterCondition from "../../modules/checkFilterCondition";

const ArchiveMap = (props) => {
  const [centerCoord, setCenterCoord] = useState(cityCoordsData[props.cityId]);

  useEffect(() => {
    setCenterCoord(cityCoordsData[props.cityId]);
  }, [props.cityId]);

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
            onMarkerClick={onMarkerClickHandler}
          />
        )
      }
    });

    function onMarkerClickHandler(clickedItem) {
      setCenterCoord([+clickedItem.latitude, +clickedItem.longitude]);
    }

  return (
    <Map
      className={classes.kakaoMap}
      center={{
        lat: centerCoord[0],
        lng: centerCoord[1],
      }}
      level={5}
      isPanto={true}
    >
      {itemMarkers}
    </Map>
  )
}

export default ArchiveMap;