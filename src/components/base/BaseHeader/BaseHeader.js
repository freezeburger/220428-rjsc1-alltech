import React from 'react';
import PropTypes from 'prop-types';
import './BaseHeader.css';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const BaseHeader = ({ children }) => (
  <AppBar >
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      {children}
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar >
);

BaseHeader.propTypes = {};

BaseHeader.defaultProps = {};

export default BaseHeader;
