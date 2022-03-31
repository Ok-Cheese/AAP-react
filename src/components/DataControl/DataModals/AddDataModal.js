import { useEffect, useReducer } from 'react';

import Modal from '../../UI/Modal';
import DataModalInput from './DataModalInput';
import classes from './AddDataModal.module.css';

import { getData, writeData } from '../../../modules/firebase';

function itemDataReducer(state, action) {
  const newState = {};
  for (let key in state) {
    if (key === action.category) {
      newState[key] = action.value;
    } else {
      newState[key] = state[key];
    }
  }
  return newState;
}

const AddDataModal = (props) => {
  const [itemData, dispatchItemData] = useReducer(itemDataReducer, {
    id: "",
    cityId: "",
    cityName: "",
    name: "",
    subName: "",
    year: "",
    latitude: "",
    longitude: "",
    mainImage1: "",
    mainImage2: "",
    mainImage3: "",
    desc: "",
    role: "",
    existence: "",
    heritage: "",    
  });

  async function onAddSubmitHandler(event) {
    event.preventDefault();

    const response = await getData(`/cityItems/${itemData.cityId}/items/${itemData.id}`);
    if (response) {
      console.log("Duplicated CityID!");
    }

    writeData(`/cityItems/${itemData.cityId}/items/${itemData.id}`, itemData);

    props.onClose();
  }

  return (
    <Modal onClose={props.onClose} width="80vw" height="90vh">
      <section className={classes.section__input}>
        <section className={classes.container__input}>
          <DataModalInput 
            category="id"
            tag="ID (필수)"
            placeholder="ID를 입력하세요."
            value={itemData.id}
            isEditable={true}
            dispatch={dispatchItemData}
          />
          <DataModalInput 
            category="cityId"
            tag="City ID (필수)"
            placeholder="도시 ID를 입력하세요."
            value={itemData.cityId}
            isEditable={true}
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
            placeholder="위도를 입력하세요."
            value={itemData.latitude}
            isEditable={true}
            dispatch={dispatchItemData}
          />
          <DataModalInput 
            category="longitude"
            tag="Longitude (필수)"
            placeholder="경도를 입력하세요."
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
        <button className={classes.button} onClick={onAddSubmitHandler}>추가</button>
        <button className={classes.button} onClick={props.onClose}>취소</button>
      </section>
    </Modal>
  );
}

export default AddDataModal;