import { useContext } from 'react';

import classes from './SidePageDesc.module.css';

import archiveContext from '../../../context/archiveContext';

const SidePageDesc = () => {
  const archiveContextValue = useContext(archiveContext);

  return (
    <div className={classes.container__desc}>
      <p className={classes.desc}>{archiveContextValue.selectedItem.desc}</p>
    </div>
  );
};

export default SidePageDesc;