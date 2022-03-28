import { useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";

import markerHeritage from '../../imgs/marker_heritage.png';
import markerNonHeritage from '../../imgs/marker_non_heritage.png';

const ItemMarkerContainer = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function onClickHandler(event) {
    props.onItemClickHandler(props.item);
  }

  function onMouseOverHandler() {
    setIsMouseOver(true);
  }

  function onMouseOutHandler() {
    setIsMouseOver(false);
  }

 return (
  <MapMarker 
    id={props.item.id}
    cityId={props.item.cityId}
    position={{
      lat: props.item.latitude,
      lng: props.item.longitude
    }}
    image={{
      src: props.item.heritage === "1" ? markerHeritage : markerNonHeritage,
      size: isMouseOver ? { width: 46, height: 69 } : { width: 40, height: 60 },
      options: { offset: isMouseOver ? { x: 37.5, y: 80 } : { x: 35, y: 70 } }
    }}
    clickable={true}
    onClick={onClickHandler}
    onMouseOver={onMouseOverHandler}
    onMouseOut={onMouseOutHandler}
  />
 )
}

export default ItemMarkerContainer;