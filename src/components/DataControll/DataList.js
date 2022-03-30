import CityItemDataList from './CityItemDataList';
import classes from './DataList.module.css';

const DataList = (props) => {
  return (
    <div className={classes.dataList}>
      <CityItemDataList></CityItemDataList>
    </div>
  );
}

export default DataList;