import { useState, useReducer, useContext } from 'react';

import Modal from '../../UI/Modal';
import DataModalInput from './DataModalInput';
import classes from './EditDataModal.module.css';

import { getData, writeData } from '../../../modules/firebase';
import noticeContext from '../../../context/noticeContext';
import cityIdData from '../../../data/cityIdData';

function itemDataReducer(state, action) {
  if (action.category === "all") {
    return action.value;
  }

  const newData = {};
  for (let key in state) {
    if (key === action.category) {
      newData[key] = action.value;
    } else {
      newData[key] = state[key];
    }
  }

  return newData;
}

const EditDataModal = (props) => {
  const [isIdReceived, setIsIdReceived] = useState(false);
  const [itemData, dispatchItemData] = useReducer(itemDataReducer, {
    id: "",
    cityId: "",
    cityName: "",
    name: "",
    subName: "",
    year: "",
    latitude: "",
    longitude: "",
    role: "",
    existence: "0",
    heritage: "0",
    mainImage1: "",
    mainImage2: "",
    mainImage3: "",
    desc: "",
  });

  const noticeContextValue = useContext(noticeContext);

  function onAddSubmitHandler(event) {
    event.preventDefault();

    const latitude__number = +itemData.latitude.trim();
    const longitude__number = +itemData.longitude.trim();

    // 1. 필수 입력값 확인
    if (itemData.name.trim() === "") {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setNoticeMessage('잘못된 이름입니다.');
      return;
    } else if (itemData.latitude.trim() === "" || isNaN(latitude__number) || latitude__number < 33 || latitude__number > 43) {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setWarningText('잘못된 위치(Latitude)입니다.');
      return;
    } else if (itemData.longitude.trim() === "" || isNaN(longitude__number) || longitude__number < 124 || longitude__number > 132) {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setWarningText('잘못된 위치(Longitude)입니다.');
      return;
    }

    writeData(`/cityItems/${itemData.cityId}/items/${itemData.id}`, itemData);

    noticeContextValue.setIsNoticeModalOpen(true);
    noticeContextValue.setWarningText(`${itemData.name}(${itemData.cityId}:${itemData.id})\n수정이 완료되었습니다.`);

    setIsIdReceived(false);

    props.onClose();
  }

  async function onIdSubmitHandler(event) {
    event.preventDefault();

    if (!cityIdData.includes(itemData.cityId)) {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setWarningText('잘못된 City ID입니다.');
      return;
    }

    if (!await getData(`/cityItems/${itemData.cityId}/items/${itemData.id}`)) {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setWarningText('존재하지 않는 ID입니다.');
      return;
    }

    setIsIdReceived(true);

    const loadedItemData = await getData(`/cityItems/${itemData.cityId}/items/${itemData.id}`);
    dispatchItemData({category: "all", value: loadedItemData});
  }

  return (
    <Modal 
      width={isIdReceived ? "80vw" : "40vw"}
      height={isIdReceived ? "" : ""}
    >
      {
        isIdReceived ?
        <form className={classes.form__editItem}>
          <section className={classes.section__input}>
            <section className={classes.container__input}>
              <DataModalInput 
                category="id"
                tag="ID (필수)"
                placeholder="ID를 입력하세요."
                value={itemData.id}
                isEditable={false}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="cityId"
                tag="City ID (필수)"
                placeholder="도시 ID를 입력하세요."
                value={itemData.cityId}
                isEditable={false}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="cityName"
                tag="City Name"
                placeholder="도시 이름를 입력하세요."
                value={itemData.cityName}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="name"
                tag="Name (필수)"
                placeholder="건물명을 입력하세요."
                value={itemData.name}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="subName"
                tag="SubName"
                placeholder="한자 명칭을 입력하세요."
                value={itemData.subName}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="year"
                tag="Year"
                placeholder="건축년도 ~ 철거년도 (또는 ~ 현재)"
                value={itemData.year}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="latitude"
                tag="Latitude (필수)"
                placeholder="위도를 입력하세요. (33 ~ 43)"
                value={itemData.latitude}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="longitude"
                tag="Longitude (필수)"
                placeholder="경도를 입력하세요. (124 ~ 132)"
                value={itemData.longitude}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="mainImage1"
                tag="Main Image_1"
                placeholder="유효한 이미지 주소를 입력하세요."
                value={itemData.mainImage1}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="mainImage2"
                tag="Main Image_2"
                placeholder="유효한 이미지 주소를 입력하세요."
                value={itemData.mainImage2}
                isEditable={true}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="mainImage3"
                tag="Main Image_3"
                placeholder="유효한 이미지 주소를 입력하세요."
                value={itemData.mainImage3}
                isEditable={true}
                dispatch={dispatchItemData}
              />
            </section>
              <section className={classes.container__input}>
              <DataModalInput 
                category="role"
                tag="Role"
                name="role"
                values={["공공", "금융", "상업", "교육", "주거"]}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="existence"
                tag="Existence"
                name="existence"
                values={["1", "0"]}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="heritage"
                tag="Heritage"
                name="heritage"
                values={["1", "0"]}
                dispatch={dispatchItemData}
              />
              <DataModalInput 
                category="desc"
                tag="Description"
                placeholder="설명을 입력하세요."
                value={itemData.desc}
                isEditable={true}
                dispatch={dispatchItemData}
                isLongData={true}
              />
            </section>
          </section>
          <section className={classes.container__button}>
            <button className={classes.button} type="submit" onClick={onAddSubmitHandler}>추가</button>
            <button className={classes.button} onClick={props.onClose}>취소</button>
          </section>
        </form> :
        <form className={classes.form__editItem}>
          <div className={classes.row__modal}>
            <p className={classes.message}>수정할 아이템의 ID를 입력하세요.</p>
          </div>
          <DataModalInput 
            category="cityId"
            tag="City ID"
            placeholder="도시 ID를 입력하세요."
            value={itemData.cityId}
            isEditable={true}
            dispatch={dispatchItemData}
          />
          <DataModalInput 
            category="id"
            tag="ID"
            placeholder="ID를 입력하세요."
            value={itemData.id}
            isEditable={true}
            dispatch={dispatchItemData}
          />
          <div className={classes.container__button}>
            <button className={classes.button} type="submit" onClick={onIdSubmitHandler}>완료</button>
            <button className={classes.button} onClick={props.onClose}>취소</button>
          </div>
        </form>
      }
    </Modal>
  );
};

export default EditDataModal;