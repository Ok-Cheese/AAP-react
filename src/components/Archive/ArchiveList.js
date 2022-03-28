import { useEffect, useState } from 'react';

import ArchiveItem from './ArchiveItem.js';
import ArchiveListFilter from './Filter/ArchiveListFilter.js';
import classes from './ArchiveList.module.css';

function ArchiveList(props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* useEffect(() => {
    for (let key of Object.keys(props.filterData)) {
      if (props.filterData[key]) {
        const target = document.getElementsByName(key);
        target[0].checked = true;
      }
    }
  }, [isFilterOepn]); */

  function toggleFilter() {
    setIsFilterOpen(current => !current);
  }

  return (
    <ul className={classes.archiveList}>
      <ArchiveItem
        currentCityItems={props.currentCityItems}
        filterState={props.filterState}
        onItemClickHandler={props.onItemClickHandler}
      >
      </ArchiveItem>
      <ArchiveListFilter
        filterState={props.filterState}
        setFilterState={props.setFilterState}
        isFilterOpen={isFilterOpen}
        toggleFilter={toggleFilter}
      />
    </ul>
  )
}

export default ArchiveList;