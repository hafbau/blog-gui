import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { withStyles } from 'material-ui';
import { Header, Footer } from 'common/components';
import userRoutes from 'routes/userRoutes';

import userLayoutStyle from './userLayoutStyle';

const switchRoutes = (
  <Switch>
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

export default withStyles(userLayoutStyle)(App);
