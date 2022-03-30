import { useRef } from "react";

import Modal from "../UI/Modal";
import classes from './RemoveDataModal.module.css';

import { removeData } from "../../modules/firebase";

const RemoveDataModal = (props) => {
  const cityIdRef = useRef();
  const itemIdRef = useRef();

  function onRemoveHandler(event) {
    event.preventDefault();
    
    removeData(`/cityItems/${cityIdRef.current.value}/items/${itemIdRef.current.value}`);
    props.onClose();
  }
  return (
    <Modal>
      <div className={classes.row__modal}>
        <p className={classes.caution}>⛔삭제한 데이터는 다시 복구할 수 없습니다.⛔</p>
      </div>
      <div className={classes.row__modal}>
        <label className={classes.label}>CityID</label>
        <input ref={cityIdRef} className={classes.input}></input>
      </div>
      <div className={classes.row__modal}>
        <label className={classes.label}>ID</label>
        <input ref={itemIdRef} className={classes.input}></input>
      </div>
      <div className={classes.row__modal}>
        <button className={classes.button} onClick={onRemoveHandler}>삭제</button>
        <button className={classes.button} onClick={props.onClose}>취소</button>
      </div>
    </Modal>
  );
}

export default RemoveDataModal;