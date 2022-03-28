/* global kakao */
import ArchiveMap from './ArchiveMap';
import MapIndex from './MapIndex';
import classes from './ArchiveMapContainer.module.css';

import logo from '../../imgs/logo_border.jpg';

const ArchiveMapContianer = (props) => {
  return (
    <div className={classes.contianer__map}>
      <ArchiveMap
        cityId={props.cityId}
        centerCoord={props.centerCoord}
        currentCityItems={props.currentCityItems}
        filterState={props.filterState}
        onItemClickHandler={props.onItemClickHandler}
      />
      <img className={classes.logo__map}src={logo}></img>
      <MapIndex></MapIndex>
    </div>
  )
}

export default ArchiveMapContianer;


// code backup
/*   const kakaoMap = document.getElementById('kakaoMap');
  const lat = centerCoords[props.cityId][0];
  const lon = centerCoords[props.cityId][1];
  
  const options = {
    center: new kakao.maps.LatLng(lat, lon),
    level: 5,
  };
  let archiveMap;

  useEffect(() => {
    if (!kakaoMap) return;
    archiveMap = new kakao.maps.Map(kakaoMap, options);
  }, [kakaoMap, props.cityId, props.currentCityItems, props.filterState]);

  useEffect(() => {
    if (!archiveMap) return;
    for (let itemData of props.currentCityItems) {
      if (
        checkFilterCondition('role', itemData, props.filterState)
        && checkFilterCondition('heritage', itemData, props.filterState)
        && checkFilterCondition('existence', itemData, props.filterState)
      ){
        renderMarkers(itemData);
      } else {
        continue;  
      }
    }
  }, [archiveMap, props.cityId, props.currentCityItems, props.filterState]);

  function renderMarkers(itemData) {
    const markerSetting = {
      markerSrc: itemData.heritage === "1" ? markerHeritage : markerNonHeritage,
      markerSize: new kakao.maps.Size(40, 60),
      markerOption: { offset: new kakao.maps.Point(35, 70) }
    }

    const markerImg = new kakao.maps.MarkerImage(
      markerSetting.markerSrc, 
      markerSetting.markerSize, 
      markerSetting.markerOption
    );
    const markerPosition = new kakao.maps.LatLng(itemData["latitude"], itemData["longitude"]);
    
    const newMarker = new kakao.maps.Marker({
      image: markerImg,
      position: markerPosition
    });

    newMarker.setMap(archiveMap);
  }; */