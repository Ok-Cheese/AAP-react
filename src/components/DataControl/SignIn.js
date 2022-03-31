import { useRef, useState } from 'react';
import classes from './SignIn.module.css';

const SignIn = (props) => {
  const [isInputWrong, setIsInputWrong] = useState(false);

  const inputId = useRef();
  const inputPassword = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    if (inputId.current.value === process.env.DB_CONTROL_ID
       && inputPassword.current.value === process.env.DB_CONTROL_PW) {
      props.setIsSignIn(true);
    } else {
      inputId.current.value="";
      inputPassword.current.value="";
      inputId.current.focus();
      setIsInputWrong(true);
    }
  }

  console.log(process.env.DB_CONTROL_ID, process.env.DB_CONTROL_PW);

  return (
    <form className={classes.form__signIn} onSubmit={onSubmitHandler}>
      <p>⛔ 관리자 전용 페이지입니다. ⛔</p>
      <div className={classes.container__inputs}>
        <div className={classes.container__input}>
          <label>ID</label>
          <input 
            type="text" 
            placeholder='아이디를 입력하세요.'
            ref={inputId}
          ></input>
        </div>
        <div className={classes.container__input}>
          <label>PASSWORD</label>
          <input 
            type='password' 
            placeholder='비밀번호를 입력하세요.'
            ref={inputPassword}
          ></input>
        </div>
      </div>
      {
        isInputWrong ? 
        <p 
          className={classes.message__wrongSubmit} 
          style={{fontSize: "1.2rem"}}
        >잘못된 아이디 또는 비밀번호입니다.</p> : ""
      }
      <button type='submit' className={classes.submitButton}>Sign In</button>
    </form>
  );
};

export default SignIn;