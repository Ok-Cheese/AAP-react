import { Fragment, useState } from 'react';

import Header from '../UI/Header/Header';
import SignIn from './SignIn';
import DataList from './DataList';

const DataManager = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <Fragment>
      {
        isSignIn ? "" : <Header></Header>
      }
      {
        isSignIn ?
        <DataList /> : <SignIn setIsSignIn={setIsSignIn}></SignIn>
      }
    </Fragment>
  );
};

export default DataManager;