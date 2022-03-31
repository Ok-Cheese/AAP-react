import { useContext } from 'react';

import classes from './SidePageTitle.module.css';

import archiveContext from '../../../context/archiveContext';

const SidePageTitle = (props) => {
  const archiveContextValue = useContext(archiveContext);
  return (
    archiveContextValue.selectedItem ? 
    <div className={classes.contianer__title}>
      <span className={classes.title}>{archiveContextValue.selectedItem.name}</span>
      <span className={classes.subtitle}>{archiveContextValue.selectedItem.subName}</span>
    </div> : ""
  )
}

export default SidePageTitle;