
import classes from './SidePageDesc.module.css';

import archiveContext from '../../../context/archiveContext';
import { useContext } from 'react';

const SidePageDesc = (props) => {
  const archiveContextValue = useContext(archiveContext);

  return (
    <div className={classes.container__desc}>
      <p className={classes.desc}>{archiveContextValue.selectedItem.desc}</p>
    </div>
  );
}

export default SidePageDesc;