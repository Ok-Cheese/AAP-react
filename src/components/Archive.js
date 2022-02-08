/* global kakao */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LogoHeader from './LogoHeader.js';
import logo from '../imgs/logo_letter_border.png';
import styles from './style/Archive.module.css';
import ArchiveList from './ArchiveList.js';

function Archive() {
  const [city, setCity] = useState('');
  const id = useParams().id;

  const coord = {
    "0A": [37.56565117391511, 126.97802884615828],
    "0B": [37.45634518220743, 126.70591569796464],
    "0C": [36.3506813476847, 127.38482942677764],
    "0D": [35.874152514881764, 128.60107525663113],
    "0E": [35.179885065470344, 129.0749567679195],
    "0F": [35.96842717961212, 126.73799108259405],
    "AA": [34.81202287181826, 126.39220869791285],
    "AB": [37.429569555820215, 127.25515282679928],
    "AC": [39.02996489523854, 125.74193254201009],
    "AD": [41.79141638008713, 129.78587875223323],
    "AE": [40.10909571963557, 124.35265900143106],
    "AF": [39.98958399088236, 127.60446093583046],
    "BA": [39.15260516930561, 127.44150024696026],
  }

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(coord[id][0], coord[id][1]),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  }, [id]);

  const [sideOpen, setSideOpen] = useState(true);
  function handleSideOpen(e) {
    setSideOpen(current => !current);
    const sideWindow = e.target.parentNode;
    sideOpen ? sideWindow.style.left = "30%" : sideWindow.style.left = "100%";
  }

  
  return (
    <div className={styles.outer}>
      <LogoHeader></LogoHeader>
      <section className={styles.container_map}>
        <ArchiveList></ArchiveList>
        <div id="map" className={styles.map}></div>
        <img className={styles.logo} src={logo}></img>

        <div className={styles.container_inform}>
          <button
            className={styles.inform_handle}
            onClick={handleSideOpen}
            >
              { sideOpen ? "◀" : "▶"}
            </button>
          <div className={styles.infromation}></div>
        </div>
      </section>
    </div>
    
  );
}

export default Archive;