import { useContext } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import ArchiveMapMarker from './ArchiveMapMarker';
import classes from './ArchiveMap.module.css';

import archiveContext from '../../../context/archiveContext';
import checkFilterCondition from "../../../modules/checkFilterCondition";

const ArchiveMap = () => {
  const archiveContextValue = useContext(archiveContext);

  const itemMarkers = [];
  for (let key in archiveContextValue.currentCityItemData) {
    const item = archiveContextValue.currentCityItemData[key];
    if (
      checkFilterCondition('role', item, archiveContextValue.filterState)
      && checkFilterCondition('heritage', item, archiveContextValue.filterState)
      && checkFilterCondition('existence', item, archiveContextValue.filterState)
    ) {
      itemMarkers.push(
        <ArchiveMapMarker 
          key={item.id}
          item={item}
        />
      );
    }
  };

  return (
    <Map
      className={classes.kakaoMap}
      center={{
        lat: archiveContextValue.centerCoord[0],
        lng: archiveContextValue.centerCoord[1],
      }}
      level={5}
      isPanto={true}
    >
      {itemMarkers}
    </Map>
  )
}

export default ArchiveMap;