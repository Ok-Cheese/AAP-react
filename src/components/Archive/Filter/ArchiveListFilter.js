import { Fragment, useContext, useEffect } from "react";

import FilterInput from "./FilterInput";
import filterIcon from '../../../imgs/filter.png';
import classes from './ArchiveListFilter.module.css';

import archiveContext from "../../../context/archiveContext";

const ArchiveListFilter = (props) => {
  const archiveContextValue = useContext(archiveContext);

  const filterTypeData = [
    "공공", "금융", "상업", "교육", "주거", "현존", "소실", "문화재", "비문화재"
  ];

  const filterInputRole = filterTypeData.slice(0, 5).map((type, index) => {
    const key = index.toString().padStart(2, "0");
    return (
      <FilterInput
        key={key}
        filterType={type}
      />
    )
  });

  const filterInputExistence = filterTypeData.slice(5, 7).map((type, index) => {
    const key = index.toString().padStart(2, "0");
    return (
      <FilterInput
        key={key}
        filterType={type}
      />
    )
  });

  const filterInputHeritage = filterTypeData.slice(7).map((type, index) => {
    const key = index.toString().padStart(2, "0");
    return (
      <FilterInput
        key={key}
        filterType={type}
      />
    )
  });

  function onFilterButtonClickHandler() {
    archiveContextValue.setIsFilterOpen(current => !current);
  }

  return (
    <Fragment>
      <button
        className={classes.filterToggleButton}
        onClick={onFilterButtonClickHandler} 
        style={{ backgroundImage: `url(${filterIcon})` }}>  
      </button>
      <div className={
        archiveContextValue.isFilterOpen ? classes.filter__opened : classes.filter__closed
      }>
        {
          archiveContextValue.isFilterOpen ? 
            <div className={classes.row__filter}>
              {filterInputRole}
            </div> : ""
        }
        {archiveContextValue.isFilterOpen ? <hr></hr> : ""}
        {
          archiveContextValue.isFilterOpen ? 
          <div className={classes.row__filter}>
            {filterInputExistence}
          </div> : ""
        }
        {archiveContextValue.isFilterOpen ? <hr></hr> : ""}
        {
          archiveContextValue.isFilterOpen ? 
            <div className={classes.row__filter}>
              {filterInputHeritage}
            </div>  : ""
        }
      </div>
    </Fragment>
  )
}

export default ArchiveListFilter;