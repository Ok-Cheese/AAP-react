import React from "react";

const archiveContext = React.createContext({
  cityId: "",
  currentCityItems: [],
  selectedItem: [],
  centerCoord: [],
  isSidePageOpened: false,
  isFilterOpen: false,
  filterState: {},
  setCurrentCityItems() {},
  setSelectedItem() {},
  setCenterCoord() {},
  setIsSidePageOpened() {},
  setIsFilterOpen() {},
  setFilterState() {},
  onItemClickHandler() {}
});

export default archiveContext;