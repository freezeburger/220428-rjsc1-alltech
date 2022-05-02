import React from 'react';
import PropTypes from 'prop-types';
import './BaseButton.css';

const BaseButton = (props) => (
  <div onClick={props.onClick}>
    {props.children}
  </div>
);

BaseButton.propTypes = {};

BaseButton.defaultProps = {};

export default BaseButton;
