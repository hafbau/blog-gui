import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import { Header } from 'common/components';
import userRoutes from 'routes/userRoutes';

import PageTransition from 'react-router-page-transition';
import userLayoutStyle from './userLayoutStyle';

const switchRoutes = (location) => (
  <Switch location={location} >
    {userRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: true
  };
  handleMenuToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainPanel}>
          <Header
            routes={userRoutes}
            handleMenuToggle={() => this.handleMenuToggle}
            {...rest}
          />
          <PageTransition>
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes(this.props.location)}</div>
            </div>
          </PageTransition>
          
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(userLayoutStyle)(App);
