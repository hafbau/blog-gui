// ##############################
// // // Header styles
// #############################

import {
  defaultFont, absoluteLink
} from 'assets/jss/global_styles_variables';

const headerStyle = theme => ({
  appBar: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    position: 'absolute',
    zIndex: '1029',
    color: '#555555',
    padding: '40px',
    transition: 'all 150ms ease 0s',
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    position: 'relative',
    lineHeight: '30px',
    borderRadius: '25px',
    padding: '10px 25px',
    fontSize: '18px',
    textTransform: 'none',
    color: '#f4f4f4',
    cursor: 'pointer',
    background: 'rgba(0, 0, 0, 0.2)',
    '&:hover,&:focus': {
      background: '#f4f4f4',
      color: '#232'
    }
  },
  middle: {
    verticalAlign: 'middle'
  },
  pageTitle: {
    fontWeight: '700'
  },
  absoluteLink
});

export default headerStyle;
