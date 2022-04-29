import React from 'react';
import PropTypes from 'prop-types';
import './LayoutDefault.css';
import { BaseButton, BaseFooter, BaseHeader, BaseMain, BaseInputGeneric, BaseInputPassword } from '../../base';

const LayoutDefault = () => (
  <>
    <BaseHeader>A</BaseHeader>
    <BaseMain>
        <h1>Content</h1>
        <BaseInputGeneric />
    </BaseMain>
    <BaseFooter></BaseFooter>
  </>
);

LayoutDefault.propTypes = {};

LayoutDefault.defaultProps = {};

export default LayoutDefault;
