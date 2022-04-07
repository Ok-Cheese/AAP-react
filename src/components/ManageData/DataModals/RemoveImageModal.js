import { useContext, useEffect, useState } from "react";

import Modal from "../../UI/Modal";
import classes from "./RemoveImageModal.module.css";

import { deleteImage, getStorageList } from "../../../modules/firebase_storage";
import cityIdData from "../../../data/cityIdData";
import noticeContext from "../../../context/noticeContext";

const AddImageModal = (props) => {
  const [subOptions, setSubOptions] = useState([]);
  const [imageType, setImageType] = useState('main');
  const [imageCityId, setImageCityId] = useState('');
  const [imageId, setImageId] = useState('');
  const [subType, setSubType] = useState('main1');
  const [idOptions, setIdOptions] = useState([]);


  const noticeContextValue = useContext(noticeContext);

  const cityIdOptions = cityIdData.map(id => {
    return <option key={id} value={id}>{id}</option>;
  });

  useEffect(() => {
    if (imageType === 'main') {
      setSubOptions([
        <option key="main1" value="main1">Main image1</option>,
        <option key="main2" value="main2">Main image2</option>,
        <option key="main3" value="main3">Main image3</option>
      ]);
    } else if (imageType === 'items') {
      setSubOptions([
        <option key="title" value="title">Title image</option>,
        <option key="sub1" value="sub1">Sub image1</option>,
        <option key="sub2" value="sub2">Sub image2</option>,
      ]);
    }
  }, [imageType]);

  function onTypeChangeHandler(event) {
    setImageType(event.target.value);

    if (event.target.value === 'marks') {
      setImageCityId('KS');
      setImageId('');
      setSubType('');
    } else if (event.target.value === 'items') {
      setImageCityId('KS');
      setImageId('');
      setSubType('title');
    }
  }

  function onImageCityIdChangeHandler(event) {
    setImageCityId(event.target.value);
  }

  function onImageIdChangeHandler(event) {
    setImageId(event.target.value);
  }

  function onSubTypeChangeHandler(event) {
    setSubType(event.target.value);
  }

  useEffect(async () => {
    if (imageType === "items") {
      const ids = await getStorageList("folders", `items/${imageCityId}`);
      setIdOptions(ids.map(id => {
        return (<option key={id} value={id}>{id}</option>);
      }))
    } else {
      return;
    }
  }, [imageType, imageCityId]);

  async function onSubmitImageHandler(event) {
    event.preventDefault();

    let isImageExist = false;

    if (imageType === "main") {
      const imgs = await getStorageList("files", `main`);
      isImageExist = imgs.includes(`${subType}`);
    } else if (imageType === "marks") {
      const imgs = await getStorageList("files", `marks`);
      isImageExist = imgs.includes(`${imageCityId}`);
    } else if (imageType === "items") {
      const imgs = await getStorageList("files", `items/${imageCityId}/${imageId}`);
      isImageExist = imgs.includes(`${subType}`);
    }

    if (isImageExist) {
      deleteFormImage(imageType, imageCityId, imageId, subType);
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setNoticeMessage('삭제 완료.');
      props.onClose();
    } else {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setNoticeMessage('존재하지 않는 이미지입니다.');
    }
  }

  function deleteFormImage(imageType, imageCityId, imageId, subType) {
    if (imageType === 'main') {
      deleteImage(`main/${subType}`);
    } else if (imageType === 'marks') {
      deleteImage(`marks/${imageCityId}`);
    } else if (imageType === 'items') {
      deleteImage(`items/${imageCityId}/${imageId}/${subType}`);
    }
  }

  return (
    <Modal width="40vw">
      <form className={classes.removeImageForm}>
        <section className={classes.container__inputs}>
          <label className={classes.inputLabel}>
            이미지 종류
            <select className={classes.input} onChange={onTypeChangeHandler}>
              <option value="main">main</option>
              <option value="marks">marks</option> 
              <option value="items">items</option>
            </select>
          </label>
          {
            (imageType === "items" || imageType === "marks") ?
              <label className={classes.inputLabel}>
                도시 ID
                <select className={classes.input} value={imageCityId} onChange={onImageCityIdChangeHandler}>
                  {cityIdOptions}
                </select>
              </label> : ""
          }
          {
            imageType === "items" ?
              <label className={classes.inputLabel}>
              ID
              <select className={classes.input} onChange={onImageIdChangeHandler}>
                {idOptions}
              </select>
              </label> : ""
          }
          {
            imageType === "main" || imageType === "items" ?
              <label className={classes.inputLabel}>
              소분류
              <select className={classes.input} onChange={onSubTypeChangeHandler}>
                {subOptions}
              </select>
              </label> : ""
          }
        </section>
        <section className={classes.container__button}>
          <button className={classes.button} onClick={onSubmitImageHandler}>삭제</button>
          <button className={classes.button} onClick={props.onClose}>취소</button> 
        </section>
      </form>
    </Modal>
  )
};

export default AddImageModal;