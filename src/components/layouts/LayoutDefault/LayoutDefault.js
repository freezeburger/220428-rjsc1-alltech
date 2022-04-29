import React from 'react';
import PropTypes from 'prop-types';
import './LayoutDefault.css';
import { BaseFooter, BaseHeader, BaseMain, useMediaQuery } from '../../base';


const LayoutDefault = ({ children,responsive }) => {

  const screenWide = useMediaQuery('(min-width:1024px)');

  const header = children.find(child => child.type === LayoutDefault.Header)?.props.children;
  const main = children.find(child => child.type === LayoutDefault.Main)?.props.children;
  const footer = children.find(child => child.type === LayoutDefault.Footer)?.props.children;


  return (
    <>
      {
      header && <BaseHeader> {header} </BaseHeader>
      }
      <BaseMain> {main} </BaseMain>
      {
        responsive && screenWide && footer && <BaseFooter>{footer} </BaseFooter>
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

LayoutDefault.defaultProps = {
  responsive:true
};

export default LayoutDefault;
