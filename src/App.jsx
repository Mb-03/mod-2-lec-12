import Debounce from "./components/Debounce";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ResponsiveBox from "./components/ResponsiveBox";
import Todos from "./components/Todos";
import Toggle from "./components/Toggle";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [storedValue, setStoredValue] = useLocalStorage("theme", "Dark");

  return (
    <div>
      {/* <Todos /> */}
      <Debounce />
      <ResponsiveBox />
      <Toggle />

      {/* Local Storage */}
      <h2>{storedValue}</h2>
      <button onClick={() => setStoredValue("Dark")}>
        Switch to dark mode
      </button>
      <button onClick={() => setStoredValue("Light")}>
        Switch to light mode
      </button>
    </div>
  );
};

export default App;
