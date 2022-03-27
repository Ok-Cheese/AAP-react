/* global kakao */
import { useState, useEffect, useRef, Fragment } from "react";
import { createRoutesFromChildren, useParams } from 'react-router-dom';
import { useAsync } from "react-async";

import MapIndex from './MapIndex';
import centerCoords from '../../data/centerCoords';
import logo from '../../imgs/logo_border.jpg';
import markerHeritage from '../../imgs/marker_heritage.png';
import markerNonHeritage from '../../imgs/marker_non_heritage.png';
import classes from './ArchiveMap.module.css';

import checkFilterCondition from "../../modules/checkFilterCondition";

const ArchiveMap = (props) => {
  const kakaoMap = document.getElementById('kakaoMap');

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
  }, [kakaoMap, props.cityId, props.currentCityItems]);

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
  };

  return (
    <Fragment>
      <div
        id="kakaoMap"
        className={classes.archiveMap}
      ></div>
      <img className={classes.logo__map}src={logo}></img>
      <MapIndex></MapIndex>
    </Fragment>
  )
}

export default ArchiveMap;