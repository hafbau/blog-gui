import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core';

import headerLinksStyle from './headerLinksStyle';
import OpenedMenu from '../OpenedMenu';

class HeaderLinks extends React.Component {
  state = {}

  toggleMenu() {
    this.setState({ openMenu: !this.state.openMenu })
  }
  render() {
    const { openMenu } = this.state;
    const { classes } = this.props;
    return (
      [
        <div
          key="buttonLink"
          color='inherit'
          aria-label='menu'
          className={classes.buttonLink}
          onClick={(e) => this.toggleMenu()}
        >
          {openMenu && <p className={classes.linkText}>Close</p>}
          {openMenu && <CloseIcon className={classes.links} />}
          {!openMenu && <p className={classes.linkText}>Menu</p>}
          {!openMenu && <MenuIcon className={classes.links} />}
        </div>,

        <div key="openedMenu">{this.state.openMenu && <OpenedMenu close={(e) => this.toggleMenu()} />}</div>
    ]
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
