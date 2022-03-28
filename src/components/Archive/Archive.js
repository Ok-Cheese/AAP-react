import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SideInformPage from './SideInformPage/SideInformPage.js';

import ArchiveList from './ArchiveList.js';
import Header from '../../UI/Header.js';
import ArchiveMapContainer from './ArchiveMapContainer.js';
import classes from './Archive.module.css';

import cityCoordsData from '../../data/cityCoordsData.js';

function Archive() {
  const cityId = useParams().cityId;

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [currentCityItems, setCurrentCityItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([currentCityItems])
  const [centerCoord, setCenterCoord] = useState(cityCoordsData[cityId]);
  const [isSidePageOpened, setIsSidePageOpened] = useState(false);
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

  useEffect(async () => {
    const loadedCityItems = await loadCityItemData();
    setCurrentCityItems(loadedCityItems);
    setSelectedItem(loadedCityItems[0]);
  }, [cityId]);

  async function loadCityItemData() {
    const dataURL = `https://aap-react-64aa0-default-rtdb.firebaseio.com/${cityId}/items.json`;
    const response = await fetch(dataURL);
    const result = await response.json();

    setIsDataLoading(false);
    return result;
  }

  function onItemClickHandler(clickedItemItem) {
    setSelectedItem(clickedItemItem);
    setCenterCoord([+clickedItemItem.latitude, +clickedItemItem.longitude]);
  }

  function toggleSidePage() {
    setIsSidePageOpened(current => !current);
  }

  return (
    <main>
      <div className={classes.outer}>
        <Header></Header>
        <section className={classes.container_map}>
          <ArchiveList
            cityId={cityId}
            currentCityItems={currentCityItems}
            filterState={filterState}
            setFilterState={setFilterState}
            onItemClickHandler={onItemClickHandler}
          ></ArchiveList>
          {
            currentCityItems !== undefined &&
            <ArchiveMapContainer 
              cityId={cityId}
              centerCoord={centerCoord}
              currentCityItems={currentCityItems}
              filterState={filterState}
              onItemClickHandler={onItemClickHandler}
            />
          }
          <SideInformPage
            selectedItem={selectedItem}
            isSidePageOpened={isSidePageOpened}
            toggleSidePage={toggleSidePage}
          ></SideInformPage>
        </section>
      </div>
    </main>
  );
}

export default Archive;