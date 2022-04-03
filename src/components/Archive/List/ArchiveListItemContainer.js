import { useContext } from 'react';

import ArcvhiveListItem from './ArchiveListItem';
import classes from './ArchiveListItemContainer.module.css';

import archiveContext from '../../../context/archiveContext';
import checkFilterCondition from '../../../modules/checkFilterCondition';

const ArchiveItem = () => {
  const archiveContextValue = useContext(archiveContext);

  const currnetCityItems = archiveContextValue.currentCityItemData ? archiveContextValue.currentCityItemData : [];

  const renderItemList = () => {
    const itemList = [];
    for (let key in currnetCityItems) {
      const item = currnetCityItems[key];
      if (
        checkFilterCondition('role', item, archiveContextValue.filterState)
        && checkFilterCondition('existence', item, archiveContextValue.filterState)
        && checkFilterCondition('heritage', item, archiveContextValue.filterState)
      ) {
        itemList.push(
          <ArcvhiveListItem 
            key={item.id}
            itemData={item}
            className={classes.item}
          />
        );
      }
    }

    if (itemList.length < 1) {
      return (<span className={classes.itemList__empty}>조건에 맞는 건물이 없습니다.</span>);
    }
    
    return itemList;
  }

  return renderItemList();
};

export default ArchiveItem;