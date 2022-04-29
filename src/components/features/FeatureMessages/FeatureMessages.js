import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './FeatureMessages.css';
import { useStore } from '../../../core/utils';




const FeatureMessages = () =>{

  const [appState, dispatch, types] = useStore();

  return (
  <div className="FeatureMessages" data-testid="FeatureMessages">
    FeatureMessages Component
    <button onClick={ ()=> dispatch({
      type: types.MESSAGE_CREATION_SUCCESS,
      payload: { text:'Hello World' , date:Date.now()}
    })}>
      Add Message
      </button>
    <br />
    {JSON.stringify(appState)}
  </div>
)}

FeatureMessages.propTypes = {};

FeatureMessages.defaultProps = {};

export default FeatureMessages;
