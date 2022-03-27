import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import classes from './ArchiveMap.module.css';

import cityCoordsData from '../../data/cityCoordsData';
import checkFilterCondition from "../../modules/checkFilterCondition";
import markerHeritage from '../../imgs/marker_heritage.png';
import markerNonHeritage from '../../imgs/marker_non_heritage.png';

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
          <MapMarker 
            key={item.id}
            position={{
              lat: item.latitude,
              lng: item.longitude
            }}
            image={{
              src: item.heritage === "1" ? markerHeritage : markerNonHeritage,
              size: { width: 40, height: 60 },
              options: { offset: { x: 35, y: 70 } }
            }}
          />
        )
      }
    });

  return (
    <Map
      className={classes.kakaoMap}
      center={{
        lat: centerCoord[0],
        lng: centerCoord[1],
      }}
      level={5}
    >
      {itemMarkers}
    </Map>
  )
}

export default ArchiveMap;