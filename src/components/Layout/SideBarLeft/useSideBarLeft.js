import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const useSideBarLeft = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    setShowSidebar(false);
  }, [pathName]);

  const toggleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return { toggleShowSidebar, showSidebar };
};

export default useSideBarLeft;
