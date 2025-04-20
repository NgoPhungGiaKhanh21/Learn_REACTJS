import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ title }) => {
    return <button>{title}</button>;
};

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
    title: "Không xác định",
};

export default CustomButton;
