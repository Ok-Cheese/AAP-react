import { useRef, useState } from 'react';

import Modal from '../UI/Modal';
import classes from './EditDataModal.module.css';

const EditDataModal = (props) => {
  const [isIdReceived, setIsIdRecived] = useState(false);
  
  const idRef = useRef();
  const cityIdRef = useRef();
  const cityNameRef = useRef();
  const nameRef = useRef();
  const subNameRef = useRef();
  const YearRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const mainImage1Ref = useRef();
  const mainImage2Ref= useRef();
  const mainImage3Ref = useRef();
  const descRef = useRef();
  const role1Ref = useRef();
  const role2Ref = useRef();
  const role3Ref = useRef();
  const role4Ref = useRef();
  const role5Ref = useRef();
  const existenceRef = useRef();
  const nonExistenceRef = useRef();
  const heritageRef = useRef();
  const nonHeritageRef = useRef();

  function onAddSubmitHandler(event) {
    event.preventDefault();

    if (
      !idRef.current.value || !cityIdRef.current.value 
      || !cityNameRef.current.value || !nameRef.current.value 
      || !latitudeRef.current.value || !longitudeRef.current.value
    ) {
      return;
    }
    console.log(idRef.current.value);
    console.log(cityIdRef.current.value);
    console.log(cityNameRef.current.value);
    console.log(nameRef.current.value);
    console.log(subNameRef.current.value);
    console.log(YearRef.current.value);
    console.log(latitudeRef.current.value);
    console.log(longitudeRef.current.value);
    console.log(mainImage1Ref.current.value);
    console.log(mainImage2Ref.current.value);
    console.log(mainImage3Ref.current.value);
    console.log(descRef.current.value);
    if (role1Ref.current.checked) console.log(role1Ref.current.value);
    if (role2Ref.current.checked) console.log(role2Ref.current.value);
    if (role3Ref.current.checked) console.log(role3Ref.current.value);
    if (role4Ref.current.checked) console.log(role4Ref.current.value);
    if (role5Ref.current.checked) console.log(role5Ref.current.value);
    if (existenceRef.current.checked) console.log(existenceRef.current.value);
    if (nonExistenceRef.current.checked) console.log(nonExistenceRef.current.value);
    if (heritageRef.current.checked) console.log(heritageRef.current.value);
    if (nonHeritageRef.current.checked) console.log(nonHeritageRef.current.value);
  }

  function onIdSubmitHandler() {
    setIsIdRecived(true);

  }

  return (
    <Modal>
      {
        isIdReceived ?
        <div className={classes.form__editItem}>
          <section className={classes.section__input}>
            <section className={classes.container__input}>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>ID(필수)</span><br></br>
                <input 
                  ref={idRef}
                  className={classes.input__typing} 
                  placeholder='ID를 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>CityID(필수)</span><br></br>
                <input 
                  ref={cityIdRef}
                  className={classes.input__typing} 
                  placeholder='도시 ID를 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>CityName(필수)</span><br></br>
                <input 
                  ref={cityNameRef}
                  className={classes.input__typing} 
                  placeholder='도시 이름을 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Name(필수)</span><br></br>
                <input 
                  ref={nameRef}
                  className={classes.input__typing} 
                  placeholder='건물명을 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>SubName</span><br></br>
                <input 
                  ref={subNameRef}
                  className={classes.input__typing} 
                  placeholder='한자 명칭을 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Year</span><br></br>
                <input 
                  ref={YearRef}
                  className={classes.input__typing} 
                  placeholder='건축년도 ~ 철거년도(또는 "현재")'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Latitude(필수)</span><br></br>
                <input 
                  ref={latitudeRef}
                  className={classes.input__typing} 
                  placeholder='위도를 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Longitude(필수)</span><br></br>
                <input 
                  ref={longitudeRef}
                  className={classes.input__typing} 
                  placeholder='경도를 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Main Image</span><br></br>
                <input 
                  ref={mainImage1Ref}
                  className={classes.input__typing} 
                  placeholder='이미지 주소를 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Main Image_2</span><br></br>
                <input 
                  ref={mainImage2Ref}
                  className={classes.input__typing} 
                  placeholder='이미지 주소를 입력하세요.'
                ></input>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Main Image_3</span><br></br>
                <input 
                  ref={mainImage3Ref}
                  className={classes.input__typing} 
                  placeholder='이미지 주소를 입력하세요.'
                ></input>
              </div>
            </section>
              <section className={classes.container__input}>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Role</span><br></br>
                <input 
                  ref={role1Ref}
                  className={classes.input__radio} 
                  type="radio" 
                  value="공공"
                  name="role"
                ></input>
                <label className={classes.label}>공공</label>
                <input 
                    ref={role2Ref}
                  className={classes.input__radio} 
                  type="radio" 
                  value="금융"
                  name="role"
                ></input>
                <label className={classes.label}>금융</label>
                <input 
                    ref={role3Ref}
                  className={classes.input__radio} 
                  type="radio" 
                  value="상업"
                  name="role"
                ></input>
                <label className={classes.label}>상업</label>
                <input 
                    ref={role4Ref}
                  className={classes.input__radio} 
                  type="radio" 
                  value="교육"
                  name="role"
                ></input>
                <label className={classes.label}>교육</label>
                <input 
                    ref={role5Ref}
                  className={classes.input__radio} 
                  type="radio" 
                  value="주거"
                  name="role"
                ></input>
                <label className={classes.label}>주거</label>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Existence</span><br></br>
                <input 
                  ref={existenceRef}
                  className={classes.input__radio} 
                  type="radio" 
                  value="1"
                  name="existence"
                ></input>
                <label className={classes.label}>현존</label>
                <input 
                  ref={nonExistenceRef}
                  className={classes.input__radio} 
                  type="radio" 
                  value="0"
                  name="existence"
                ></input>
                <label className={classes.label}>소실</label>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Heritage</span><br></br>
                <input 
                  ref={heritageRef}
                  className={classes.input__radio} 
                  type="radio" 
                  value="1"
                  name="heritage"
                ></input>
                <label className={classes.label}>문화재</label>
                <input 
                  ref={nonHeritageRef}
                  className={classes.input__radio} 
                  type="radio" 
                  value="0"
                  name="heritage"
                ></input>
                <label className={classes.label}>비문화재</label>
              </div>
              <div className={classes.row__modal}>
                <span className={classes.categoryTag}>Description</span><br></br>
                <textarea 
                  ref={descRef}
                  className={classes.textarea} 
                  placeholder='설명을 입력하세요.'
                ></textarea>
              </div>
            </section>
          </section>
          <section className={classes.container__button}>
            <button className={classes.button} onClick={onAddSubmitHandler}>추가</button>
            <button className={classes.button} onClick={props.onClose}>취소</button>
          </section>
        </div> :
        <div className={classes.container__selectId}>
          <div className={classes.row__modal}>
            <p className={classes.caution}>수정할 아이템의 ID를 입력하세요.</p>
          </div>
          <div className={classes.row__modal}>
            <label className={classes.label}>CityID</label>
            <input ref={cityIdRef} className={classes.input}></input>
          </div>
          <div className={classes.row__modal}>
            <label className={classes.label}>ID</label>
            <input ref={idRef} className={classes.input}></input>
          </div>
          <div className={classes.row__modal}>
            <button className={classes.button} onClick={onIdSubmitHandler}>완료</button>
            <button className={classes.button} onClick={props.onClose}>취소</button>
          </div>
        </div>
      }
    </Modal>
  );
}

export default EditDataModal;