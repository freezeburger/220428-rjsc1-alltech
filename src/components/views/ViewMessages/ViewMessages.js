import React from 'react';
import PropTypes from 'prop-types';
import LayoutDefault from '../../layouts';
import { FeatureMessages } from '../../features';
import withStore from '../../containers/store.hoc';

const FeatureMessagesFromStore = withStore(FeatureMessages);

const ViewMessages = () => (
  <LayoutDefault>

    <LayoutDefault.Header>
      MESSAGES
    </LayoutDefault.Header>

    <LayoutDefault.Main>
      <FeatureMessagesFromStore />
    </LayoutDefault.Main>

    <LayoutDefault.Footer>
      Brought to you by @AllTech !
    </LayoutDefault.Footer>

  </LayoutDefault>
);

ViewMessages.propTypes = {};

ViewMessages.defaultProps = {};

export default ViewMessages;
