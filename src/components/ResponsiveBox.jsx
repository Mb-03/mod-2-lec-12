import useWidth from "../hooks/useWidth";

const ResponsiveBox = () => {
  const width = useWidth();

  return (
    <div>
      <h2>Screen Widht : {width}px</h2>
      {width < 600 ? <p>MObile View</p> : <p>Desktop view</p>}
    </div>
  );
};

export default ResponsiveBox;
