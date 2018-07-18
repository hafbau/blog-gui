import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackward from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

function ArticlesPageFooter(props) {
  const {
    arrowsClass,
    footerClass,
    hasPrev,
    hasNext,
    onNavigate
  } = props;
  return (
    <footer className={footerClass}>
      <ArrowBackward className={`${arrowsClass} ${!hasPrev && 'disabled'}`} onClick={() => onNavigate(-1)} />
      <ArrowForward className={`${arrowsClass} ${!hasNext && 'disabled'}`} onClick={() => onNavigate(1)} />
    </footer>
  );
}

ArticlesPageFooter.propTypes = {
  arrowsClass: PropTypes.string.isRequired,
  footerClass: PropTypes.string.isRequired
};

export default ArticlesPageFooter;
