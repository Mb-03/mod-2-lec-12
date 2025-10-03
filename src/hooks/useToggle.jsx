import { useState } from "react";

const useToggle = (bool) => {
  const [isVisible, setIsVisible] = useState(bool);
  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return [isVisible, handleVisible];
};

export default useToggle;
