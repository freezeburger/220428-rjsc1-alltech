import React from 'react';
import PropTypes from 'prop-types';
import './BaseFooter.css';

const BaseFooter = (props) => (
  <>
    {props.children}
  </>
);

BaseFooter.propTypes = {};

BaseFooter.defaultProps = {};

export default BaseFooter;
