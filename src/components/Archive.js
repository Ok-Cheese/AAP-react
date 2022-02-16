/* global kakao */
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import LogoHeader from './LogoHeader.js';
import Information from './Information.js';
import Loading from './Loading.js';
import itemData from '../data/item.js';
import logo from '../imgs/logo_border.jpg';
import emptyImg from '../imgs/logo_empty.png';
import markerH from '../imgs/marker_heritage.png';
import markerB from '../imgs/marker_non_heritage.png';
import legendH from '../imgs/legend_heritage.png';
import legendB from '../imgs/legend_non_heritage.png';
import styles from './style/Archive.module.css';
import ArchiveList from './ArchiveList.js';

function Archive() {
  const [load, setLoad] = useState(false);

  const id = useParams().id;

  const latLon = {
    "01": [37.56565117391511, 126.97802884615828],
    "02": [37.47368254306729, 126.62159900732166],
    "03": [36.32763002093959, 127.42368049653705],
    "04": [35.871653424063766, 128.6010600506663],
    "05": [35.09805578905904, 129.03620934559444],
    "06": [35.987533938696394, 126.71149659960581],
    "07": [34.78753148889084, 126.38219983202765],
    "08": [35.14514172561415, 126.91745588072244],
    "09": [39.01687898412967, 125.74740012181566],
    "10": [41.78260845483389, 129.82547863209868],
    "11": [40.10444829002156, 124.39294147170328],
    "12": [39.91611996290939, 127.53146637211736],
    "13": [39.17259875116029, 127.42874326829241],
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
    "문화재": true,
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
    }, 1000);


    setCoord([latLon[id][0], latLon[id][1]]);
    options["center"] = new kakao.maps.LatLng(latLon[id][0], latLon[id][1]);
    // 로딩 시간과 맞출 것
    setTimeout(() => {
      renderMap();
    }, 1000);
    setSideClosed(true);
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
        `https://lh3.googleusercontent.com/d/${cityData[i].imageId.split('/')[5]}=s500?authuser=0`
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
          "img2": cityData[i].informImage2
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
    console.log(selectedItem);
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
      `https://lh3.googleusercontent.com/d/${cityData[i].imageId.split('/')[5]}=s500?authuser=0`
        : emptyImg;
      const link2 = cityData[i].informImage1 ?
      `https://lh3.googleusercontent.com/d/${cityData[i].informImage1.split('/')[5]}=s500?authuser=0`
      : emptyImg;
      const link3 = cityData[i].informImage2 ?
      `https://lh3.googleusercontent.com/d/${cityData[i].informImage2.split('/')[5]}=s500?authuser=0`
      : emptyImg;
        result.push(
        <div key={i}>
          <img
            className={styles.preload_img}
            src={link1}
          />
          <img
            className={styles.preload_img}
            src={link2}
          />
          <img
            className={styles.preload_img}
            src={link3}
          />
        </div>
      )
    }
    return result;
  }

  return (
    <main>
      {
        load ? 
          <div className={styles.outer}>
            <LogoHeader
              closed={sideClosed}
            ></LogoHeader>
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
              <div className={styles.legend}>
                <div className={styles.legend_row}>
                  <img src={legendH} className={styles.icon_legend}></img>
                  <span>문화재</span>
                </div>
                <div className={styles.legend_row}>
                  <img src={legendB} className={styles.icon_legend}></img>
                  <span>비문화재</span>
                </div>
              </div>
              <Information
                title={selectedItemData.title}
                subtitle={selectedItemData.subtitle}
                desc={selectedItemData.desc}
                img0={selectedItemData.img0}
                img1={selectedItemData.img1}
                img2={selectedItemData.img2}
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