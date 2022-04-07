import Modal from './Modal';
import classes from './NoticeModal.module.css';

const NoticeModal = (props) => {
  function onCheckHandler() {
    props.onCheck();
  }

  function onCloseHandler() {
    props.onClose();
  }

  return (
    <Modal>
      <p className={classes.message}>{props.message}</p>
      <div className={classes.container__button}>
        <button 
          className={classes.button} 
          onClick={onCheckHandler}
        >확인</button>
        <button
          className={classes.button}
          onClick={onCloseHandler}
        >취소</button>
      </div>
    </Modal>
  );
};

export default NoticeModal;