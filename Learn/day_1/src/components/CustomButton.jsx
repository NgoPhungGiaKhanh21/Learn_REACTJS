import PropTypes from "prop-types";
import React from "react";

const CustomButton = ({ title }) => {
  // console.log(title);
  return <button>{title}</button>;
};

CustomButton.propTypes = {
  title: PropTypes.number.isRequired,
};
CustomButton.defaultProps = {
  title: "đây là nút",
};

export default CustomButton;
