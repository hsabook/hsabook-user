import useUserInfo from "@/hooks/useUserInfo";
import Stores from "@/stores";
import React, { useState } from "react";

const useUserDropdown = () => {
  const [show, setShow] = useState(false);
  const { logout } = useUserInfo();
  const toggleShow = () => {
    setShow(!show);
  };
  return {
    show,
    toggleShow,
    logout,
  };
};

export default useUserDropdown;
