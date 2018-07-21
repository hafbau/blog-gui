import React from "react";
import PropTypes from "prop-types";
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  withStyles,
  // Button
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import headerStyle from "./headerStyle";
import HeaderLinks from "./HeaderLinks";

function Header({ ...props }) {
  const { classes } = props;
  return (
    <header className={classes.appBar}>
        <div className={classes.title}>
            <div className={classes.pageTitle}>
                Hafiz Suara
                <ArrowRight className={classes.middle} />
            </div>
            <Link to="/articles" className={classes.absoluteLink}></Link>
        </div>
        
        <HeaderLinks />
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);
