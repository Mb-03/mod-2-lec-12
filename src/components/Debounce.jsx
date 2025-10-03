import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Debounce = () => {
  const [query, setQuery] = useState("");

  const debounced = useDebounce(query, 500);

  return (
    <div>
      <input
        type="text"
        placeholder="Product Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Searching for : {debounced}</p>
    </div>
  );
};

export default Debounce;
