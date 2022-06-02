import React from "react";
import PropTypes from "prop-types";
import "./Circle.scss";

/**
 * Component to display a circle filled with color.
 *
 * @component
 * @example
 * const colorValue = "#ffff" // Color of the circle
 * return (
 *   <Circle color={colorValue}  />
 * )
 */

const Circle = (props) => {
  return (
    <div className="circle" style={{ backgroundColor: props.color }}></div>
  );
};

Circle.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Circle;
