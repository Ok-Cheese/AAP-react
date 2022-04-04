import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../UI/Header/Header';
import ArchiveList from './List/ArchiveList.js';
import ArchiveMapContainer from './Map/ArchiveMapContainer.js';
import SideInformPage from './SideInformPage/SideInformPage.js';
import classes from './Archive.module.css';

import { getData } from '../../modules/firebase_RealTimeDB';
import archiveContext from '../../context/archiveContext.js';
import cityCoordsData from '../../data/cityCoordsData.js';

const Archive = () => {
  const cityId = useParams().cityId;
  const [currentCityItemData, setCurrentCityItemData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([currentCityItemData])
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

  useEffect(() => {
    loadCityItemData(cityId);
  }, [cityId]);

  async function loadCityItemData(cityId) {
    const loadedCurrentCityItemData = await getData(`/cityItems/${cityId}/items`);
    setCurrentCityItemData(loadedCurrentCityItemData);
    setCenterCoord(cityCoordsData[cityId]);

    if (loadedCurrentCityItemData) {
      const firstItemId = Object.keys(loadedCurrentCityItemData)[0];
      setSelectedItem(loadedCurrentCityItemData[firstItemId]);
    }
  }

  function onItemClickHandler(clickedItem) {
    setSelectedItem(clickedItem);
    setCenterCoord([+clickedItem.latitude, +clickedItem.longitude]);
  }

  const archiveContextValue = {
    cityId,
    currentCityItemData,
    selectedItem,
    centerCoord,
    isSidePageOpened,
    isFilterOpen,
    filterState,
    setCurrentCityItemData,
    setSelectedItem,
    setCenterCoord,
    setIsSidePageOpened,
    setIsFilterOpen,
    setFilterState,
    onItemClickHandler,
  };

  return (
    <archiveContext.Provider value={archiveContextValue}>
        <Header></Header>
        <section className={classes.container__archiveContent}>
          <ArchiveList></ArchiveList>
          <ArchiveMapContainer />
          <SideInformPage></SideInformPage>
        </section>
    </archiveContext.Provider>
  );
}

export default Archive;