import React from 'react';
import PropTypes from 'prop-types';
import './BaseFooter.css';

import styled from '@emotion/styled'

const Footer = styled.footer`
  background-color: #333;
  color:white;
  height:15vh;
  width:100vw;
  display:flex;
  position:absolute;
  bottom:0;
  padding:1rem;
  box-sizing:border-box;
`;

const BaseFooter = (props) => (
  <Footer>
    <div>
    {props.children}
    </div>
  </Footer>
);

BaseFooter.propTypes = {};

BaseFooter.defaultProps = {};

export default BaseFooter;
