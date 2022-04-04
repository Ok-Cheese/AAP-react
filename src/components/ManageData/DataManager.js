import { useState } from 'react';

import Header from '../UI/Header/Header';
import SignIn from './SignIn';
import DataList from './DataList';
import DataManagePanel from './DataManagePanel';
import AddDataModal from './DataModals/AddDataModal';
import EditDataModal from './DataModals/EditDataModal';
import RemoveDataModal from './DataModals/RemoveDataModal';
import classes from './DataManager.module.css';

const DataControl = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isAddModalOpened, setIsAddModalOpened] = useState(false);
  const [isEditModalOpened, setIsEditModalOpened] = useState(false);
  const [isRemoveModalOpened, setIsRemoveModalOpened] = useState(false);

  return (
    <section className={
      classes.dataControl 
      + (isAddModalOpened || isEditModalOpened || isRemoveModalOpened ?
          ` ${classes.scrollBlock}` : "")
    }>
      <Header></Header>
      {
        isSignIn ?
        [
          <DataList />,
          <DataManagePanel
            onAddClick={setIsAddModalOpened}
            onEditClick={setIsEditModalOpened}
            onRemoveClick={setIsRemoveModalOpened}
          />
        ] : <SignIn setIsSignIn={setIsSignIn}></SignIn>
      }
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

export default DataControl;