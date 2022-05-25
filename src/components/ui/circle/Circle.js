import "./Circle.scss";

const Circle = (props) => {
  return (
    <div className="circle" style={{ backgroundColor: props.color }}></div>
  );
};

export default Circle;
