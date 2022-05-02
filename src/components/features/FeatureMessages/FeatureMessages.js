import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FeatureMessages.css';

import useLocalStorage from '../../../utils/use-local-storage.hook';
import { LangContext } from '../../containers/lang.context';


const FeatureMessages = (props) =>{

  const {appState, dispatch, types} = props;
  const {messages} = useContext(LangContext);

  const [savedData, updateSavedData] = useLocalStorage('TOKEN_FEATURE_MESSAGES', ['Mr.', 'Mss.']);

  return (
  <div className="FeatureMessages" data-testid="FeatureMessages">

    <code>
      { JSON.stringify(savedData) }
    </code>
    <button onClick={ () => updateSavedData([...savedData, 'Miss.'])}>{messages.BUTTON_ADD}</button>


    FeatureMessages Component :
    
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
