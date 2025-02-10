import Services from "@/services";
import { useEffect, useState } from "react";

const useSuggestTion = () => {
  const [listKeys, setListKeys] = useState([]);

  useEffect(() => {
    Services.blockService.getConfigData("hotsearch").then(
      (response) => {
        setListKeys(response.data.data);
      }
    ).catch(err => {
      console.warn(err);
      setListKeys([]);
    })
  }, []);
  return {
    listKeys,
  };
};

export default useSuggestTion;
