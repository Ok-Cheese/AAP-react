import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './SignIn.module.css';

const SignIn = (props) => {
  const [isInputWrong, setIsInputWrong] = useState(false);

  const inputId = useRef();
  const inputPassword = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    if (inputId.current.value === process.env.REACT_APP_MANAGE_ID
       && inputPassword.current.value === process.env.REACT_APP_MANAGE_PW) {
      props.setIsSignIn(true);
    } else {
      inputId.current.value="";
      inputPassword.current.value="";
      inputId.current.focus();
      setIsInputWrong(true);
    }
  }

  return (
    <form className={classes.signInForm} onSubmit={onSubmitHandler}>
      <p className={classes.guidePhrase}>⛔ 관리자 전용 페이지입니다. ⛔</p>
      <div className={classes.container__inputs}>
        <div className={classes.container__input}>
          <label>
            ID
            <input 
              type="text" 
              placeholder='아이디를 입력하세요.'
              ref={inputId}
            ></input>
          </label>
        </div>
        <div className={classes.container__input}>
          <label>
            PASSWORD
            <input 
              type='password' 
              placeholder='비밀번호를 입력하세요.'
              ref={inputPassword}
            ></input>
          </label>
        </div>
      </div>
      {
        isInputWrong ? 
        <p 
          className={classes.wrongSubmitMessage} 
          style={{fontSize: "1.2rem"}}
        >잘못된 아이디 또는 비밀번호입니다.</p> : ""
      }
      <div className={classes.container__button}>
        <Link to={'/'}><button type='button' className={classes.button}>홈으로</button></Link>
        <button type='submit' className={classes.button}>로그인</button>
      </div>
    </form>
  );
};

export default SignIn;