import React from "react";

const noticeContext = React.createContext({
  isNoticeModalOpen: false,
  noticeMessage: "",
  setIsNoticeModalOpen() {},
  setNoticeMessage() {},
});

export default noticeContext;