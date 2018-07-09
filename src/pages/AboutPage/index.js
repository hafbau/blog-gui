import React from 'react';
import PropTypes from 'prop-types';

export default class AboutSection extends React.Component {
    state = {
        hover: false
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { article, classes } = this.props;

        return (
            <section>
                <h1>About</h1>
                <article className={classes.aboutText} ></article>
                <article className={classes.aboutImage}></article>
            </section>
        )
    }
}

AboutSection.propTypes = {
    classes: PropTypes.object.isRequired,
};