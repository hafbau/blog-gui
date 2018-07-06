import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import openedMenuStyles from './openedMenuStyles';
import MenuItem from './MenuItem';

class OpenedMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {
                    'name': 'About',
                    'path': '/about',
                    'summary': 'This is your route to know more',
                    'backgroundColor': '#555'
                },
                {
                    'name': 'Blog',
                    'path': '/blog',
                    'summary': 'This is taking you back to the home of blog',
                    'backgroundColor': '#333'
                },
                {
                    'name': 'Contact',
                    'path': '/contact',
                    'summary': 'If you want to give your feedback of your whole experience or just say hi, click me',
                    'backgroundColor': '#111'
                }
            ]
        }
    }
  
    render() {
        const { menuItems } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.openedMenu}>
                {menuItems.map(menuItem => <MenuItem
                    key={menuItem.name}
                    menuItem={menuItem}
                    classes={classes}
                />)}
            </div>
        );
    }
}

OpenedMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(openedMenuStyles)(OpenedMenu);