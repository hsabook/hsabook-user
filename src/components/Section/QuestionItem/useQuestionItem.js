import React, { useState } from "react";

const useQuestionItem = () => {
  const [viewDetail, setViewDetail] = useState(false);
  const toggleViewDetail = () => {
    setViewDetail((prev) => !prev);
  };
  return {
    viewDetail,
    toggleViewDetail,
  };
};

export default useQuestionItem;
