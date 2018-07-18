import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

// import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, MultiPurposeInput as Input } from 'common/components';

import contactPageStyles from './contactPageStyle';

class AboutPage extends React.Component {
    state = {
        hover: false
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { classes } = this.props;

        return (
            <section className={classes.contactSection + ' transition-item'}>
                <h1 className={classes.hidden}>Contact</h1>
                <article className={classes.contactFormWrapper} >
                    <div className={classes.contactIntro}>Want to send me some feedback, or just say hi? Please reach out.</div>
                    <form>
                        <Input
                            type="text"
                            labelText="Name"
                            id="name"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                name: "name",
                                // onChange: handleChange
                            }}
                        />
                        
                        <Input
                            type="text"
                            labelText="Email"
                            id="email"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                name: "email",
                                // onChange: handleChange
                            }}
                        />

                        <Input
                            type="text"
                            labelText="Message"
                            id="message"
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                name: "message",
                                multiline: true,
                                rows: 2
                                // onChange: handleChange
                            }}
                        />

                        <Button>
                            SEND
                        </Button>
                    </form>
                    
                    {/* <div className={classes.footerNav}>
                        <Link to="/articles" ><ArrowLeft className={classes.middle} /> Blog</Link>
                        <Link to="/about" >About <ArrowRight className={classes.middle} /></Link>
                    </div> */}
                </article>
            </section>
        )
    }
}

AboutPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(contactPageStyles)(AboutPage)