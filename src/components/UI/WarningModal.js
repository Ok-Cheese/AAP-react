import { useContext } from 'react';

import Modal from './Modal';
import classes from './WarningModal.module.css';

import warningContext from '../../context/warningContext';

const WarningModal = (props) => {
  const warningContextValue = useContext(warningContext);

  function onCloseHandler(event) {
    warningContextValue.setIsWarningModalOn(false);
  }

  return (
    <Modal width="30vw" height="20vh">
      <p className={classes.warningMessage}>{warningContextValue.warningText}</p>
      <button 
        className={classes.closeButton}
        onClick={onCloseHandler}
        >확인</button>
    </Modal>
  );
};

export default WarningModal;