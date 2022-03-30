import { useState } from 'react';

import Header from '../UI/Header';
import SignIn from './SignIn';
import DataList from './DataList';
import DataControlPanel from './DataControlPanel';
import classes from './DataControl.module.css';

import { getData } from '../../modules/firebase';

const DataControl = (props) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section className={classes.dataControl}>
      <Header></Header>
      {
        isSignIn ?
        <DataList /> :
        <SignIn setIsSignIn={setIsSignIn}></SignIn>
      }
      <DataControlPanel></DataControlPanel>
    </section>
  );
}

export default DataControl;