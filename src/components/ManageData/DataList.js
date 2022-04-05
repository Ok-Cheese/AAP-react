import { useState } from 'react';

import DataManagePanel from './DataManagePanel';
import CityItemData from './CityItemData';
import AddDataModal from './DataModals/AddDataModal';
import EditDataModal from './DataModals/EditDataModal';
import RemoveDataModal from './DataModals/RemoveDataModal';
import classes from './DataList.module.css';

import cityIdData from '../../data/cityIdData';
import cityNameData from '../../data/cityNameData';

const DataList = () => {
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [isRemoveModalOpened, setIsRemoveModalOpened] = useState(false);

  const cityList = [];
  for (let i = 0; i < cityIdData.length; i++) {
    const cityId = cityIdData[i];
    const cityName = cityNameData[i];
    cityList.push(
      <CityItemData key={cityId} cityId={cityId} cityName={cityName}/>
    )
  }

  return (
    <section className={
      classes.dataControl 
      + (isAddModalOpened || isEditModalOpened || isRemoveModalOpened ?
          ` ${classes.scrollBlock}` : "")
    }>
      <div className={classes.dataList}>
        {cityList}
        <DataManagePanel
          onAddClick={setIsAddModalOpened}
          onEditClick={setIsEditModalOpened}
          onRemoveClick={setIsRemoveModalOpened}
        />
      </div>
      { 
          isAddModalOpened ? 
            <AddDataModal
              onClose={() => { setIsAddModalOpened(false) }}
            ></AddDataModal> : "" 
        }
        { 
          isEditModalOpened ? 
            <EditDataModal
              onClose={() => { setIsEditModalOpened(false) }}
            ></EditDataModal> : "" 
        }
        { 
          isRemoveModalOpened ? 
            <RemoveDataModal
              onClose={() => { setIsRemoveModalOpened(false) }}
            ></RemoveDataModal> : "" 
        }
    </section>
  );
};

export default DataList;