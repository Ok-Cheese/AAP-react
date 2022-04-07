import { useContext, useEffect, useRef, useState } from "react";

import Modal from "../../UI/Modal";
import CheckModal from '../../UI/CheckModal';
import classes from "./AddImageModal.module.css";

import { getStorageList, uploadImage } from "../../../modules/firebase_storage";
import cityIdData from "../../../data/cityIdData";
import noticeContext from "../../../context/noticeContext";

const AddImageModal = (props) => {
  const [subOptions, setSubOptions] = useState([]);
  const [imageType, setImageType] = useState('main');
  const [imageCityId, setImageCityId] = useState('');
  const [imageId, setImageId] = useState('');
  const [subType, setSubType] = useState('main1');
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const [checkModalMessage, setCehckModalMessage] = useState('');

  const imageRef = useRef();

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

  async function onSubmitImageHandler(event) {
    event.preventDefault();

    if (imageRef.current.files.length === 0) {
      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setNoticeMessage('업로드할 파일을 선택해주세요.');
      return;
    }

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
      setIsCheckModalOpen(true);
      setCehckModalMessage("이미 이미지가 존재합니다. 이미지를 교체하시겠습니까?");
    } else {
      uploadFormImage(imageType, imageCityId, imageId, subType, imageRef.current.files[0]);

      noticeContextValue.setIsNoticeModalOpen(true);
      noticeContextValue.setNoticeMessage('등록완료.');

      props.onClose();
    }
  }

  function uploadFormImage(imageType, imageCityId, imageId, subType, file) {
    if (imageType === 'main') {
      uploadImage(`main/${subType}`, file);
    } else if (imageType === 'marks') {
      uploadImage(`marks/${imageCityId}`, file);
    } else if (imageType === 'items') {
      uploadImage(`items/${imageCityId}/${imageId}/${subType}`, file);
    }
  }

  return (
    <Modal width="40vw">
      <form className={classes.addImageForm}>
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
              <input className={classes.input} onChange={onImageIdChangeHandler}>
              </input>
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
          <label className={classes.inputLabel}>
            이미지
            <input className={classes.input} type="file" ref={imageRef}></input>
          </label>
        </section>
        <section className={classes.container__button}>
          <button className={classes.button} onClick={onSubmitImageHandler}>추가</button>
          <button className={classes.button} onClick={props.onClose}>취소</button> 
        </section>
      </form>
      {
        isCheckModalOpen ?
         <CheckModal
          onCheck={() => {
            uploadFormImage(imageType, imageCityId, imageId, subType, imageRef.current.files[0]);

            noticeContextValue.setIsNoticeModalOpen(true);
            noticeContextValue.setNoticeMessage('등록완료.');

            props.onClose();
          }}
          onClose={() => setIsCheckModalOpen(false)}
          message={checkModalMessage}
         ></CheckModal> : ""
      }
    </Modal>
  )
};

export default AddImageModal;