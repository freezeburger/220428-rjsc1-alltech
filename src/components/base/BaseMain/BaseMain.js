import React from 'react';
import PropTypes from 'prop-types';
import './BaseMain.css';
import styled from '@emotion/styled';

const Main = styled.main`
  background-color: #eee;
  color:#222;
  width:100vw;
  height:80vh;
  display:flex;
  margin-top:5vh;
  padding:20px;
  padding-top:70px;
  box-sizing:border-box;
`;

const BaseMain = ({children:content}) => (
  <Main>
    {content}
  </Main>
);

BaseMain.propTypes = {};

BaseMain.defaultProps = {};

export default BaseMain;
