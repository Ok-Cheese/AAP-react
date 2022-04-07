import { useState } from 'react';

import classes from './DescContent.module.css';

const DescContent = (props) => {
  const [isDescOpen, setIsDescOpen] = useState(false);

  function descToggleHandler() {
    setIsDescOpen(current => !current);
  }

  return (
    <li className={classes.descContent}>
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
            {props.desc}
          </p> : ""
      }
    </li>
  );
};

export default DescContent;