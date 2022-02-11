import { useEffect, useState } from 'react';
import itemData from '../data/item.js';
import ArchiveItem from './ArchiveItem.js';
import styles from './style/ArchiveList.module.css';

function ArchiveList({ id, propFunc }) {
  const cityData = itemData[+id - 1]["items"];

  return (
    <ul className={styles.lists}>
      <div hidden className={styles.list_filter}>
      </div>
      <ArchiveItem propFunc={propFunc} cityData={cityData}></ArchiveItem>
    </ul>
  )
}

export default ArchiveList;