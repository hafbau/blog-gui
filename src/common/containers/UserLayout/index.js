import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import { Header } from 'common/components';
import userRoutes from 'routes/userRoutes';
import userLayoutStyle from './userLayoutStyle';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Transitions from '../Transitions';

const switchRoutes = (
    <Switch>
        {userRoutes.map((prop, key) => {
        if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
        return <Route exact path={prop.path} component={prop.component} key={key} />;
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
        const { classes, location, ...rest } = this.props;
        return (
            <div className={classes.mainPanel}>
            <Header
                routes={userRoutes}
                handleMenuToggle={() => this.handleMenuToggle}
                {...rest}
            />
            
            <div className={classes.content}>
                    <div className={classes.container}>
                        <Transitions pageKey={location.key} duration={800} transition='page'>
                            <Switch location={location}>
                            {userRoutes.map((prop, key) => {
                            if (prop.redirect)
                                return <Redirect from={prop.path} to={prop.to} key={key} />;
                            return <Route path={prop.path} component={prop.component} key={key} />;
                            })}
                        </Switch>
                    </Transitions>
                </div>
            </div>
            
            </div>
        );
    }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(userLayoutStyle)(App);