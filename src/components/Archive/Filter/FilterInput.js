import classes from './FilterInput.module.css';

const FilterInput = (props) => {
  
  function handleFilterCheck(event) {
    props.setFilterState(current => {
      const newFilterState = {...current};
      newFilterState[props.filterType] = event.target.checked;
    });
    props.onFilterChange(newData);
  }

  return (
    <div className={classes.selection__filter}>
      <input
        className={classes.checkbox}
        type="checkbox"
        checked={true}
        name={props.filterType}
        onClick={handleFilterCheck}
      ></input>
      <span>{props.FilterType}</span>
    </div>
  )
};

export default FilterInput;