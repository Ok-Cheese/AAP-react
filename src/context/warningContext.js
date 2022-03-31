import React from "react";

const warningContext = React.createContext({
  isWarningModalOn: false,
  warningText: "",
  setIsWarningModalOn() {},
  setWarningText() {}
});

export default warningContext;