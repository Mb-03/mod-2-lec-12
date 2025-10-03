import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWIdth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWIdth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWidth;
