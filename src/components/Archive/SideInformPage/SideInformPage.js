import { useRef, useEffect, useContext } from 'react';

import SidePageButton from './SidePageButton';
import SidePageContent from './SidePageContent';
import classes from './SideInformPage.module.css';

import archiveContext from '../../../context/archiveContext';

function SideInformPage(props) {
  const sidePage = useRef();

  const archiveContextValue = useContext(archiveContext);
  
  useEffect(() => {
    archiveContextValue.isSidePageOpened ? sidePage.current.style.left = "30%" 
      : sidePage.current.style.left = "100%";
  }, [archiveContextValue.isSidePageOpened]);

  return (
    <div ref={sidePage} className={classes.sideInformPage}>
      <SidePageButton/>
      <SidePageContent/>
    </div>
  )
}

export default SideInformPage;