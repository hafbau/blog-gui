import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles, Grid, Divider } from '@material-ui/core';

import {
  Button,
  ItemGrid,
  P
} from "common/components";

import dashboardStyle from "assets/jss/components_styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {};
  
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <Link to="/user_info" ><Button color="primary" >Create Probate Application</Button></Link>
          </ItemGrid>
        </Grid>
        
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <Divider />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <P>Previous Applications goes here</P>
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
