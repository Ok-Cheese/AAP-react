import { useEffect } from 'react';
import logo from '../../imgs/logo_bold_letter.png';
import classes from './StartPage.module.css';

const StartPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.onStart(false);
    }, 3000);
  }, []);

  return (
    <div className={classes.container__start}>
      <img className={classes.logo__startPage} src={logo}/>
    </div>
  )
}

export default StartPage;