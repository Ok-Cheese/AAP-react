import classes from './FilterInput.module.css';

const FilterInput = (props) => {
  
  function handleFilterCheck(event) {
    props.setFilterState(current => {
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
        checked={props.filterState[props.filterType]}
        name={props.filterType}
        onChange={handleFilterCheck}
      ></input>
      <span className={classes.filterLabel}>{props.filterType}</span>
    </div>
  )
};

export default FilterInput;