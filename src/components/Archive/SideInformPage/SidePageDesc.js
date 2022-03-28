import classes from './SidePageDesc.module.css';

const SidePageDesc = (props) => {
  return (
    <div className={classes.container__desc}>
      <p className={classes.desc}>{props.selectedItem.desc}</p>
    </div>
  );
}

export default SidePageDesc;