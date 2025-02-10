import React, { useCallback, useEffect, useState } from "react";

const useFeedBack = () => {
  const [feedBacks, setFeedBacks] = useState([]);

  const getItemsPerPage = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  }, []);

  useEffect(() => {
    const getData = () => {
      setFeedBacks([
        { id: 1, image: null },
        { id: 2, image: null },
        { id: 3, image: null },
        { id: 4, image: null },
      ]);
    };
    getData();
  }, []);

  return { feedBacks, getItemsPerPage };
};

export default useFeedBack;
