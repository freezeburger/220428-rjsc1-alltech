import React from 'react';
import PropTypes from 'prop-types';

import LayoutDefault from '../../layouts';


const ViewHome = () => (
  <>
    <LayoutDefault>

      <LayoutDefault.Header>
          HEADER CONTENT
      </LayoutDefault.Header>

      <LayoutDefault.Main>
        MAIN CONTENT Features !!
        Container - Features
      </LayoutDefault.Main>

      <LayoutDefault.Footer>
        FOOTER CONTENT
      </LayoutDefault.Footer>
    
    </LayoutDefault>
  </>
);

ViewHome.propTypes = {};

ViewHome.defaultProps = {};

export default ViewHome;
