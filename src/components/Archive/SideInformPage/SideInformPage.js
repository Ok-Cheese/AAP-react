import { useState, useRef, useEffect } from 'react';

import SidePageButton from './SidePageButton';
import SidePageContent from './SidePageContent';
import classes from './SideInformPage.module.css';

function SideInformPage(props) {
  const sidePage = useRef();
  
  useEffect(() => {
    props.isSidePageOpened ? sidePage.current.style.left = "30%" 
      : sidePage.current.style.left = "100%";
  }, [props.isSidePageOpened]);

  return (
    <div ref={sidePage} className={classes.sideInformPage}>
      <SidePageButton 
        isSidePageOpened={props.isSidePageOpened}
        toggleSidePage={props.toggleSidePage}
      />
      <SidePageContent
        selectedItem={props.selectedItem}
      />
    </div>
  )
}

export default SideInformPage;