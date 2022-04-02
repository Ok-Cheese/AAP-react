import { useEffect } from 'react';

import classes from './Intro.module.css';

import logo from '../../imgs/logo_bold_letter.png';

const Intro = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.onStart(false);
    }, 3000);
  }, []);

  return (
    <div className={classes.container__intro}>
      <img className={classes.logo__intro} src={logo}/>
    </div>
  );
};

export default Intro;