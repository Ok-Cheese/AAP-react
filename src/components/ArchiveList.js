import { useEffect, useState } from 'react';
import itemData from '../data/item.js';
import ArchiveItem from './ArchiveItem.js';
import styles from './style/ArchiveList.module.css';

function ArchiveList(props) {

  const cityData = itemData[+props.id - 1]["items"];
  useEffect(() => {
    for (let key of Object.keys(props.filterData)) {
      if (props.filterData[key]) {
        const target = document.getElementsByName(key);
        target[0].checked = true;
      }
    }
  }, [props.filterOepn]);

  function handleFilter() {
    props.setFilterOpen(current => !current);
  }
  function handleCheck(e) {
    const stringified = JSON.stringify(props.filterData);
    const newData = JSON.parse(stringified);
    newData[e.target.name] = !newData[e.target.name];
    props.setFilterData(newData);
    props.onFilterChange(newData);
    console.log('run');
  }
  return (
    <ul className={styles.lists}>
      <ArchiveItem 
        propFunc={props.propFunc} 
        cityData={cityData}
        filterData={props.filterData}
      >
      </ArchiveItem>
      {
        props.filterOepn ? 
          <div>
            <button onClick={handleFilter}>➖</button>
            <div className={styles.filter_opened}>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="공공"
                  onClick={handleCheck}
                ></input>
                <span>공공</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="금융"
                  onClick={handleCheck}
                ></input>
                <span>금융</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="상업"
                  onClick={handleCheck}
                ></input>
                <span>상업</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="교육"
                  onClick={handleCheck}
                ></input>
                <span>교육</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="주거"
                  onClick={handleCheck}
                ></input>
                <span>주거</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="현존"
                  onClick={handleCheck}
                ></input>
                <span>현존</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="소실"
                  onClick={handleCheck}
                ></input>
                <span>멸실</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="문화재"
                  onClick={handleCheck}
                ></input>
                <span>문화재</span>
              </div>
              <div className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="비문화재"
                  onClick={handleCheck}
                ></input>
                <span>비문화재</span>
              </div>
            </div>
          </div>
          :
          <div>
            <button onClick={handleFilter}>➕</button>
            <div className={styles.filter_closed}>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="공공"
                  onClick={handleCheck}
                ></input>
                <span>공공</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="금융"
                  onClick={handleCheck}
                ></input>
                <span>금융</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="상업"
                  onClick={handleCheck}
                ></input>
                <span>상업</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="교육"
                  onClick={handleCheck}
                ></input>
                <span>교육</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="주거"
                  onClick={handleCheck}
                ></input>
                <span>주거</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="현존"
                  onClick={handleCheck}
                ></input>
                <span>현존</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="소실"
                  onClick={handleCheck}
                ></input>
                <span>소실</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="문화재"
                  onClick={handleCheck}
                ></input>
                <span>문화재</span>
              </div>
              <div hidden className={styles.selection_set}>
                <input 
                  type="checkbox" 
                  name="비문화재"
                  onClick={handleCheck}
                ></input>
                <span>비문화재</span>
              </div>
            </div>
          </div>   
      }
    </ul>
  )
}

export default ArchiveList;