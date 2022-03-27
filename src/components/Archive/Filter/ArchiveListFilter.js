import { Fragment } from "react";

import FilterInput from "./FilterInput";
import filterIcon from '../../../imgs/filter.png';
import classes from './ArchiveListFilter.module.css';

const ArchiveListFilter = (props) => {
  const filterTypeData = [
    "공공", "금융", "상업", "교육", "주거", "현존", "멸실", "문화재", "비문화재"
  ];

  const filterInputRole = filterTypeData.slice(0, 5).map((type, index) => {
    const key = index.toString().padStart(2, "0");
    <FilterInput
      key={key}
      filterType={type}
      setFilterState={props.setFilterState}
    />
  });

  const filterInputExistence = filterTypeData.slice(5, 7).map((type, index) => {
    const key = index.toString().padStart(2, "0");
    <FilterInput
      key={key}
      filterType={type}
      setFilterState={props.setFilterState}
    />
  });

  const filterInputHeritage = filterTypeData.slice(7).map((type, index) => {
    const key = index.toString().padStart(2, "0");
    <FilterInput
      key={key}
      filterType={type}
      setFilterState={props.setFilterState}
    />
  });

  return (
    <Fragment>
      <button
        className={classes.filterToggleButton}
        onClick={props.toggleFilter} 
        style={{ backgroundImage: `url(${filterIcon})` }}>  
      </button>
      {
        props.isFilterOpen ? 
          <div className={classes.filter__opened}>
            <div className={classes.row__filter}>
              {filterInputRole}
            </div>
            <hr></hr>
            <div className={classes.filter_row}>
              {filterInputExistence}
            </div>
            <hr></hr>
            <div className={classes.filter_row}>
              {filterInputHeritage}
            </div>
          </div> : ""
      }
    </Fragment>
  )
}

export default ArchiveListFilter;