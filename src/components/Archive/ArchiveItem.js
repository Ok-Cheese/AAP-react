import { useState } from 'react';

import ArcvhiveListItem from './ArchiveListItem';
import classes from './ArchiveItem.module.css';

import checkFilterCondition from '../../modules/checkFilterCondition';

const ArchiveItem = (props) => {
  const cityItems = props.currentCityItems ? props.currentCityItems : [];

  const renderItemList = () => {
    const result = [];
    for (let item of cityItems) {
      if (
        checkFilterCondition('role', item, props.filterState)
        && checkFilterCondition('existence', item, props.filterState)
        && checkFilterCondition('heritage', item, props.filterState)
      ) {
        result.push(
          <ArcvhiveListItem 
            key={item.id}
            itemData={item}
            className={classes.item}
            onItemClick={props.onItemClick}
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