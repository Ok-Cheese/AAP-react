import { Fragment, useContext } from 'react';

import classes from './FilterInput.module.css';

import archiveContext from '../../../context/archiveContext';

const FilterInput = (props) => {
  const archiveContextValue = useContext(archiveContext);

  function handleFilterCheck(event) {
    archiveContextValue.setFilterState(current => {
      const newFilterState = {...current};
      newFilterState[props.filterType] = event.target.checked;
      return newFilterState;
    });
  }

  return (
    <Fragment>
      <label 
        className={classes.checkboxLabel}
      >
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={archiveContextValue.filterState[props.filterType]}
          name={props.filterType}
          onChange={handleFilterCheck}
        ></input>
        {props.filterType}
      </label>
    </Fragment>
  );
};

export default FilterInput;