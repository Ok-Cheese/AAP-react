import { useContext, useState } from "react";

import Modal from "../../UI/Modal";
import classes from './RemoveDataModal.module.css';

import { getData, removeData } from "../../../modules/firebase";
import noticeContext from "../../../context/noticeContext";
import cityIdData from "../../../data/cityIdData";


const RemoveDataModal = (props) => {
  const [itemId, setItemId] = useState("");
  const [itemCityId, setItemCityId] = useState("");

  const noticeContextValue = useContext(noticeContext);

  async function onRemoveHandler(event) {
    event.preventDefault();
    
    if (!cityIdData.includes(itemCityId)) {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setNoticeMessage('잘못된 City ID입니다.');
      noticeContextValue.setNoticeType('notice');
      return;
    }

    const loadedCityData = await getData(`/cityItems/${itemCityId}/items/${itemId}`);
    const itemName = loadedCityData ? loadedCityData.name : "";

    if (!loadedCityData) {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setNoticeMessage('존재하지 않는 ID입니다.');
      noticeContextValue.setNoticeType('notice');
      return;
    }

    removeData(`/cityItems/${itemCityId}/items/${itemId}`);
    noticeContextValue.setIsNoticeModalOpen(true);
    noticeContextValue.setNoticeMessage(`${itemName}(${itemCityId}:${itemId})\n삭제되었습니다.`);
    noticeContextValue.setNoticeType('notice');
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
        <div className={classes.container__button}>
          <button className={classes.button} type="submit" onClick={onRemoveHandler}>삭제</button>
          <button className={classes.button} onClick={props.onClose}>취소</button>
        </div>
      </form>
    </Modal>
  );
};

export default RemoveDataModal;