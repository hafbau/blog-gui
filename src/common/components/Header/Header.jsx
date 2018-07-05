import React from "react";
import PropTypes from "prop-types";
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  withStyles,
  // Button
} from '@material-ui/core';

import headerStyle from "./headerStyle";

import HeaderLinks from "./HeaderLinks";

function Header({ ...props }) {
  const { classes } = props;
  return (
    <header className={classes.appBar}>
        <div className={classes.title}>
            Hafiz Suara
        </div>
        
        <div className={classes.title}>
            <ArrowRight className={classes.middle} />
        </div>
        
        <div className={classes.pageTitle}>Blog</div>
        
        <HeaderLinks />
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);
