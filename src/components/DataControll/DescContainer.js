import { useState } from 'react';

import classes from './DescContainer.module.css';

const DescContainer = (props) => {
  const [isDescOpen, setIsDescOpen] = useState(false);

  function descToggleHandler() {
    setIsDescOpen(current => !current);
  }

  return (
    <div className={classes.container__desc}>
      <div className={classes.descTitle}>
        <p className={classes.itemName}>{props.name + " Description"}</p>
        <button 
          className={classes.descToggleButton}
          onClick={descToggleHandler}
        >{isDescOpen ? "🔼" : "🔽"}</button>
      </div>
      {
        isDescOpen ?
          <p className={classes.desc}>
            {"Description: "}
            <br></br>
            {props.desc.toString()}
          </p> : ""
      }
    </div>
  );
};

export default DescContainer;