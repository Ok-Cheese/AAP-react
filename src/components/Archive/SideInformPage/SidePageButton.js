import { useContext } from 'react';

import classes from './SidePageButton.module.css';

import archiveContext from '../../../context/archiveContext';

const SidePageButton = (props) => {
  const archiveContextValue = useContext(archiveContext);

  function onSidePageButtonClickHandler() {
    archiveContextValue.setIsSidePageOpened(current => !current);
  }
  return (
    <button
      className={classes.button__sidePageToggle}
      onClick={onSidePageButtonClickHandler}
    >
      { archiveContextValue.isSidePageOpened ? "▶" : "◀"}
    </button>
  )
}

export default SidePageButton;