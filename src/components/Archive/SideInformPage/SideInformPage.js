import { useContext } from 'react';

import SidePageButton from './SidePageButton';
import SidePageContent from './SidePageContent';
import classes from './SideInformPage.module.css';

import archiveContext from '../../../context/archiveContext';

const SideInformPage = () => {
  const archiveContextValue = useContext(archiveContext);

  return (
    <div 
      className={classes.sideInformPage} 
      style={{ left: archiveContextValue.isSidePageOpened ? "30%" : "100%" }}
    >
      <SidePageButton/>
      <SidePageContent/>
    </div>
  );
};

export default SideInformPage;