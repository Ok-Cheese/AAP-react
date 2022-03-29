import { useState, useContext } from 'react';

import ArcvhiveListItem from './ArchiveListItem';
import classes from './ArchiveItem.module.css';

import archiveContext from '../../../context/archiveContext';
import checkFilterCondition from '../../../modules/checkFilterCondition';

const ArchiveItem = (props) => {
  const archiveContextValue = useContext(archiveContext);

  const cityItems = archiveContextValue.currentCityItems ? archiveContextValue.currentCityItems : [];


  const renderItemList = () => {
    const result = [];
    for (let item of cityItems) {
      if (
        checkFilterCondition('role', item, archiveContextValue.filterState)
        && checkFilterCondition('existence', item, archiveContextValue.filterState)
        && checkFilterCondition('heritage', item, archiveContextValue.filterState)
      ) {
        result.push(
          <ArcvhiveListItem 
            key={item.id}
            itemData={item}
            className={classes.item}
          />
        )
      }
    }
    if (result.length < 1) {
      return (<span className={classes.empty_list}>조건에 맞는 건물이 없습니다.</span>)
    }
    return result;
  }

  return (renderItemList());
}

export default ArchiveItem;