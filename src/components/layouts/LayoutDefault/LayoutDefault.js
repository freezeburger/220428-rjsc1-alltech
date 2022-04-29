import React from 'react';
import PropTypes from 'prop-types';
import './LayoutDefault.css';
import { BaseButton, BaseFooter, BaseHeader, BaseMain, BaseInputGeneric, BaseInputPassword } from '../../base';



const LayoutDefault = ({ children }) => {

  const header = children.find(child => child.type === LayoutDefault.Header)
  const main = children.find(child => child.type === LayoutDefault.Main)
  const footer = children.find(child => child.type === LayoutDefault.Footer)

  console.log(header)

  return (
    <>
      {
      header && <BaseHeader> {header} </BaseHeader>
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
