
import SidePageTitle from './SidePageTitle';
import SidePageImg from './SidePageImg';
import SidePageDesc from './SidePageDesc';
import classes from './SidePageContent.module.css';

const SidePageContent = (props) => {
  return (
    <div className={classes.sidePageContent}>
        <SidePageTitle 
          selectedItem={props.selectedItem}
        />
        <SidePageImg 
          selectedItem={props.selectedItem}
        />
        <SidePageDesc 
          selectedItem={props.selectedItem}
        />
      </div>
  );
}

export default SidePageContent