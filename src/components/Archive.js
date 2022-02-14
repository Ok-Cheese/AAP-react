/* global kakao */
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import LogoHeader from './LogoHeader.js';
import Information from './Information.js';
import Loading from './Loading.js';
import itemData from '../data/item.js';
import logo from '../imgs/logo_letter_border.png';
import emptyImg from '../imgs/logo_empty.png';
import markerH from '../imgs/marker_heritage.png';
import markerB from '../imgs/marker_non_heritage.png';
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
  const [filterOepn, setFilterOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    "공공": true,
    "금융": true,
    "상업": true,
    "교육": true,
    "주거": true,
    "현존": true,
    "소실": true,
    "문화재": false,
    "비문화재": true,
  })

  // 카카오 맵
  const kakaoMap = useRef();
  const options = {
    center: new kakao.maps.LatLng(coord[0], coord[1]),
    level: 5,
  };

  useEffect(() => {
    // 로딩 시간과 맞출 것
    setLoad(false);
    setTimeout(() => {
      setLoad(true);
    }, 2000);


    setCoord([latLon[id][0], latLon[id][1]]);
    options["center"] = new kakao.maps.LatLng(latLon[id][0], latLon[id][1]);
    // 로딩 시간과 맞출 것
    setTimeout(() => {
      renderMap();
    }, 2000);
  }, [id]);
  

  function renderMap(inputFilterData, coordArr) {
    const map = new kakao.maps.Map(kakaoMap.current, options);
    if (coordArr) {
      // 기본 1초 지연
      setTimeout(() => {
        const lat = +coordArr[0];
        const lon = +coordArr[1];
        map.panTo(new kakao.maps.LatLng(lat, lon));
      }, 1000);
      setTimeout(() => {
        setSideClosed(false);    
      }, 2000)
    }

    for (let i = 0; i < cityData.length; i++) {
      let data = inputFilterData;
      if (!data) {
        data = filterData;
      }
      if (
        data[cityData[i].role]
        || (cityData[i].heritage === "1" && data["문화재"])
        || (cityData[i].heritage === "0" && data["비문화재"])
        || (cityData[i].existence === "1" && data["현존"])
        || (cityData[i].existence === "0" && data["소실"])
      ){
        renderMarkers();
      } else {
        continue;  
      }

      function renderMarkers() {
        const markerSrc = cityData[i].heritage === "1" ? markerH : markerB;
        const markerSize = new kakao.maps.Size(40, 60);
        const markerOption = { offset: new kakao.maps.Point(35, 70)};
        const markerImage 
          = new kakao.maps.MarkerImage(markerSrc, markerSize, markerOption);
        const lat = +cityData[i]["latitude"];
        const lon = +cityData[i]["longitude"];
        const position = new kakao.maps.LatLng(lat, lon);
        const marker = new kakao.maps.Marker({
          image: markerImage,
          position: position
        })
        marker.setMap(map);
  
        const link = cityData[i].imageId ?
          `https://drive.google.com/uc?export=download&id=${cityData[i].imageId.split('/')[5]}`
          : emptyImg;
          
        const content = `
          <div 
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width:10vw;
              height:15vh;
              border: 3px solid gray;
              border-radius:10px;
              background-color:rgba(255,255,255,0.8);
              padding:3%;
              transition: 0.1s;
            "
          >
            <img src="${link}" style="width:100%; height: 80%"></img>
            <span 
              style="
                width:100%; 
                height:15%; 
                font-size: 1rem; 
                font-weight:bold;
                text-align:center;
              "
            >
            ${cityData[i].name}</span>
          </div>
        `;
  
        const customOverlay = new kakao.maps.CustomOverlay({
          position: position,
          content: content,
          yAnchor: 1.55,
          xAnchor: 0.6,
        })
        kakao.maps.event.addListener(
          marker, 'mouseover', mouseOverListener(map, customOverlay));
        kakao.maps.event.addListener(
          marker, 'mouseout', mouseOutListener(customOverlay));
        kakao.maps.event.addListener(marker, 'click', mouseClickListener);
      }
      function mouseOverListener(map, customOverlay) {
        return () => {
          customOverlay.setMap(map);
        }
      }
      function mouseOutListener(customOverlay) {
        return () => {
          customOverlay.setMap(null);
        }
      }
      function mouseClickListener() {
        const lat = +cityData[i].latitude;
        const lon = +cityData[i].longitude;
        map.panTo(new kakao.maps.LatLng(lat, lon));

        setTimeout(() => {
          setSideClosed(false);
        }, 1000);

        setSeletecItemData({
          "title": cityData[i].name,
          "subtitle": cityData[i].subName + " " + cityData[i].year,
          "desc": cityData[i].desc,
          "img0": cityData[i].imageId,
          "img1": cityData[i].informImage1,
          "img2": cityData[i].informImage2,
          "img3": cityData[i].informImage3
        })
      }
    }
  }
  
  
  const [sideClosed, setSideClosed] = useState(true);

  const [selectedItemData, setSeletecItemData] = useState({
    "title": cityData[0].name,
    "subtitle": cityData[0].subName + " " + `(${cityData[0].year})`,
    "desc": cityData[0].desc,
    "img0": cityData[0].imageId,
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
      "img0": selectedItem.imageId,
      "img1": selectedItem.informImage1,
      "img2": selectedItem.informImage2,
      "img3": selectedItem.informImage3
    });

    const lat = +selectedItem.latitude;
    const lon = +selectedItem.longitude;
    renderMap(filterData, [lat, lon]);
  }
  
  function preloading() {
    const result = [];
    for (let i = 0; i < cityData.length; i++) {
      const link1 = cityData[i].imageId ?
        `https://drive.google.com/uc?export=download&id=${cityData[i].imageId.split('/')[5]}`
        : emptyImg;
      const link2 = cityData[i].imageId ?
      `https://drive.google.com/uc?export=download&id=${cityData[i].informImage1.split('/')[5]}`
      : emptyImg;
      const link3 = cityData[i].imageId ?
      `https://drive.google.com/uc?export=download&id=${cityData[i].informImage2.split('/')[5]}`
      : emptyImg;
      const link4 = cityData[i].imageId ?
      `https://drive.google.com/uc?export=download&id=${cityData[i].informImage3.split('/')[5]}`
      : emptyImg;
        result.push(
        <div>
          <img
            key={i + "A"}
            className={styles.preload_img}
            src={link1}
          />
          <img
            key={i + "B"}
            className={styles.preload_img}
            src={link2}
          />
          <img
            key={i + "C"}
            className={styles.preload_img}
            src={link3}
          />
          <img
            key={i + "D"}
            className={styles.preload_img}
            src={link4}
          />
        </div>
      )
    }
    console.log(result);
    return result;
  }

  return (
    <main>
      {
        load ? 
          <div className={styles.outer}>
            <LogoHeader></LogoHeader>
            <div className={styles.preload_imgs}>
              {preloading()}
            </div>
            <section className={styles.container_map}>
              <ArchiveList 
                propFunc={handleItemClick}
                id={id}
                filterData={filterData}
                filterOepn={filterOepn}
                setFilterData={setFilterData}
                setFilterOpen={setFilterOpen}
                onFilterChange={renderMap}
              ></ArchiveList>
              <div id="map" 
                ref={kakaoMap}
                className={styles.map}
              ></div>
              <img className={styles.logo} src={logo}></img>
              <Information
                title={selectedItemData.title}
                subtitle={selectedItemData.subtitle}
                desc={selectedItemData.desc}
                img0={selectedItemData.img0}
                img1={selectedItemData.img1}
                img2={selectedItemData.img2}
                img3={selectedItemData.img3}
                closed={sideClosed}
                propFunc={setSideClosed}
              ></Information>
            </section>
          </div> : <Loading cityData={cityData} propFunc={preloading} />
      }
    </main>
  );
}

export default Archive;