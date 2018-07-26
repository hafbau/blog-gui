import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import { Header } from 'common/components';
import userRoutes from 'routes/userRoutes';
import userLayoutStyle from './userLayoutStyle';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const switchRoutes = (
    <Router>
        {/* <Route render={({ location }) => ( */}
            {/* <TransitionGroup>
                <CSSTransition
                    key={window.location.key}
                    timeout={300}
                    classNames='fade'
                > */}
                    <Switch location={window.location}>
                        {userRoutes.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />;
                        return <Route exact path={prop.path} component={prop.component} key={key} />;
                        })}
                    </Switch>
                {/* </CSSTransition>
            </TransitionGroup> */}
        {/* )} /> */}
    </Router>

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
        const myRoutes = switchRoutes;
        return (
            <div className={classes.mainPanel}>
            <Header
                routes={userRoutes}
                handleMenuToggle={() => this.handleMenuToggle}
                {...rest}
            />
            
            <div className={classes.content}>
                <div className={classes.container}>
                    {myRoutes}
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