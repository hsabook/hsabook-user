const { useState } = require("react");

const useMenuTab = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return { expanded, toggleMenu };
};

export default useMenuTab;
