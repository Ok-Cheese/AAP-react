import classes from './DataModalInput.module.css';

const DataModalInput = (props) => {
  function onInputChangeHandler(event) {
    if ((props.type === "role" || props.type === "existence" || props.type === "heritage") && !event.target.checked) {
      return;
    }

    props.dispatch({category: props.category, value: event.target.value});
  }

  let radioValues = [];
  if (props.name) {
    props.values.map(value => {
      radioValues.push(
        <label key={'label' + value} className={classes.radioLabel}>
          <input
            key={value}
            className={classes.input__radio}
            type="radio"
            category={props.category}
            value={value}
            name={props.name}
            onChange={onInputChangeHandler}
          ></input>
          {value}
        </label>
      );
    });
  }

  return (
    <div className={classes.row__modal}>
      <span className={classes.inputLabel}>{props.tag}</span>
      <br></br>
      {
        props.name ?
          radioValues :
          (
          props.isLongData ? 
            <textarea 
              className={classes.input__textarea}
              placeholder={props.placeholder || ""}
              value={props.value || ""}
              disabled={!props.isEditable || false}
              onChange={onInputChangeHandler}
            ></textarea> : 
            <input 
              className={classes.input__normal}
              placeholder={props.placeholder || ""}
              value={props.value || ""}
              disabled={!props.isEditable || false}
              onChange={onInputChangeHandler}
            ></input>
          )
      }
    </div>
  );
};

export default DataModalInput;