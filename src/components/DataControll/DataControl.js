import { useState } from 'react';

import SignIn from './SignIn';
import DataList from './DataList';
import classes from './DataControl.module.css';

const DataControl = (props) => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <section className={classes.dataControl}>
      {
        isSignIn ?
        <DataList /> :
        <SignIn setIsSignIn={setIsSignIn}></SignIn>
      }
    </section>
  );
}

export default DataControl;