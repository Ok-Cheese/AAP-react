import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Information from '../Information.js';

import ArchiveList from './ArchiveList.js';
import Header from '../../UI/Header.js';
import ArchiveMap from './ArchiveMap.js';
import classes from './Archive.module.css';

function Archive() {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [currentCityItems, setCurrentCityItems] = useState([]);
  const [filterState, setFilterState] = useState({
    "공공": true,
    "금융": true,
    "상업": true,
    "교육": true,
    "주거": true,
    "현존": true,
    "소실": true,
    "문화재": true,
    "비문화재": true,
  });

  const cityId = useParams().cityId;
  
  useEffect(async () => {
    setCurrentCityItems(await loadCityItemData());
  }, [cityId]);

  async function loadCityItemData() {
    const dataURL = `https://aap-react-64aa0-default-rtdb.firebaseio.com/${cityId}/items.json`;
    const response = await fetch(dataURL);
    const result = await response.json();

    setIsDataLoading(false);
    return result;
  }

  function handleListItemClick() {}
  function renderMap() {}
  
  return (
    <main>
      <div className={classes.outer}>
        <Header></Header>
        <section className={classes.container_map}>
          <ArchiveList
            onItemClick={handleListItemClick}
            cityId={cityId}
            currentCityItems={currentCityItems}
            filterState={filterState}
            setFilterData={setFilterState}
            onFilterChange={renderMap}
          ></ArchiveList>
          {
            currentCityItems !== undefined &&
            <ArchiveMap 
              cityId={cityId}
              currentCityItems={currentCityItems}
              filterState={filterState}
            />
          }
          {/* <Information
            title={selectedItemData.title}
            subtitle={selectedItemData.subtitle}
            desc={selectedItemData.desc}
            img0={selectedItemData.img0}
            img1={selectedItemData.img1}
            img2={selectedItemData.img2}
            closed={sideClosed}
            propFunc={setSideClosed}
          ></Information> */}
        </section>
      </div>
    </main>
  );
}

export default Archive;