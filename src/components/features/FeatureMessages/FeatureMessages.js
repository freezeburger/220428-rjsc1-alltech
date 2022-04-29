import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './FeatureMessages.css';

import store from '../../../core/store';

console.warn(store)

const FeatureMessages = () =>{

  const [ localState, setLocalState] = React.useState( store.getState() );

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setLocalState( store.getState() ))
    return () => unsubscribe();
  } , []);

  return (
  <div className="FeatureMessages" data-testid="FeatureMessages">
    FeatureMessages Component
    <br />
    {JSON.stringify(localState)}
  </div>
)}

FeatureMessages.propTypes = {};

FeatureMessages.defaultProps = {};

export default FeatureMessages;
