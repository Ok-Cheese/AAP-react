import classes from './DataManagePanel.module.css';

const DataControlPanel = (props) => {
  function onDataAddHandler() {
    props.onAddClick(true);
  }
  function onDataEditHandler() {
    props.onEditClick(true);
  }
  function onDataRemoveHandler() {
    props.onRemoveClick(true);
  }

  return (
    <div className={classes.dataControlPanel}>
      <button className={classes.button__dataControll} onClick={onDataAddHandler}>Add data</button>
      <button className={classes.button__dataControll} onClick={onDataEditHandler}>Edit Data</button>
      <button className={classes.button__dataControll} onClick={onDataRemoveHandler}>Remove Data</button>
    </div>
  );
};

export default DataControlPanel;