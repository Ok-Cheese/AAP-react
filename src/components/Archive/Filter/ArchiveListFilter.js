import { Fragment, useContext } from "react";

import FilterInput from "./FilterInput";
import classes from './ArchiveListFilter.module.css';

import archiveContext from "../../../context/archiveContext";
import filterIcon from '../../../imgs/filter.png';

const ArchiveListFilter = () => {
  const archiveContextValue = useContext(archiveContext);

  const filterTypeData = [
    "공공", "금융", "상업", "교육", "주거", "현존", "소실", "문화재", "비문화재"
  ];

  const filterInputRole = filterTypeData.slice(0, 5).map(type => {
    return (
      <FilterInput
        key={type}
        filterType={type}
      />
    );
  });

  const filterInputExistence = filterTypeData.slice(5, 7).map(type => {
    return (
      <FilterInput
        key={type}
        filterType={type}
      />
    );
  });

  const filterInputHeritage = filterTypeData.slice(7).map(type => {
    return (
      <FilterInput
        key={type}
        filterType={type}
      />
    );
  });

  function onFilterToggleButtonClickHandler() {
    archiveContextValue.setIsFilterOpen(current => !current);
  }

  return (
    <Fragment>
      <button
        className={classes.filterToggleButton}
        onClick={onFilterToggleButtonClickHandler} 
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
  );
};

export default ArchiveListFilter;