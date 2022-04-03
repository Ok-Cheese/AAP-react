import { useContext } from 'react';

import classes from './SidePageButton.module.css';

import archiveContext from '../../../context/archiveContext';

const SidePageButton = () => {
  const archiveContextValue = useContext(archiveContext);

  function onSidePageButtonClickHandler() {
    archiveContextValue.setIsSidePageOpened(current => !current);
  }
  return (
    <button
      className={classes.sidePageToggleButton}
      onClick={onSidePageButtonClickHandler}
    >
      { archiveContextValue.isSidePageOpened ? "▶" : "◀"}
    </button>
  );
};

export default SidePageButton;