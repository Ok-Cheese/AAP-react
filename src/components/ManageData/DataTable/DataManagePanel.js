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
  function onImgAddHandler() {
    props.onImgAddClick(true);
  }
  function onImgRemoveHandler() {
    props.onImgRemoveClick(true);
  }

  return (
    <div className={classes.dataControlPanel}>
      <button className={classes.button__dataControll} onClick={onDataAddHandler}>Add data</button>
      <button className={classes.button__dataControll} onClick={onDataEditHandler}>Edit Data</button>
      <button className={classes.button__dataControll} onClick={onDataRemoveHandler}>Remove Data</button>
      <button className={classes.button__dataControll} onClick={onImgAddHandler}>Add Image</button>
      <button className={classes.button__dataControll} onClick={onImgRemoveHandler}>Remove Image</button>
    </div>
  );
};

export default DataControlPanel;