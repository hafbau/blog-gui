import React from 'react';
import {
  withStyles,
  IconButton,
  Hidden
} from 'material-ui';
import { Person } from '@material-ui/icons';

import headerLinksStyle from 'assets/jss/components_styles/headerLinksStyle';

class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton
          color='inherit'
          aria-label='Person'
          className={classes.buttonLink}
        >
          <Person className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
