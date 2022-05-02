import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './FeatureMessages.css';

import useLocalStorage from '../../../utils/use-local-storage.hook';
import { LangContext } from '../../containers/lang.context';


const FeatureMessages = (props) =>{

  const {appState, dispatch, types} = props;

  const {messages} = useContext(LangContext);
  const [savedData, updateSavedData] = useLocalStorage('TOKEN_FEATURE_MESSAGES', ['Mr.', 'Mss.']);

  console.log('ULS', useLocalStorage('TOKEN_FEATURE_MESSAGES', ['Mr.', 'Mss.']))

  return (
  <div>

    <code>
      { JSON.stringify(savedData) }
    </code>

    <button onClick={ () => updateSavedData([...savedData, 'Miss.'])}>{messages.BUTTON_ADD}</button>

    <h1>FeatureMessages Component :</h1>
    
    <button onClick={ ()=> dispatch({
      type: types.MESSAGE_LIST_UPDATE_REQUEST,
      payload: null
    })}>
      Refresh Messages
    </button>

    <br />
    <ul>
        {
          appState.messages.map( (msg, index) => <li key={index}>{msg.text}</li>)
        }
    </ul>
  </div>
)}

FeatureMessages.propTypes = {};

FeatureMessages.defaultProps = {};

export default FeatureMessages;
