import React from 'react';
import PropTypes from 'prop-types';
import './BaseMain.css';

const BaseMain = ({children:content}) => (
  <>
    {content}
  </>
);

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
