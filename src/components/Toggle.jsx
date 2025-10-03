import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const [isVisible, handleIsVisible] = useToggle(false);

  return (
    <div>
      <h1>{isVisible && "This is a PopUp"}</h1>
      <button onClick={handleIsVisible}>
        {isVisible ? "Hide PopUp" : "Show PopUP"}
      </button>
    </div>
  );
};

export default Toggle;
