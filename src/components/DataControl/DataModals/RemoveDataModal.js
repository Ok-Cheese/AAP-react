import { useState } from "react";

import Modal from "../../UI/Modal";
import classes from './RemoveDataModal.module.css';

import { removeData } from "../../../modules/firebase";

const RemoveDataModal = (props) => {
  const [itemId, setItemId] = useState("");
  const [itemCityId, setItemCityId] = useState("");

  function onRemoveHandler(event) {
    event.preventDefault();
    
    removeData(`/cityItems/${itemCityId}/items/${itemId}`);
    props.onClose();
  }
  return (
    <Modal width="40vw">
      <div className={classes.container__selectId}>
        <div className={classes.row__modal}>
          <p className={classes.caution}>⛔삭제한 데이터는 다시 복구할 수 없습니다.⛔</p>
        </div>
        <div className={classes.row__modal}>
          <label className={classes.label}>CityID</label>
          <br></br>
          <input
            className={classes.input__typing}
            value={itemId}
            onChange={(event => {setItemCityId(event.target.value)})}
          ></input>
        </div>
        <div className={classes.row__modal}>
          <label className={classes.label}>ID</label>
          <br></br>
          <input 
            className={classes.input__typing}
            value={itemId}
            onChange={(event => {setItemCityId(event.target.value)})}
          ></input>
        </div>
        <div className={classes.row__modal}>
          <button className={classes.button} onClick={onRemoveHandler}>삭제</button>
          <button className={classes.button} onClick={props.onClose}>취소</button>
        </div>
      </div>
    </Modal>
  );
}

export default RemoveDataModal;