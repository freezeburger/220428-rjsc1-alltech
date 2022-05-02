import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './FeatureMessages.css';
import { useStore } from '../../../core/utils';

import useLocalStorage from '../../../utils/use-local-storage.hook';




const FeatureMessages = () =>{

  const [appState, dispatch, types] = useStore();
  const [savedData, updateSavedData] = useLocalStorage('TOKEN_FEATURE_MESSAGES', ['Mr.', 'Mss.']);

  return (
  <div className="FeatureMessages" data-testid="FeatureMessages">

    <code>
      { JSON.stringify(savedData) }
    </code>
    <button onClick={ () => updateSavedData([...savedData, 'Miss.'])}>Udpate</button>


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
