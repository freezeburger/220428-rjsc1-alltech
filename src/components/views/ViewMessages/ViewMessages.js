import React from 'react';
import PropTypes from 'prop-types';
import LayoutDefault from '../../layouts';
import { FeatureMessages } from '../../features';

const ViewMessages = () => (
  <LayoutDefault>

    <LayoutDefault.Header>
      MESSAGES
    </LayoutDefault.Header>

    <LayoutDefault.Main>
      <FeatureMessages></FeatureMessages>
    </LayoutDefault.Main>

    <LayoutDefault.Footer>
      Brought to you by @AllTech !
    </LayoutDefault.Footer>

  </LayoutDefault>
);

ViewMessages.propTypes = {};

ViewMessages.defaultProps = {};

export default ViewMessages;
