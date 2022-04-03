import { useContext, useState } from "react";

import Modal from "../../UI/Modal";
import classes from './RemoveDataModal.module.css';

import { getData, removeData } from "../../../modules/firebase";
import warningContext from "../../../context/warningContext";
import cityIdData from "../../../data/cityIdData";


const RemoveDataModal = (props) => {
  const [itemId, setItemId] = useState("");
  const [itemCityId, setItemCityId] = useState("");

  const warningContextValue = useContext(warningContext);

  async function onRemoveHandler(event) {
    event.preventDefault();
    
    if (!cityIdData.includes(itemCityId)) {
      warningContextValue.setIsWarningModalOn(true);
      warningContextValue.setWarningText('잘못된 City ID입니다.');
      return;
    }

    const loadedCityData = await getData(`/cityItems/${itemCityId}/items/${itemId}`);
    const itemName = loadedCityData ? loadedCityData.name : "";

    if (!loadedCityData) {
      warningContextValue.setIsWarningModalOn(true);
      warningContextValue.setWarningText('존재하지 않는 ID입니다.');
      return;
    }

    removeData(`/cityItems/${itemCityId}/items/${itemId}`);
    warningContextValue.setIsWarningModalOn(true);
    warningContextValue.setWarningText(`${itemName}(${itemCityId}:${itemId})\n삭제되었습니다.`);
    props.onClose();
  }
  return (
    <Modal width="40vw">
      <form className={classes.form__selectId}>
        <div className={classes.row__modal}>
          <p className={classes.cautionMessage}>⛔삭제한 데이터는 다시 복구할 수 없습니다.⛔</p>
        </div>
        <div className={classes.row__modal}>
          <span className={classes.inputLabel}>CityID</span>
          <br></br>
          <input
            className={classes.input__typing}
            value={itemCityId}
            onChange={(event) => {setItemCityId(event.target.value)}}
          ></input>
        </div>
        <div className={classes.row__modal}>
          <span className={classes.inputLabel}>ID</span>
          <br></br>
          <input 
            className={classes.input__typing}
            value={itemId}
            onChange={(event) => {setItemId(event.target.value)}}
          ></input>
        </div>
        <div className={classes.row__modal}>
          <button className={classes.button} type="submit" onClick={onRemoveHandler}>삭제</button>
          <button className={classes.button} onClick={props.onClose}>취소</button>
        </div>
      </form>
    </Modal>
  );
};

export default RemoveDataModal;