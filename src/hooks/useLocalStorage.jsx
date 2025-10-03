import { useEffect, useState } from "react";

function useLocalStorage(key, initialvalue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialvalue;
    } catch (error) {
      return initialvalue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])


  return [storedValue, setStoredValue]

}

export default useLocalStorage
