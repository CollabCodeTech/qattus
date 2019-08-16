import React from 'react';
import PropTypes from 'prop-types';

const TitlePage = ({ title }) => (
  <h1>{title}</h1>
);

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitlePage;
