import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { P } from 'common/components';

export default class MenuItem extends React.Component {
    state = {
        hover: false
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { menuItem, classes } = this.props;

        return (
            <article
                className={classes.menuItem}
                key={menuItem.name}
                style={{ backgroundColor: menuItem.backgroundColor || '#333'}}
                onMouseEnter={() => this.toggleHover() }
                onMouseLeave={() => this.toggleHover() }
            >
                <Link to={menuItem.path} >
                    <div className={classes.menuItemTextWrapper}>
                        <h1>{menuItem.name}</h1>
                        <P>{menuItem.summary}</P>
                    </div>
                </Link>
            </article>
        )
    }
}

MenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    menuItem: PropTypes.object.isRequired,
};