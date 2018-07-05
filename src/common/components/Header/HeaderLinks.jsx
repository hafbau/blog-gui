import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  withStyles,
  IconButton,
} from '@material-ui/core';

import headerLinksStyle from './headerLinksStyle';

class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div
          color='inherit'
          aria-label='menu'
          className={classes.buttonLink}
        >
          <p className={classes.linkText}>Menu</p>
          <MenuIcon className={classes.links} />
        </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
