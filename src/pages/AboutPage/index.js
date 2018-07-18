import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
// import { Link } from 'react-router-dom';
// import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import aboutPageStyles from './aboutPageStyle';

class AboutPage extends React.Component {
    state = {
        hover: false
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { article, classes } = this.props;

        return (
            <section className={classes.aboutSection + ' transition-item'}>
                <h1 className={classes.hidden}>About</h1>
                <article className={classes.aboutText} >
                    <ul>
                        <li>Collaborates</li>
                        <li>Provides Solutions</li>
                        <li>Communicates</li>
                        <li>Teaches</li>
                        <li>Blogs</li>
                        <li>...</li>
                        <li>and programs the web.</li>
                    </ul>
                    <div>
                        <SocialIcon url='https://github.com/hafbau' />
                        <SocialIcon url='https://twitter.com/hafbau' />
                        <SocialIcon url='https://www.linkedin.com/in/hafiz-suara-49b692166/' />
                        <SocialIcon url='https://www.facebook.com/suaraAO' />
                        {/* <Link to='/articles' ><ArrowLeft className={classes.middle} /> Blog</Link>
                        <Link to='/contact' >Contact <ArrowRight className={classes.middle} /></Link> */}
                    </div>
                </article>
                <article className={classes.aboutImage}></article>
            </section>
        )
    }
}

AboutPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(aboutPageStyles)(AboutPage)