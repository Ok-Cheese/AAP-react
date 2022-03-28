import classes from './SidePageTitle.module.css';

const SidePageTitle = (props) => {
  return (
    <div className={classes.contianer__title}>
      <span className={classes.title}>{props.selectedItem.name}</span>
      <span className={classes.subtitle}>{props.selectedItem.subName}</span>
    </div>
  )
}

export default SidePageTitle;