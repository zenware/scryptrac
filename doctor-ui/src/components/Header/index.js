import React, { Component } from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

//import logo from './logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              ScrypTrac
            </Typography>
            <Button onClick={this.setState({loggedIn: true})} color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default Header;
