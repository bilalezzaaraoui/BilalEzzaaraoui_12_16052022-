import PropTypes from "prop-types";
import "./Circle.scss";

const Circle = (props) => {
  return (
    <div className="circle" style={{ backgroundColor: props.color }}></div>
  );
};

Circle.propTypes = {
  color: PropTypes.string,
};

export default Circle;
