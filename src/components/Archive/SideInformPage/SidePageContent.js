import SidePageTitle from './SidePageTitle';
import SidePageImg from './SidePageImg';
import SidePageDesc from './SidePageDesc';
import classes from './SidePageContent.module.css';


const SidePageContent = () => {
  return (
    <div className={classes.sidePageContent}>
        <SidePageTitle />
        <SidePageImg />
        <SidePageDesc />
      </div>
  );
};

export default SidePageContent;