import React from 'react';
import PropTypes from 'prop-types';
import './BaseInput.css';
import { TextField } from '@mui/material';

const BaseInput = ( props ) => {

  // const {label,value,required, placeholder, onChange} = props;

  return (
  <>
  <TextField
          { ...props }
      /*     { ... {label, required, placeholder, onChange, value } } */
          margin="dense"
        />
  </>
)};

BaseInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

BaseInput.defaultProps = {
   label: 'Default Label', 
  required: true, 
  value:'Default Value',
  placeholder:'Placeholder Value',
  onChange:() => false,
};

export default BaseInput;
