import React from 'react';
import PropTypes from 'prop-types';
export default class ContactSection extends React.Component {
    state = {
        hover: false
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { classes } = this.props;

        return (
            <section>
                <h1>Contact</h1>
                <article className={classes.contactText} ></article>
                <article className={classes.contactImage}></article>
            </section>
        )
    }
}

ContactSection.propTypes = {
    classes: PropTypes.object.isRequired,
};