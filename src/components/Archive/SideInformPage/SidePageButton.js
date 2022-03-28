import classes from './SidePageButton.module.css';

const SidePageButton = (props) => {
  return (
    <button
      className={classes.button__sidePageToggle}
      onClick={props.toggleSidePage}
    >
      { props.isSidePageOpened ? "▶" : "◀"}
    </button>
  )
}

export default SidePageButton;