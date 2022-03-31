import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import SideInformPage from './SideInformPage/SideInformPage.js';

import Header from '../UI/Header.js';
import ArchiveList from './List/ArchiveList.js';
import ArchiveMapContainer from './Map/ArchiveMapContainer.js';
import classes from './Archive.module.css';

import archiveContext from '../../context/archiveContext.js';
import { getData } from '../../modules/firebase.js';
import cityCoordsData from '../../data/cityCoordsData.js';

function Archive() {
  const cityId = useParams().cityId;

  const [isDataLoading, setIsDataLoading] = useState(true);
  const [currentCityItems, setCurrentCityItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState([currentCityItems])
  const [centerCoord, setCenterCoord] = useState(cityCoordsData[cityId]);
  const [isSidePageOpened, setIsSidePageOpened] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
    setCenterCoord(cityCoordsData[cityId]);
    if (loadedCityItems) {
      const firstKey = Object.keys(loadedCityItems)[0];
      setSelectedItem(loadedCityItems[firstKey]);
    }
  }, [cityId]);

  function loadCityItemData() {
    return new Promise((resolve, reject) => {
      const response = getData(`/cityItems/${cityId}/items`);
      if (response) resolve(response);
    })
  }

  function onItemClickHandler(clickedItem) {
    setSelectedItem(clickedItem);
    setCenterCoord([+clickedItem.latitude, +clickedItem.longitude]);
  }

  const archiveContextValue = {
    cityId,
    currentCityItems,
    selectedItem,
    centerCoord,
    isSidePageOpened,
    isFilterOpen,
    filterState,
    setCurrentCityItems,
    setSelectedItem,
    setCenterCoord,
    setIsSidePageOpened,
    setIsFilterOpen,
    setFilterState,
    onItemClickHandler,
  };

  return (
    <archiveContext.Provider value={archiveContextValue}>
      <div className={classes.outer}>
        <Header></Header>
        <section className={classes.container__map}>
          <ArchiveList></ArchiveList>
          <ArchiveMapContainer />
          <SideInformPage></SideInformPage>
        </section>
      </div>
    </archiveContext.Provider>
  );
}

export default Archive;