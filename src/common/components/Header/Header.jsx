import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  AppBar,
  Toolbar,
  Hidden,
  // Button
} from "material-ui";
import cx from "classnames";

import headerStyle from "assets/jss/components_styles/headerStyle";

import HeaderLinks from "./HeaderLinks";

function Header({ ...props }) {
  const { classes, color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* <Button href="#" className={classes.title}>
          </Button> */}
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
