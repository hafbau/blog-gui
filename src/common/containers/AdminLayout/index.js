import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import { Header, Footer } from 'common/components';
import adminRoutes from 'routes/adminRoutes';

import appStyle from 'assets/jss/components_styles/appStyle.jsx';

const switchRoutes = (
  <Switch>
    {adminRoutes.map((prop, key) => {
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
    console.log('this state', this.state)
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainPanel}>
          <Header
            routes={adminRoutes}
            handleMenuToggle={() => this.handleMenuToggle}
            {...rest}
          />
          
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(App);
