import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBackward from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

function ArticlesPageFooter(props) {
  const { classes, hasPrev, hasNext, onNavigate } = props;
  console.log('props', props)
  return (
    <footer className={classes.footer}>
      {hasPrev && <ArrowBackward className={classes.arrows} onClick={() => onNavigate(-1)} />}
      {hasNext && <ArrowForward className={classes.arrows} onClick={() => onNavigate(1)} />}
    </footer>
  );
}

ArticlesPageFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ArticlesPageFooter;
