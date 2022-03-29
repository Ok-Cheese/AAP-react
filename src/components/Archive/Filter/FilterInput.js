import { useContext } from 'react';

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
    <div className={classes.selection__filter}>
      <input
        className={classes.checkbox}
        type="checkbox"
        checked={archiveContextValue.filterState[props.filterType]}
        name={props.filterType}
        onChange={handleFilterCheck}
      ></input>
      <span className={classes.filterLabel}>{props.filterType}</span>
    </div>
  )
};

export default FilterInput;