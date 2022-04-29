import React from 'react';
import PropTypes from 'prop-types';
import './LayoutDefault.css';
import { BaseButton, BaseFooter, BaseHeader, BaseMain, BaseInputGeneric, BaseInputPassword } from '../../base';



const LayoutDefault = ({ children }) => {

  const header = children.find(child => child.type === LayoutDefault.Header)?.props.children;
  const main = children.find(child => child.type === LayoutDefault.Main)?.props.children;
  const footer = children.find(child => child.type === LayoutDefault.Footer)?.props.children;


  return (
    <>
      {
      header && <BaseHeader> {header.children} </BaseHeader>
      }
      <BaseMain> {main} </BaseMain>
      {
        footer && <BaseFooter>{footer} </BaseFooter>
      }
    </>
  );
}
LayoutDefault.Header = () => null;
LayoutDefault.Main = () => null;
LayoutDefault.Footer = () => null;


LayoutDefault.propTypes = {
  // TODO
};

LayoutDefault.defaultProps = {};

export default LayoutDefault;
