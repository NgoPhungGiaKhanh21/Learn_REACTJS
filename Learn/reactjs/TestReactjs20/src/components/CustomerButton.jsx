import React from 'react'
import PropTypes from 'prop-types'

const CustomerButton = (props) => {

    const { title } = props;
    return <button>{title}</button>
};
CustomerButton.propTypes = {
    title: PropTypes.string.isRequired
};
CustomerButton.defaultProps = {
    title: "Không xác định"
};
export default CustomerButton;
