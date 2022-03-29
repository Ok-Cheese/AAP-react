import { useContext, useState } from 'react';

import ArchiveItem from './ArchiveItem.js';
import ArchiveListFilter from '../Filter/ArchiveListFilter.js';
import classes from './ArchiveList.module.css';

import archiveContext from '../../../context/archiveContext.js';

function ArchiveList(props) {
  const archiveContextValue = useContext(archiveContext);

  function toggleFilter() {
    archiveContextValue.setIsFilterOpen(current => !current);
  }

  return (
    <ul className={classes.archiveList}>
      <ArchiveItem></ArchiveItem>
      <ArchiveListFilter/>
    </ul>
  )
}

export default ArchiveList;