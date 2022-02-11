import { useEffect, useState } from 'react';
import itemData from '../data/item.js';
import ArchiveItem from './ArchiveItem.js';
import styles from './style/ArchiveList.module.css';

function ArchiveList({ id, propFunc }) {

  const cityData = itemData[+id - 1]["items"];
  const [filterOepn, setFilterOepn] = useState(false);
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

  useEffect(() => {
    for (let key of Object.keys(filterData)) {
      if (filterData[key]) {
        const target = document.getElementsByName(key);
        target[0].checked = true;
      }
    }
  }, [filterOepn]);

  function handleFilter() {
    setFilterOepn(current => !current);
  }
  function handleCheck(e) {
    const stringified = JSON.stringify(filterData);
    const newData = JSON.parse(stringified);
    newData[e.target.name] = !newData[e.target.name];
    setFilterData(newData);
  }
  return (
    <ul className={styles.lists}>
      <ArchiveItem 
        propFunc={propFunc} 
        cityData={cityData}
        filterData={filterData}
      >
      </ArchiveItem>
      {
        filterOepn ? 
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
                <span>소실</span>
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