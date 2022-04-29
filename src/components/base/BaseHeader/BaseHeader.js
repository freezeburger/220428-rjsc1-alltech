import React from 'react';
import PropTypes from 'prop-types';
import './BaseHeader.css';

const BaseHeader = ({children:content}) => (
  <>
    {content}
  </>
);

BaseHeader.propTypes = {};

BaseHeader.defaultProps = {};

export default BaseHeader;
