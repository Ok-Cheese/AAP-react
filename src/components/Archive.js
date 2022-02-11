/* global kakao */
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import LogoHeader from './LogoHeader.js';
import Information from './Information.js';
import Loading from './Loading.js';
import itemData from '../data/item.js';
import logo from '../imgs/logo_letter_border.png';
import styles from './style/Archive.module.css';
import ArchiveList from './ArchiveList.js';

function Archive() {
  const [load, setLoad] = useState(false);

  const id = useParams().id;

  const latLon = {
    "01": [37.56565117391511, 126.97802884615828],
    "02": [37.45634518220743, 126.70591569796464],
    "03": [36.3506813476847, 127.38482942677764],
    "04": [35.874152514881764, 128.60107525663113],
    "05": [35.179885065470344, 129.0749567679195],
    "06": [35.96842717961212, 126.73799108259405],
    "07": [34.81202287181826, 126.39220869791285],
    "08": [37.429569555820215, 127.25515282679928],
    "09": [39.02996489523854, 125.74193254201009],
    "10": [41.79141638008713, 129.78587875223323],
    "11": [40.10909571963557, 124.35265900143106],
    "12": [39.98958399088236, 127.60446093583046],
    "13": [39.15260516930561, 127.44150024696026],
  }

  const cityData = itemData[+id - 1]["items"];
  const [coord, setCoord] = useState([latLon[id][0], latLon[id][1]]);

  // 카카오 맵
  const kakaoMap = useRef();
  const options = {
    center: new kakao.maps.LatLng(coord[0], coord[1]),
    level: 3
  };

  useEffect(() => {
    setLoad(false);
    setTimeout(() => {
      setLoad(true);
    }, 2000);


    setCoord([latLon[id][0], latLon[id][1]]);
    options["center"] = new kakao.maps.LatLng(coord[0], coord[1]);
  }, [id]);

  function renderMap() {
    const map = new kakao.maps.Map(kakaoMap.current, options);
    for (let i = 0; i < cityData.length; i++) {
      const lat = +cityData[i]["latitude"];
      const lon = +cityData[i]["longitude"];
      const position = new kakao.maps.LatLng(lat, lon);
      const marker = new kakao.maps.Marker({
        map: map,
        position: position
      })
      marker.setMap(map);
    }
  }
  
  
  const [sideClosed, setSideClosed] = useState(true);

  const [selectedItemData, setSeletecItemData] = useState({
    "title": cityData[0].name,
    "subtitle": cityData[0].subName + " " + `(${cityData[0].year})`,
    "desc": cityData[0].desc,
    "img1": cityData[0].informImage1,
    "img2": cityData[0].informImage2,
    "img3": cityData[0].informImage3
  });

  function handleItemClick(selectedId) {
    let selectedItem;
    for (let x of cityData) {
      if (x.id === selectedId) {
        selectedItem = x;
        break;
      }
    }
    setSeletecItemData({
      "title": selectedItem.name,
      "subtitle": selectedItem.subName + " " + selectedItem.year,
      "desc": selectedItem.desc,
      "img1": selectedItem.informImage1,
      "img2": selectedItem.informImage2,
      "img3": selectedItem.informImage3
    });

    setSideClosed(false);

    const lat = +selectedItem.latitude;
    const lon = +selectedItem.longitude;
    /* options["level"] = 1;
    options["center"] = new kakao.maps.LatLng(lat, lon);
    renderMap(); */
  }
  
  return (
    <main>
      {
        load ? 
          <div className={styles.outer}>
            <LogoHeader></LogoHeader>
            <section className={styles.container_map} onLoad={renderMap}>
              <ArchiveList propFunc={handleItemClick} id={id}></ArchiveList>
              <div id="map" 
                ref={kakaoMap}
                className={styles.map}
              ></div>
              <img className={styles.logo} src={logo}></img>
              <Information
                title={selectedItemData.title}
                subtitle={selectedItemData.subtitle}
                desc={selectedItemData.desc}
                img1={selectedItemData.img1}
                img2={selectedItemData.img2}
                img3={selectedItemData.img3}
                closed={sideClosed}
                propFunc={setSideClosed}
              ></Information>
            </section>
          </div> : <Loading cityData={cityData} />
      }
    </main>
  );
}

export default Archive;