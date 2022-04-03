import { useContext, useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";

import archiveContext from "../../../context/archiveContext";
import markerHeritage from '../../../imgs/marker_heritage.png';
import markerNonHeritage from '../../../imgs/marker_non_heritage.png';

const ArchiveMapMarker = (props) => {
  const [isMouseOn, setIsMouseOn] = useState(false);

  const archiveContextValue = useContext(archiveContext);

  function onClickHandler() {
    archiveContextValue.onItemClickHandler(props.item);
  }

  function onMouseOverHandler() {
    setIsMouseOn(true);
  }

  function onMouseOutHandler() {
    setIsMouseOn(false);
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
      size: isMouseOn ? { width: 46, height: 69 } : { width: 40, height: 60 },
      options: { offset: isMouseOn ? { x: 37.5, y: 80 } : { x: 35, y: 70 } }
    }}
    clickable={true}
    onClick={onClickHandler}
    onMouseOver={onMouseOverHandler}
    onMouseOut={onMouseOutHandler}
  />
 );
};

export default ArchiveMapMarker;