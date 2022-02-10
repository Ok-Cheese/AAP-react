import { useEffect, useState } from 'react';
import itemData from '../data/item.js';
import ArchiveItem from './ArchiveItem.js';
import styles from './style/ArchiveList.module.css';

function ArchiveList({ id, propFunc }) {
  const cityData = itemData[+id - 1]["items"];

  return (
    <ul className={styles.lists}>
      <div className={styles.list_filter}>
        <button 
          className={styles.filter_btn}
        >문화재</button>
        <button 
          className={styles.filter_btn}
        >비문화재</button>
      </div>
      <ArchiveItem propFunc={propFunc} cityData={cityData}></ArchiveItem>
    </ul>
  )
}

export default ArchiveList;