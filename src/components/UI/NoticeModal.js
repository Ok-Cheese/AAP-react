import { useContext } from 'react';

import Modal from './Modal';
import classes from './NoticeModal.module.css';

import noticeContext from '../../context/noticeContext';

const NoticeModal = () => {
  const noticeContextValue = useContext(noticeContext);

  function onCloseHandler() {
    noticeContextValue.setIsNoticeModalOpen(false);
  }

  return (
    <Modal>
      <p className={classes.message}>{noticeContextValue.noticeMessage}</p>
      <div className={classes.container__button}>
        <button 
          className={classes.button} 
          onClick={onCloseHandler}
        >확인</button>
      </div>
    </Modal>
  );
};

export default NoticeModal;