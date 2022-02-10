import { useState } from 'react';
import styles from './style/ArchiveList.module.css';

function ArchiveList() {
  const [heritage, setHeritage] = useState(true);
  function handleFilter(e) {
    e.target.innerText === "문화재" ? setHeritage(true) : setHeritage(false);
  }
  return (
    <ul className={styles.lists}>
      <div className={styles.list_filter}>
        <button 
          className={styles.filter_btn}
          onClick={handleFilter}
        >문화재</button>
        <button 
          className={styles.filter_btn}
          onClick={handleFilter}
        >비문화재</button>
      </div>
      <li>
        <img></img>
        <span className={styles.cityName}></span>
        <span className={styles.subName}></span>
      </li>
    </ul>
  )
}

export default ArchiveList;