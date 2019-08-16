import React from 'react';
import PropTypes from 'prop-types';


const Input = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    required
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
